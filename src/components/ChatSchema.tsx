import { z } from "zod";

// Validation schema for chatbot input
export const AIChatSchema = z.object({
  content: z
    .string()
    .min(1, { message: "Please enter some content" })
    .max(300, { message: "Content should be less than 300 characters" }),
});
