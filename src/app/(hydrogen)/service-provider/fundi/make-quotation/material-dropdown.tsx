'use client';

// import TableCollapsible from '@/components/tan-table/collapsible';
// import MainTable from '@/components/table/main-table';
// import TableBasic from '@/components/tan-table/basic';
// import MakeQuotationTable from '@/components/invoice-builder/invoice-details/make-quotation';
// import EditableQuoteTable from './editable-quote-table';

import React, { ReactNode, useState } from 'react';
import {
  Title,
  Collapse,
} from 'rizzui';
import cn from '@/utils/class-names';
import {
  PiCaretDownBold,
} from 'react-icons/pi';
// import InvoiceBuilder from './invoice-builder';


export default function MaterialDropdown ({ className, children }: { className?: string; children: ReactNode }) {
 
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <div>
      {/* <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5">
        Payment Method
      </Title> */}
      <div className="space-y-4 [&_label]:block">
        <Collapse
          className={cn(
            'rounded-lg border border-muted hover:border-primary',
            collapseOpen && 'ring-1 ring-primary hover:!border-primary'
          )}
          defaultOpen={false}
          header={({ open, toggle }) => (
            <button
              type="button"
              onClick={() => {
                setCollapseOpen(open ? false : true);
                toggle();
              }}
              className={cn(
                'flex w-full cursor-pointer items-center justify-between p-4 text-start @xs:p-6'
              )}
            >
              <div className="pe-6">
                <Title as="h4" className="text-base font-medium @2xl:mb-2">
                  Material Quote
                </Title>
              </div>
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <PiCaretDownBold
                  className={cn(
                    'h-3.5 w-3.5 transform transition-transform duration-300',
                    open && 'rotate-180'
                  )}
                />
              </div>
            </button>
          )}
        >

         { children }

        </Collapse>

 
      </div>
    </div>
  );
}
