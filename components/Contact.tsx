"use client";

import { useState } from "react";
import R from "./ScrollReveal";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { EMAIL, SOCIAL_LINKS, YEAR } from "@/lib/data";
import UnderlineLink from "./ui/UnderlineLink";
import Button from "./ui/Button";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-ink px-6 py-16 lg:py-28">
      <Container>
        <SectionHeading
          subHeading=" Let's Work Together"
          heading={
            <>
              Start a <em className="italic text-gold-lt">project</em>
            </>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 items-start">
          {/* Info */}
          <R className="col-span-2 order-2 lg:order-1">
            {[
              ["Email", EMAIL],
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

          {/* Form */}
          <R className="col-span-3 order-1 lg:order-2" delay="d2">
            {sent ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold text-xl">
                  ✓
                </div>
                <p className="font-display text-[2rem] text-white">
                  Brief received.
                </p>
                <p className="text-base leading-relaxed text-dim">
                  Thanks for reaching out. I&apos;ll review your project details
                  and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                  {[
                    ["Full Name", "text", "Jane Smith"],
                    ["Company / Brand", "text", "Acme Co."],
                  ].map(([lbl, type, ph]) => (
                    <div key={lbl}>
                      <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
                        {lbl}
                      </label>
                      <input
                        type={type}
                        placeholder={ph}
                        className="w-full bg-ink3 border border-white/[.07] text-white font-body text-base px-5 py-4 outline-none focus:border-gold/45 focus:bg-ink4 transition-colors duration-300 placeholder:text-dim/55"
                      />
                    </div>
                  ))}
                </div>

                <div className="mb-5">
                  <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    required
                    className="w-full bg-ink3 border border-white/[.07] text-white font-body text-base px-5 py-4 outline-none focus:border-gold/45 focus:bg-ink4 transition-colors duration-300 placeholder:text-dim/55"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 mb-5">
                  {[
                    {
                      lbl: "Service Needed",
                      opts: [
                        "Product Modeling",
                        "Product Visualization",
                        "Product Animation",
                        "Art Direction",
                        "Full Campaign Package",
                      ],
                    },
                  ].map(({ lbl, opts }) => (
                    <div key={lbl}>
                      <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
                        {lbl}
                      </label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-ink3 border border-white/[.07] text-stone font-body text-base px-5 py-4 outline-none focus:border-gold/45 focus:bg-ink4 transition-colors duration-300 cursor-pointer">
                          <option disabled value="">
                            Select…
                          </option>
                          {opts.map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dim pointer-events-none text-xs">
                          ▾
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
                    Project Brief
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your product, timeline, and vision…"
                    className="w-full bg-ink3 border border-white/[.07] text-white font-body text-base px-5 py-4 outline-none focus:border-gold/45 focus:bg-ink4 transition-colors duration-300 resize-none placeholder:text-dim/55"
                  />
                </div>

                <Button type="submit" className="w-full lg:w-auto">
                  Send Brief →
                </Button>
              </form>
            )}
          </R>
        </div>
      </Container>
    </section>
  );
}
