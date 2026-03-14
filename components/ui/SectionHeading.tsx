import { ReactNode } from "react";
import R from "../ScrollReveal";
import Button from "./Button";

export default function SectionHeading({
  heading,
  subHeading,
  theme = "dark",
  button,
}: {
  heading: ReactNode;
  subHeading: string;
  theme?: "dark" | "light";
  button?: {
    href?: string;
    title: string;
  };
}) {
  const isDark = theme === "dark";

  return (
    <R className="flex items-end justify-between mb-16">
      <div>
        <div
          className={`flex items-center gap-4 mb-4 text-sm tracking-[.35em] uppercase text-gold`}
        >
          <span className="block w-8 h-px bg-gold" /> {subHeading}
        </div>
        <h2
          className={`font-display font-light leading-none text-5xl ${isDark ? "text-white" : "text-ink"}`}
        >
          {heading}
        </h2>
      </div>

      {button ? (
        <Button size="sm" href={button.href}>
          {button.title}
        </Button>
      ) : null}
    </R>
  );
}
