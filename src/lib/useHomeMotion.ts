import { useEffect, useRef } from "react";

export function useHomeMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const home = ref.current;
    if (!home) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 1024px)");
    const assembly = home.querySelector<HTMLElement>(".h-assembly");
    const panels = [...home.querySelectorAll<HTMLElement>("[data-assembly-panel]")];
    const animations = new Set<Animation>();
    let frame = 0;
    let lastStep = -2;
    const update = () => {
      frame = 0;
      const enhanced = desktop.matches && !reduced.matches;
      home.classList.toggle("h-motion-ready", enhanced);
      if (reduced.matches) animations.forEach(animation => animation.cancel());
      if (!assembly) return;
      const bounds = assembly.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight * .2 - bounds.top) / Math.max(1, bounds.height - innerHeight * .8)));
      assembly.style.setProperty("--assembly-progress", progress.toFixed(4));
      const step = enhanced ? Math.min(2, Math.floor(progress * 3)) : -1;
      if (step === lastStep) return;
      lastStep = step;
      assembly.dataset.assemblyStep = String(step);
      panels.forEach((panel, index) => {
        panel.inert = enhanced && index !== step;
        if (enhanced && index !== step) panel.setAttribute("aria-hidden", "true");
        else panel.removeAttribute("aria-hidden");
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    desktop.addEventListener("change", schedule);
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.intersectionRatio < .3) return;
        const element = entry.target as HTMLElement;
        observer?.unobserve(element);
        element.dataset.revealed = "true";
        if (reduced.matches || typeof element.animate !== "function" || element.contains(document.activeElement)) return;
        const inHero = !!element.closest(".h-home-hero");
        const bounds = element.getBoundingClientRect();
        const triggerTop = innerHeight - 96 - bounds.height * .3;
        // A fast scroll should never turn already readable content into an entrance.
        if (bounds.top < 0 || (bounds.top < triggerTop - innerHeight * .2 && (!inHero || scrollY > 0))) return;
        const kind = element.dataset.reveal;
        // Individual transforms preserve authored rotation and centering.
        const travel = desktop.matches ? 20 : 12;
        const start: Keyframe = kind === "row" ? { opacity: .45, translate: "-10px 0" }
          : kind === "picture" ? { opacity: .55, translate: `0 ${travel + 4}px` }
          : kind === "code" ? { opacity: .4, translate: "10px 0" }
          : { opacity: .25, translate: `0 ${travel}px` };
        const animation = element.animate([start, { opacity: 1, translate: "0 0" }], {
          duration: desktop.matches ? (kind === "picture" ? 1000 : 850) : (kind === "picture" ? 850 : 700),
          delay: inHero && scrollY === 0 ? Math.min(240, Number(element.dataset.revealDelay) || 0)
            : kind === "row" ? Math.min(180, Number(element.dataset.revealDelay) || 0) : 0,
          easing: "cubic-bezier(.22,.61,.36,1)", fill: "backwards",
        });
        animations.add(animation);
        animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
      });
    }, { threshold: .3, rootMargin: "0px 0px -96px 0px" });
    home.querySelectorAll("[data-home-reveal]").forEach(element => observer?.observe(element));
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, []);
  return ref;
}
