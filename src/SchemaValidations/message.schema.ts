import { z } from "zod";

export const MessageSchema = z.object({
  name: z
    .string()
    .min(2, "Username must not be lesser than 2 characters")
    .max(25, "Username must not be greater than 25 characters"),
  email: z
    .string()
    .email("Invalid email. Email must be a valid email address"),
  subject: z
    .string()
    .min(12, "Subject must not be lesser than 12 characters"),
  message: z
    .string()
    .min(10, "Message must not be less than 10 characters")
    .max(300, "Message must not be more than 300 characters")
    
});

export type MessageSchemaType = z.infer<typeof MessageSchema>;