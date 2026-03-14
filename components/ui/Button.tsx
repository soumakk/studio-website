import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  size?: "sm" | "default";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href = "#contact",
  size = "default",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "btn-cta inline-flex items-center font-bold uppercase no-underline bg-gold text-ink tracking-widest";

  const sizes = {
    sm: "gap-3 text-[.68rem] tracking-[.18em] px-6 py-3",
    default: "gap-5 text-xs tracking-[.22em] px-9 py-5",
  };

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
