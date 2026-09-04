'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function HorizontalGallery({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const scrollEl = scrollRef.current;

    if (!container || !scrollEl) return;
    if (window.innerWidth < 768) return;

    const getScrollAmount = () => -(scrollEl.scrollWidth - window.innerWidth);

    let skewSetter = gsap.quickSetter(gsap.utils.toArray(scrollEl.children), "skewX", "deg");
    let proxy = { skew: 0 };

    const tween = gsap.to(scrollEl, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          let skew = self.getVelocity() / -200;
          if (Math.abs(skew) > 20) skew = skew > 0 ? 20 : -20;
          
          gsap.to(proxy, {
            skew: skew,
            duration: 0.5,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew)
          });
        }
      }
    });

    const onScrollEnd = () => {
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew)
      });
    };
    ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);

    return () => {
      tween.kill();
      ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative md:h-screen md:overflow-hidden bg-brand-bg flex items-center py-10 md:py-0 border-y border-white/5">
      <div ref={scrollRef} className="flex flex-col md:flex-row gap-8 px-6 md:px-12 md:h-[70vh] md:w-max">
        {children}
      </div>
    </section>
  );
}
