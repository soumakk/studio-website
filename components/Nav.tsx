"use client";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Logo from "./ui/Logo";
import UnderlineLink from "./ui/UnderlineLink";

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const secs = document.querySelectorAll<HTMLElement>("section[id]");
    const onScroll = () => {
      let cur = "";
      secs.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="z-50 px-6 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo theme="light" onClick={() => setOpen(false)} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {/*{NAV_LINKS.map(({ href, label }) => (
              <UnderlineLink
                key={href}
                href={href}
                className={`nav-lnk text-sm text-black font-semibold tracking-wide uppercase no-underline${
                  active === href.slice(1) ? " on" : ""
                }`}
              >
                {label}
              </UnderlineLink>
            ))}*/}
            <Button href="#contact" size="sm">
              Let's Talk
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px bg-white transition-all duration-300 origin-center ${
                open ? "w-6 translate-y-[7px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                open ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 origin-center ${
                open ? "w-6 -translate-y-[7px] -rotate-45" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full page mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col justify-between px-8 py-32 transition-all duration-500 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav links */}
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map(({ href, label }, i) => (
            <p key={href}>
              <UnderlineLink
                href={href}
                onClick={() => setOpen(false)}
                className={`font-display text-5xl leading-none uppercase text-white no-underline transition-all duration-500 hover:text-gold ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {label}
              </UnderlineLink>
            </p>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`flex flex-col gap-8 transition-all duration-500 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: open ? "320ms" : "0ms" }}
        >
          {/* Socials */}
          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <p key={label}>
                <UnderlineLink
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-display tracking-[.18em] uppercase hover:text-gold transition-colors duration-300 no-underline"
                >
                  {label}
                </UnderlineLink>
              </p>
            ))}
          </div>

          <div>
            <Button href="#contact" onClick={() => setOpen(false)}>
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
