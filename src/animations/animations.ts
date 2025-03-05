import { gsap } from "gsap";

// Make the text move right
export const slideRight = (target: string | HTMLElement | null) => {
  if (!target) return;
  gsap.to(target, { x: 400, duration: 3, opacity: 0.5 });
};
