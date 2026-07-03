"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

/**
 * Animated counter hook that counts up from 0 to the target value
 * using a requestAnimationFrame-based animation with an ease-out-expo curve.
 * Animation triggers only when the element enters the viewport.
 *
 * @param target - The target number to count up to
 * @param duration - Animation duration in milliseconds (default: 2000ms)
 * @returns `{ ref, count }` where ref attaches to the observed element and count is the current animated value
 */
export function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useScrollReveal({ threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out-expo curve for natural deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(easedProgress * target);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  return { ref, count };
}
