import Link from "next/link";
import Container from "./Container";

const socials = ["in", "be", "ig", "yt"];

export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-white/[.04] px-12 pt-8 pb-8">
      <Container>
        <div className="grid grid-cols-3 gap-16 mb-8 items-center">
          {/* Brand */}
          <div>
            <p className="font-ui font-extrabold text-xl tracking-[.28em] uppercase text-white mb-3">
              SOUMAK<span className="text-gold">.</span>
            </p>
            <p className="text-[.78rem] leading-[1.9] text-dim max-w-[220px]">
              3D product visualization for brands
            </p>
          </div>

          <div>
            <div className="flex flex-row gap-5">
              {["Work", "Services", "Contact"].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-sm text-dim no-underline hover:text-stone transition-colors duration-300"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-dim text-[.7rem] no-underline hover:border-gold hover:text-gold transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-white/[.04]">
          <p className="text-sm tracking-[.1em] text-dim/60">
            © 2025 Soumak. All rights reserved.
          </p>
          <p className="text-sm tracking-[.1em] text-dim/60">
            Designed &amp; built with intent.
          </p>
        </div>
      </Container>
    </footer>
  );
}
