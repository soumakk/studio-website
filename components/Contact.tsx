"use client";

import { MY_EMAIL, SOCIAL_LINKS } from "@/lib/data";
import { useState } from "react";
import ContactForm from "./ContactForm";
import R from "./ScrollReveal";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import UnderlineLink from "./ui/UnderlineLink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-ink px-6 py-16 lg:py-28">
      <Container>
        <h2
          className={`font-display font-light leading-none text-5xl text-cream mb-5`}
        >
          <span className="italic text-gold">Start a</span> project
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 items-start">
          {/* Info */}
          <R className="col-span-2 order-2 lg:order-1">
            {[
              ["Email", MY_EMAIL],
              ["Based In", "Remote · India"],
            ].map(([lbl, val]) => (
              <div key={lbl} className="mb-8">
                <p className="text-xs tracking-[.3em] uppercase text-gold mb-2">
                  {lbl}
                </p>
                <p className="font-display text-2xl text-white/85">{val}</p>
              </div>
            ))}

            {/*<div className="flex items-center gap-3 mt-10 px-5 py-4 bg-gold/5 border border-gold/15">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-dot" />
              <span className="text-[.63rem] tracking-[.14em] uppercase text-stone">
                Currently accepting projects — {YEAR}
              </span>
            </div>*/}

            <div className="mt-8">
              <p className="text-xs tracking-[.3em] uppercase text-gold mb-2">
                Socials
              </p>
              <div className="flex flex-col gap-2">
                {SOCIAL_LINKS.map(({ href, label }) => (
                  <p key={label}>
                    <UnderlineLink
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-2xl text-white/85 uppercase text-dim hover:text-gold transition-colors duration-300 no-underline"
                    >
                      {label}
                    </UnderlineLink>
                  </p>
                ))}
              </div>
            </div>
          </R>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
