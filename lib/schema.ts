import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .regex(/^[a-zA-Z\s'-]+$/, "Please enter a valid name"),

  company: z
    .string()
    .max(100, "Company name is too long")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(200, "Email address is too long"),

  service: z.enum(
    [
      "product-modeling",
      "product-visualization",
      "product-animation",
      "art-direction",
      "full-campaign",
    ],
    {
      error: "Please select a valid service",
    },
  ),

  brief: z
    .string()
    .min(1, "Project brief is required")
    .min(20, "Please provide a bit more detail about your project")
    .max(2000, "Brief exceeds the maximum length of 2000 characters"),

  honeypot: z.string().max(0),
});

export type ContactFormData = z.infer<typeof contactSchema>;
