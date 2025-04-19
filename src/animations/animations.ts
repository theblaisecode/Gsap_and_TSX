import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Make the text move right
export const slideRight = (target: string | HTMLElement | null) => {
  if (!target) return;
  gsap.to(target, { x: 400, duration: 3, opacity: 0.5, delay: 2 });
};

export const headerFade = (target: string | HTMLElement | null) => {
  if (!target) return;

  gsap.fromTo(target, { opacity: 0 }, { opacity: 1, duration: 2 });
};

// Slide Up
gsap.registerPlugin(ScrollTrigger);

export const animateElements = () => {
  gsap.set(".animate", { autoAlpha: 0, y: 100 });

  ScrollTrigger.batch(".animate", {
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        overwrite: true,
      }),
    onLeaveBack: (batch) =>
      gsap.to(batch, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.2,
        overwrite: true,
      }),
  });

  ScrollTrigger.addEventListener("refreshInit", () =>
    gsap.set(".animate", { autoAlpha: 1, y: 0 })
  );
};
