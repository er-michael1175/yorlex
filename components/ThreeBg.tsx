"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import type { VantaEffect, VantaGlobeFactory } from "../lib/vanta";
import { VANTA_GLOBE_CONFIG } from "../lib/vanta";

declare global {
  interface Window {
    THREE?: unknown;
    VANTA?: { GLOBE?: VantaGlobeFactory };
  }
}

const THREE_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
const VANTA_URL =
  "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";

export default function ThreeBg() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const threeLoadedRef = useRef(false);
  const vantaLoadedRef = useRef(false);
  const initializedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [failed, setFailed] = useState(false);

  function initVanta(): void {
    if (initializedRef.current) return;
    if (!threeLoadedRef.current || !vantaLoadedRef.current) return;
    if (!vantaRef.current) return;

    const globe = window.VANTA?.GLOBE;
    const three = window.THREE;
    if (!globe || !three) return;

    try {
      effectRef.current = globe({
        ...VANTA_GLOBE_CONFIG,
        el: vantaRef.current,
        THREE: three,
      });
      initializedRef.current = true;

      // Clear the timeout since initialization succeeded
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    } catch (err) {
      console.warn("Vanta initialization failed:", err);
      setFailed(true);
    }
  }

  function handleThreeLoad(): void {
    threeLoadedRef.current = true;
    initVanta();
  }

  function handleVantaLoad(): void {
    vantaLoadedRef.current = true;
    initVanta();
  }

  function handleScriptError(): void {
    setFailed(true);
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  useEffect(() => {
    // Start a 10s timeout — if initialization hasn't completed by then, give up gracefully
    timeoutRef.current = setTimeout(() => {
      if (!initializedRef.current) {
        setFailed(true);
      }
      timeoutRef.current = null;
    }, 10_000);

    return () => {
      // Clear timeout on unmount
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      // Tear down the effect
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch {
          // Ignore destroy errors on unmount
        }
        effectRef.current = null;
      }
    };
  }, []);

  if (failed) {
    // Render the container without the effect — page stays interactive, no error thrown
    return <div className="absolute inset-0 w-full h-full z-0" />;
  }

  return (
    <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0">
      <Script
        src={THREE_URL}
        strategy="afterInteractive"
        onLoad={handleThreeLoad}
        onError={handleScriptError}
      />
      <Script
        src={VANTA_URL}
        strategy="afterInteractive"
        onLoad={handleVantaLoad}
        onError={handleScriptError}
      />
    </div>
  );
}
