import Link from "next/link";
import Container from "./ui/Container";
import Logo from "./ui/Logo";
import { SOCIAL_LINKS, YEAR } from "@/lib/data";

const socials = ["in", "be", "ig", "yt"];

export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-white/[.04] px-6 pt-8 pb-8">
      <Container>
        <div className="flex justify-between items-center">
          {/* Brand */}
          <Logo />

          <p className="text-sm  text-dim/90 font-medium text-center">
            © {YEAR} Soumak. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
