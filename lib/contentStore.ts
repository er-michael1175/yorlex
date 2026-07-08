import "server-only";
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTENT_FILE = path.join(DATA_DIR, "site-content.json");

type StoredEntry = { value: unknown; version: number };
type StoredContent = Record<string, StoredEntry>;

export class ContentConflictError extends Error {
  constructor() {
    super("Content was modified elsewhere since it was last loaded.");
    this.name = "ContentConflictError";
  }
}

async function readAll(): Promise<StoredContent> {
  try {
    const raw = await fs.readFile(CONTENT_FILE, "utf-8");
    return JSON.parse(raw) as StoredContent;
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return {};
    throw err;
  }
}

async function writeAll(content: StoredContent): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2), "utf-8");
}

export async function getPageContent<T>(page: string, defaults: T): Promise<T> {
  const all = await readAll();
  const entry = all[page];
  return entry ? (entry.value as T) : defaults;
}

export async function getPageContentWithVersion<T>(
  page: string,
  defaults: T
): Promise<{ content: T; version: number }> {
  const all = await readAll();
  const entry = all[page];
  return entry ? { content: entry.value as T, version: entry.version } : { content: defaults, version: 0 };
}

/**
 * Writes only succeed if `expectedVersion` matches what's currently stored.
 * This stops a stale browser tab (holding an old copy of the content) from
 * silently overwriting newer edits made elsewhere.
 */
export async function savePageContent(
  page: string,
  content: unknown,
  expectedVersion: number
): Promise<number> {
  const all = await readAll();
  const current = all[page];
  const currentVersion = current ? current.version : 0;

  if (currentVersion !== expectedVersion) {
    throw new ContentConflictError();
  }

  const nextVersion = currentVersion + 1;
  all[page] = { value: content, version: nextVersion };
  await writeAll(all);
  return nextVersion;
}
