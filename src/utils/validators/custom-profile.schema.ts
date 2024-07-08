import { baseUserFormSchema } from "@/utils/validators/custom-signup.schema";
import { messages } from '@/config/messages';
import { z } from 'zod';


export const fundiProfileSchema = baseUserFormSchema.extend({
    skill: z.string().min(1, { message: messages.skillIsRequired}),
    level: z.string().min(1, { message: messages.levelIsRequired}),
    years: z.string().min(1, { message: messages.yearsIsRequired}),
    idPic: z.any().refine(value => value !== undefined, { message: messages.idPicIsRequired}),
    certificates: z.any().refine(value => value !== undefined, { message: messages.certificatesIsRequired}),
    ncaCard: z.any().refine(value => value !== undefined, { message: messages.ncaCardIsRequired}),
    gender: z.string().min(1, { message: messages.genderIsRequired }),
    resume: z.any().optional(),
})

// generate form types from zod validation schema
export type FundiProfileSchema = z.infer<typeof fundiProfileSchema>;