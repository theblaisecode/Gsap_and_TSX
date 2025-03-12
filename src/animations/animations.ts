import { gsap } from "gsap";

// Make the text move right
export const slideRight = (target: string | HTMLElement | null) => {
  if (!target) return;
  gsap.to(target, { x: 400, duration: 3, opacity: 0.5, delay: 2 });
};

export const headerFade = (target: string | HTMLElement | null) => {
  if (!target) return;

  gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 2 });
};
