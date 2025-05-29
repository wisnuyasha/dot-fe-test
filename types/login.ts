import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Enter your email" }),

  password: z.string().min(1, "Enter your password"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
