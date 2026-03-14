"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import R from "./ScrollReveal";
import Button from "./ui/Button";
import { ContactFormData, contactSchema } from "@/lib/schema";

const inputClass =
  "w-full bg-ink3 border border-white/[.07] text-white font-body text-base px-5 py-4 outline-none focus:border-gold/45 focus:bg-ink4 transition-colors duration-300 placeholder:text-dim/55";

const errorClass =
  "text-[.65rem] tracking-[.1em] uppercase text-red-400 mt-1.5";

const services = [
  { value: "product-modeling", label: "Product Modeling" },
  { value: "product-visualization", label: "Product Visualization" },
  { value: "product-animation", label: "Product Animation" },
  { value: "art-direction", label: "Art Direction" },
  { value: "full-campaign", label: "Full Campaign Package" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "", service: "product-modeling" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="col-span-3 order-1 lg:order-2">
        <div className="flex flex-col items-start gap-4 py-12">
          <div className="w-12 h-12 border border-gold/40 flex items-center justify-center text-gold text-xl">
            ✓
          </div>
          <p className="font-display text-[2rem] text-white">Brief received.</p>
          <p className="text-base leading-relaxed text-dim">
            Thanks for reaching out. I'll review your project details and get
            back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <R className="col-span-3 order-1 lg:order-2" delay="d2">
      {/* Honeypot */}
      <input
        {...register("honeypot")}
        type="text"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name + Company */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div>
            <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Jane Smith"
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
              Company / Brand
            </label>
            <input
              {...register("company")}
              type="text"
              placeholder="Acme Co."
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* Service */}
        <div className="mb-5">
          <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
            Service Needed
          </label>
          <div className="relative">
            <select
              {...register("service")}
              className={`${inputClass} appearance-none cursor-pointer`}
              defaultValue=""
            >
              <option value="" disabled className="bg-ink text-dim">
                Select…
              </option>
              {services.map(({ value, label }) => (
                <option key={value} value={value} className="bg-ink text-stone">
                  {label}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-dim pointer-events-none text-xs">
              ▾
            </span>
          </div>
          {errors.service && (
            <p className={errorClass}>{errors.service.message}</p>
          )}
        </div>

        {/* Brief */}
        <div className="mb-6">
          <label className="block text-xs tracking-[.25em] uppercase text-dim mb-2.5">
            Project Brief *
          </label>
          <textarea
            {...register("brief")}
            rows={5}
            placeholder="Tell me about your product, timeline, and vision…"
            className={`${inputClass} resize-none`}
          />
          {errors.brief && <p className={errorClass}>{errors.brief.message}</p>}
        </div>

        {/* Submit */}
        <div className="flex flex-col gap-4 items-start">
          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full lg:w-auto"
          >
            {status === "loading" ? "Sending…" : "Send Brief →"}
          </Button>
          {status === "error" && (
            <p className="text-[.65rem] tracking-[.15em] uppercase text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </form>
    </R>
  );
}
