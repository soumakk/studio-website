import Link from "next/link";

export default function ({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      className="font-display text-3xl uppercase text-white no-underline"
      onClick={onClick}
    >
      SOUMAK<span className="text-gold">.</span>
    </Link>
  );
}
