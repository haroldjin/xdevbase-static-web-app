import { z } from "zod";
import { type ZodReturnType } from "@/utils/types";

export const resetPasswordValidationSchema = z.object({
  email: z.string().email(),
});

export type RegisterFormValues = ZodReturnType<
  typeof resetPasswordValidationSchema
>;
