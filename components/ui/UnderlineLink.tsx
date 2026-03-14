"use client";
import Link from "next/link";
import { useRef, useState } from "react";

type UnderlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export default function UnderlineLink({
  href,
  children,
  className = "",
  target,
  rel,
  onClick,
}: UnderlineLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`relative inline-block no-underline ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}

      {/* Underline */}
      <span
        className="absolute bottom-0 left-0 h-px bg-gold"
        style={{
          width: hovered ? "100%" : "0%",
          transition: hovered
            ? "width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transformOrigin: "left",
        }}
      />
    </Link>
  );
}
