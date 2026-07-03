"use client";

import { useEffect } from "react";

interface UseDismissableOptions {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Closes on Escape keydown within 200ms and restores focus to the trigger element.
 * If the trigger is no longer connected to the DOM, moves focus to document.body
 * to prevent focus loss (R3.7).
 */
export function useDismissable({ isOpen, onClose, triggerRef }: UseDismissableOptions): void {
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      event.preventDefault();

      // Close within 200ms by invoking onClose immediately (synchronous < 200ms)
      onClose();

      // Restore focus to trigger if still connected, otherwise to document.body
      if (triggerRef.current?.isConnected) {
        triggerRef.current.focus();
      } else {
        document.body.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, triggerRef]);
}
