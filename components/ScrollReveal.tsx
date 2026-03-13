"use client";

import { useEffect, useRef, JSX } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: "d1" | "d2" | "d3" | "d4";
  as?: keyof JSX.IntrinsicElements;
}

export default function R({
  children,
  className = "",
  delay,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -36px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ["reveal", delay, className].filter(Boolean).join(" ");

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  );
}
