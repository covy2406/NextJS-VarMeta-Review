import { z } from "zod";

export const MessageSchema = z.object({
  name: z
    .string()
    .min(2, "Username must not be lesser than 2 characters")
    .max(25, "Username must not be greater than 25 characters"),
  email: z.string().email("Invalid email. Email must be a valid email address"),
  subject: z
    .string()
    .min(3, "Username must not be lesser than 3 characters"),
  message: z
  .string()
  .min(3, "Username must not be lesser than 3 characters")
    
});

export type MessageSchemaType = z.infer<typeof MessageSchema>;