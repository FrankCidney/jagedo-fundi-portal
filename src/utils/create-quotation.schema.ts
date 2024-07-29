import { z } from 'zod';
// import { createId } from '@paralleldrive/cuid2';

// export const INVOICE_TABLE_DEFAULT_DATA = [
//   {
//     id: createId(),
//     title: 'Product 1',
//     quantity: 1,
//     rate: 120,
//     tax: 15,
//   },
//   {
//     id: createId(),
//     title: 'Product 2',
//     quantity: 3,
//     rate: 60,
//     tax: 12,
//   },
// ];

export const FIRST_TABLE_DEFAULT_VALUE = [
  {
    serviceProvider: 'Lead Consultant',
    name: '',
    emailAddress: '',
    uniqueId: '',
    numberOfHours: 0,
    ratePerHour: 0,
    // amount: 0,
  },
  {
    serviceProvider: 'Associate Consultant',
    name: '',
    emailAddress: '',
    uniqueId: '',
    numberOfHours: 0,
    ratePerHour: 0,
    // amount: 0,
  },
];

export const SECOND_TABLE_DEFAULT_VALUE = [
    {
      expenses: 'Communication',
      amount: 0,
    },
    {
      expenses: 'Other',
      amount: 0,
    },
];

export const THIRD_TABLE_DEFAULT_VALUE = [
    {
        item: '',
        professionalName: '',
        professionalFees: 0,
        expenses: 0,
        totalAmount: 0,
        withholdingTax: 0,
        payableByClient: 0,
        jagedoCommission: 0,
        payableToServiceProvider: 0,
    },
];

export const CREATE_QUOTATION_DEFAULT_VALUE = {
    firstTable: FIRST_TABLE_DEFAULT_VALUE,
    secondTable: SECOND_TABLE_DEFAULT_VALUE,
    totalProfessionalFees: 0,
    totalExpensesCost: 0,
    grandTotal: 0,
    thirdTable: THIRD_TABLE_DEFAULT_VALUE,
    
}

// export const firstTableSchema = z.array(
//     z.object({
//         serviceProvider: z.string(),
//         name: z.string(),
//         emailAddress: z.string(),
//         uniqueId: z.string(),
//         numberOfHours: z.number(),
//         ratePerHour: z.number(),
//         Amount: z.number(),
//     })
//   )

export const createQuotationSchema = z.object({
    firstTable: z.array(
        z.object({
            serviceProvider: z.string(),
            name: z.string(),
            emailAddress: z.string(),
            uniqueId: z.string(),
            numberOfHours: z.number(),
            ratePerHour: z.number(),
            // amount: z.number(),
        })
      ),
    secondTable: z.array(
        z.object({
            expenses: z.string(),
            amount: z.number(),
        })
      ),
    totalProfessionalFees: z.number(),
    totalExpensesCost: z.number(),
    grandTotal: z.number(),
    thirdTable: z.array(
        z.object({
            item: z.string(),
            professionalName: z.string(),
            professionalFees: z.number(),
            expenses: z.number(),
            totalAmount: z.number(),
            withholdingTax: z.number(),
            payableByClient: z.number(),
            jagedoCommission: z.number(),
            payableToServiceProvider: z.number(),
        })
      ),
})

// export type FirstTableType = z.infer<typeof firstTableSchema>
export type CreateQuotationType = z.infer<typeof createQuotationSchema>
