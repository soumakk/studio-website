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
    "btn-cta inline-flex items-center rounded-full text-cream uppercase justify-center font-semibold no-underline bg-gold disabled:opacity-40 disabled:cursor-not-allowed";

  const sizes = {
    sm: "gap-3 text-xs tracking-wide px-5 py-3",
    default: "gap-5 text-sm px-5 py-4 lg:px-7 lg:py-4 tracking-wide",
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
