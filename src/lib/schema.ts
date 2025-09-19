import { z } from "zod";

export const contactSubmissionSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  childAge: z.string().optional(),
  programInterest: z.string().optional(),
  message: z.string().optional(),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
