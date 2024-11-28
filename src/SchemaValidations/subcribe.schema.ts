import { z } from "zod";

export const SubscribeSchema = z.object({
  email: z
    .string()
    .email("Invalid email. Email must be a valid email address"),
});

export type SubscribeFormType = z.infer<typeof SubscribeSchema>;