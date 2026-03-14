import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  size?: "sm" | "default";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  href,
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "btn-cta inline-flex items-center justify-center font-bold uppercase no-underline bg-gold text-ink tracking-widest disabled:opacity-40 disabled:cursor-not-allowed";

  const sizes = {
    sm: "gap-3 text-[.68rem] tracking-[.18em] px-6 py-3",
    default: "gap-5 text-xs tracking-[.22em] px-5 py-4 lg:px-9 lg:py-5",
  };

  const cls = cn(base, sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
