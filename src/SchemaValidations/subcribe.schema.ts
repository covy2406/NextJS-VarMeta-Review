import { z } from "zod";

export const SubcribeSchema = z.object({
  email: z.string().email("Invalid email. Email must be a valid email address"),
});

export type RegisterSchemaType = z.infer<typeof SubcribeSchema>;