"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Math.max(1, Math.ceil(target / 60));
            let cur = 0;
            const tick = () => {
              cur += step;
              if (cur >= target) {
                setValue(target);
              } else {
                setValue(cur);
                requestAnimationFrame(tick);
              }
            };
            tick();
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}
