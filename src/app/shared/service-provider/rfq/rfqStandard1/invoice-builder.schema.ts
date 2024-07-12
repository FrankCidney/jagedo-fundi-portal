import { z } from 'zod';
import { createId } from '@paralleldrive/cuid2';

export const INVOICE_TABLE_DEFAULT_DATA = [
  {
    billNo: '1',
    works: 'preliminaries',
    amount: '50,000',
  },
  {
    billNo: '2',
    works: 'builders work',
    amount: '70,000',
  },
];

export const INVOICE_BUILDER_DEFAULT_VALUE = {

  // Changed between here
  invoiceTableHeader: {
    billNo: 'Bill No',
      works: 'Works',
      amount: 'Amount'
    // billOfQuantity: {
    //   billNo: 'Bill No',
    //   works: 'Works',
    //   amount: 'Amount',
    // },
    // disbursement: {
    //   disbursement: 'Bill No',
    //   milestoneActivity: 'Works',
    //   amount: 'Amount',
    // },
  },
  // and here
  invoiceTable: INVOICE_TABLE_DEFAULT_DATA,

};

export const invoiceBuilderSchema = z.object({


  invoiceTableHeader: z.object({
    billNo: z.string().optional(),
    works: z.string().optional(),
    amount: z.string().optional(),
  }),
  invoiceTable: z.array( z.object({
    billNo: z.string().optional(),
  works: z.string().optional(),
  amount: z.string().optional(),
  })),

});

export type InvoiceType = z.infer<typeof invoiceBuilderSchema>;
