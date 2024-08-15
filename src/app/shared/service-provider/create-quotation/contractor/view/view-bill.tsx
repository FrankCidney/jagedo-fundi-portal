'use client'

import { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';
import ViewBillTable from './view-bill-table';
import { Collapse } from 'rizzui';
import { PiCaretDownBold } from 'react-icons/pi';
import cn from '@/utils/class-names';
import { BillType } from '@/utils/create-contractor-quotation.schema';
// import { usePathname } from 'next/navigation';


// export type BillTableType = {
//     description: string
//     quantity: number
//     units: string
//     rate: number
//     amount: number
// }

// type BillType = {
//     billTableTitle: string,
//     billTable: BillTableType[]
// }

export default function ViewBill() {
    const { getValues } = useFormContext();
    // const pathname = usePathname()

    const values = getValues()
    // console.log({values})
    // const quotationView = pathname.includes('quotations')
    
    return (
        <>
        <Collapse
            defaultOpen={false}
            className={cn('py-5 md:py-7')}
            header={({ open, toggle }) => (
            <button
                type="button"
                onClick={toggle}
                className="flex w-full cursor-pointer items-center justify-between text-left font-lexend text-xl font-semibold text-gray-700"
            >
                Bills
                <PiCaretDownBold
                className={cn(
                    'h-5 w-5 -rotate-90 transform transition-transform duration-300 rtl:rotate-90',
                    open && '-rotate-0 rtl:rotate-0'
                )}
                />
            </button>
            )}
        >
        <div className='mt-4'></div>
        {values?.bill.map((field: BillType, index: number) => {
            return (
                <Fragment key={`bill-${index}`}>
                    <div className='mt-4'>
                        <div className="px-2 pt-6 pb-8 border border-muted rounded-lg sm:rounded-sm lg:rounded-xl xl:rounded-2xl bg-gray-0 dark:bg-gray-50">
                            <div>
                                <div className="flex justify-between">
                                    <div className="flex">
                                        {/* <p className="mb-4 ps-4 text-lg text-gray-700 font-semibold">Bill No. {index + 1}:</p> */}
                                        {/* <QuoteInput
                                            inputClassName="[&_input]:text-gray-700 font-semibold text-lg mb-4 w-24 px-0 ps-4"
                                            placeholder="0"
                                            value={`Bill No. ${index + 1} :`}
                                        /> */}
                                        <p className='px-4 mb-4 font-semibold text-lg'>Bill No. {index + 1} :</p>
                                        <p className='font-semibold text-lg'>{ field.billTableTitle }</p>
                                      


                                        {/* <QuoteInput
                                            inputClassName="[&_input]:text-gray-700 font-semibold text-lg mb-4"
                                            placeholder="Enter title"
                                            {...register(`bill.${index}.billTableTitle`)}
                                        /> */}
                                    </div>
                                </div>
                            </div>

                        <ViewBillTable index={index} billTableValues={field.billTable} />
                        {/* <div className="text-lg">Bill table goes here</div> */}
                        </div>
                    </div>
                </Fragment>
            )
        })}
        </Collapse>

        {/* {quotationView? (
            <div className='mt-4'>
                <p className='text-xl font-semibold text-gray-700'>Bills</p>
            {values?.bill.map((field: BillType, index: number) => {
                return (
                    <Fragment key={`bill-${index}`}>
                        <div className='mt-4'>
                            <div className="px-2 pt-6 pb-8 border border-muted rounded-lg sm:rounded-sm lg:rounded-xl xl:rounded-2xl bg-gray-0 dark:bg-gray-50">
                                <div>
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            <p className='px-4 mb-4 font-semibold text-lg'>Bill No. {index + 1} :</p>
                                            <p className='font-semibold text-lg'>{ field.billTableTitle }</p>                                       
                                        </div>
                                    </div>
                                </div>
    
                            <ViewBillTable index={index} billTableValues={field.billTable} />
                            </div>
                        </div>
                    </Fragment>
                )
            })}
            </div>
        ) : (
        
        )} */}
        
        </>
    )
}