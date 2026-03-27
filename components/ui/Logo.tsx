import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ({
  onClick,
  theme,
}: {
  theme?: "light" | "dark";
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "font-logo text-3xl uppercase no-underline",
        theme === "light" ? "text-inc" : "text-cream",
      )}
      onClick={onClick}
    >
      SOUMAK<span>.</span>
    </Link>
  );
}
