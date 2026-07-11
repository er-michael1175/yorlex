export interface VantaGlobeConfig {
  el: HTMLElement;
  THREE: unknown;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  scale: number;
  scaleMobile: number;
  color: number;
  color2: string;
  backgroundColor: number;
}

export interface VantaEffect {
  destroy(): void;
}

export type VantaGlobeFactory = (config: VantaGlobeConfig) => VantaEffect;

export const VANTA_GLOBE_CONFIG: Omit<VantaGlobeConfig, "el" | "THREE"> = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xb19799,
  color2: "rgba(153,187,43,0.3)",
  backgroundColor: 0x0f1b2c,
};
