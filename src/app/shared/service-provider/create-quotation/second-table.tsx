'use client';

import { Button, Text } from 'rizzui';
import { Fragment } from 'react';
import cn from '@/utils/class-names';
import { DragEndEvent } from '@dnd-kit/core';
// import { createId } from '@paralleldrive/cuid2';
import { QuoteInput } from './quote-forms/quote-input';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { SortableList } from '@/components/dnd-sortable/dnd-sortable-list';
import {
  PiPlusCircle,
  PiTrashBold,
  PiArrowsOutCardinalBold,
} from 'react-icons/pi';

export default function SecondTable() {
  const { control, register, getValues } = useFormContext();
  const { fields, append, remove, move } = useFieldArray({
    control: control,
    name: 'secondTable',
  });

  function handleChange(event: DragEndEvent) {
    const { active, over } = event;
    if (!active || !over) return;
    const oldIndex = fields.findIndex((item) => item.id === active.id);
    const newIndex = fields.findIndex((item) => item.id === over.id);
    move(oldIndex, newIndex);
  }

  return (
    <div className="relative mt-12">
      <div className="grid grid-cols-2 gap-2 rounded-t-md bg-gray-100 p-2 dark:bg-gray-900">
        <TableHeaderCell className="col-span-1 ps-4 py-2">
          <Text className='text-center font-semibold text-gray-500'>EXPENSES</Text>
        </TableHeaderCell>
        <TableHeaderCell className="col-span-1 py-2">
          <Text className='text-center font-semibold text-gray-500'>AMOUNT</Text>
        </TableHeaderCell>
      </div>
      <ul>
        <SortableList items={fields} onChange={handleChange}>
          {fields?.map((field, index) => {
            // let rate = getValues(`firstTable.${index}.ratePerHour`);
            // let numOfHours = getValues(`firstTable.${index}.numberOfHours`);
            // let total = rate * numOfHours;
            return (
              <Fragment key={`second-table-${index}`}>
                <SortableList.Item id={field.id}>
                  <div className="group grid min-h-10 grid-cols-2 gap-0 border-b border-muted dark:border-muted/20">
                    <div className="col-span-1 p-2 pb-4">
                      <QuoteInput
                        inputClassName="[&_input]:text-center"
                        placeholder="Expense"
                        {...register(`secondTable.${index}.expenses`)}
                      />
                    </div>
                    <div className="col-span-1 p-2 relative">
                      <QuoteInput
                        type="number"
                        placeholder="1"
                        inputClassName="[&_input]:text-center"
                        {...register(`secondTable.${index}.amount`, {
                          valueAsNumber: true,
                        })}
                      />
                      <div className="absolute end-0 top-0 hidden translate-x-full grid-cols-1 gap-0 overflow-hidden rounded-md border bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.16)] group-hover:grid dark:border-muted/20">
                        <SortableList.DragHandle className="flex h-auto w-full items-center justify-center p-1.5 text-lg hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-700">
                          <PiArrowsOutCardinalBold className="size-4" />
                        </SortableList.DragHandle>
                        <button
                          type="button"
                          className="flex h-full w-full items-center justify-center p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => remove(index)}
                        >
                          <PiTrashBold className="size-4 text-red-dark dark:text-red" />
                        </button>
                      </div>
                    </div>

                    {/* <div className="relative col-span-1 w-full p-2 pe-4 pt-3 text-center text-gray-900 dark:text-gray-0">
                      {total ? total : 0}
                      <div className="absolute end-0 top-0 hidden translate-x-full grid-cols-1 gap-0 overflow-hidden rounded-md border bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.16)] group-hover:grid dark:border-muted/20">
                        <SortableList.DragHandle className="flex h-auto w-full items-center justify-center p-1.5 text-lg hover:bg-gray-100 dark:text-gray-50 dark:hover:bg-gray-700">
                          <PiArrowsOutCardinalBold className="size-4" />
                        </SortableList.DragHandle>
                        <button
                          type="button"
                          className="flex h-full w-full items-center justify-center p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700"
                          onClick={() => remove(index)}
                        >
                          <PiTrashBold className="size-4 text-red-dark dark:text-red" />
                        </button>
                      </div>
                    </div> */}
                  </div>
                </SortableList.Item>
              </Fragment>
            );
          })}

        
        </SortableList>
      </ul>

      <Button
        type="button"
        variant="text"
        className="absolute bottom-0 start-0 translate-y-full gap-2 ps-0 active:enabled:translate-y-full dark:text-gray-400"
        onClick={() =>
          append({
            expenses: '',
            amount: 0,
          },)
        }
      >
        <PiPlusCircle className="size-5" />
        Add Item
      </Button>      
    </div>
  );
}

function TableHeaderCell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'font-semibold [&_input]:uppercase [&_input]:text-gray-500 dark:[&_input]:text-gray-400',
        className
      )}
    >
      {children}
    </div>
  );
}
