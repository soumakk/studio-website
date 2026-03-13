"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [active, setActive] = useState("");

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

  const lnk = (href: string, label: string) => (
    <a
      href={href}
      className={`nav-lnk text-[.68rem] tracking-[.18em] uppercase no-underline${
        active === href.slice(1) ? " on" : ""
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50  px-12 py-8"
      style={{
        background:
          "linear-gradient(to bottom,rgba(8,8,8,.96) 0%,transparent 100%)",
      }}
    >
      <div className=" max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-ui font-extrabold text-sm tracking-[.28em] uppercase text-white no-underline"
        >
          SOUMAK<span className="text-gold">.</span>
        </Link>

        <div className="flex items-center gap-10">
          {lnk("#work", "Work")}
          {lnk("#services", "Services")}
          {lnk("#testimonials", "Testimonials")}
          <Link
            href="#contact"
            className="btn-cta inline-flex items-center gap-3 bg-gold text-ink text-[.68rem] font-bold tracking-[.18em] uppercase px-6 py-3 no-underline"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
