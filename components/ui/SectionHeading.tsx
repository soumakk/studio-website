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
    <R className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-16">
      <div className="mb-8 lg:mb-">
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

      <div>
        {button ? (
          <Button size="sm" href={button.href}>
            {button.title}
          </Button>
        ) : null}
      </div>
    </R>
  );
}
