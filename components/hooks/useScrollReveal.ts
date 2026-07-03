"use client";

import { useEffect, useRef, useState } from "react";

export interface UseScrollRevealOptions {
  /** Visibility threshold (0-1) at which the element is considered in-view. Default: 0.15 */
  threshold?: number;
  /** Root margin for the IntersectionObserver. Default: '0px 0px -50px 0px' */
  rootMargin?: string;
}

export interface UseScrollRevealReturn {
  ref: React.RefObject<HTMLElement | null>;
  isInView: boolean;
}

/**
 * One-shot scroll-reveal hook powered by IntersectionObserver.
 * `isInView` transitions to `true` exactly once when the referenced element
 * enters the viewport, then the observer disconnects to prevent memory leaks.
 *
 * Falls back to `isInView = true` immediately if IntersectionObserver is unavailable.
 */
export function useScrollReveal(options?: UseScrollRevealOptions): UseScrollRevealReturn {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(() => {
    // Fallback: if IntersectionObserver is unavailable, mark as visible immediately
    if (typeof IntersectionObserver === "undefined") {
      return true;
    }
    return false;
  });

  useEffect(() => {
    // If already in view (fallback triggered) or IO unavailable, nothing to do
    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
    // One-shot: options are consumed once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isInView };
}
