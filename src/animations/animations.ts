import { gsap } from "gsap";

// Function to animate a specific element
export const slideRight = (target: string | HTMLElement | null) => {
  if (!target) return;
  gsap.to(target, { x: 400, duration: 3, opacity: 0.5 });
};
