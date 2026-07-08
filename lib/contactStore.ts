import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type ContactSubmission = {
  id: string;
  type: "client" | "general";
  name: string;
  email: string;
  message: string;
  areaOfInterest?: string;
  createdAt: string;
  handled: boolean;
};

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "contact-submissions.json");

async function readAll(): Promise<ContactSubmission[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as ContactSubmission[];
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(submissions: ContactSubmission[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");
}

export async function addSubmission(
  input: Omit<ContactSubmission, "id" | "createdAt" | "handled">
): Promise<ContactSubmission> {
  const submissions = await readAll();
  const submission: ContactSubmission = {
    ...input,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    handled: false,
  };
  submissions.unshift(submission);
  await writeAll(submissions);
  return submission;
}

export async function listSubmissions(): Promise<ContactSubmission[]> {
  return readAll();
}

export async function markHandled(id: string, handled: boolean): Promise<void> {
  const submissions = await readAll();
  const idx = submissions.findIndex((s) => s.id === id);
  if (idx === -1) return;
  submissions[idx].handled = handled;
  await writeAll(submissions);
}

export async function deleteSubmission(id: string): Promise<void> {
  const submissions = await readAll();
  await writeAll(submissions.filter((s) => s.id !== id));
}
