import { careersDefaultContent } from "./careers";
import { contactDefaultContent } from "./contact";

export const PAGE_REGISTRY = {
  careers: { label: "Careers", defaults: careersDefaultContent, routePath: "/careers" },
  contact: { label: "Contact", defaults: contactDefaultContent, routePath: "/contact" },
} as const;

export type PageKey = keyof typeof PAGE_REGISTRY;

export function isPageKey(value: string): value is PageKey {
  return Object.prototype.hasOwnProperty.call(PAGE_REGISTRY, value);
}
