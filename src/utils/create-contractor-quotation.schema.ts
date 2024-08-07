import { z } from 'zod';

export const Bill_TABLE_DEFAULT_VALUE = [
    {
      description: 'default description',
      quantity: 55,
      units: 'default units',
      rate: 5,
    },
]

export const BILL_DEFAULT_VALUE = [
    {
        billTableTitle: 'MATERIALS', 
        billTable: Bill_TABLE_DEFAULT_VALUE,
    },
]

export const CREATE_CONTRACTOR_QUOTATION_DEFAULT_VALUE = {
    bill: BILL_DEFAULT_VALUE,
    // billTable: Bill_TABLE_DEFAULT_VALUE,
    // billTableTitle: '',
}

export const createContractorQuotationSchema = z.object({
    bill: z.array(
        z.object({
            billTableTitle: z.string(),
            billTable: z.array(
                z.object({
                    description: z.string(),
                    quantity: z.number(),
                    units: z.string(),
                    rate: z.number(),
                })
            )
        })
    ),
    // billTableTitle: z.string(),
    // billTable: z.array(
    //     z.object({
    //         description: z.string(),
    //         quantity: z.number(),
    //         units: z.number(),
    //         rate: z.number(),
    //     })
    // ),
})

export type CreateContractorQuotationType = z.infer<typeof createContractorQuotationSchema>