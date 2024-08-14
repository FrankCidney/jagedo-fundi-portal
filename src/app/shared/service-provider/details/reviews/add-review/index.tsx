'use client';

import { AdvancedRadio, Button, Checkbox, Radio, RadioGroup, Text, Textarea } from 'rizzui';
import { Fragment } from 'react';
import cn from '@/utils/class-names';
import { useForm } from 'react-hook-form';
// import { useFieldArray, useFormContext } from 'react-hook-form';
// import { BillTableType } from './view-bill';

// type Props = {
//     index: number;
//     billTableValues: BillTableType[]
// }

const data = [
    {
        question: 'Question 1 goes here',
    },
    {
        question: 'Question 2 goes here',
    },
    {
        question: 'Question 3 goes here',
    },
    {
        question: 'Question 4 goes here',
    },
    {
        question: 'Question 5 goes here',
    }
]

export default function AddReviewComponent() {
  // const { control, handleSubmit } = useForm<>()

  // const onSubmit = (data) => {
  //   console.log('Form Submitted:', data);
  // };
//   const { control, register, getValues } = useFormContext();
//   const { fields, append, remove, } = useFieldArray({
//     control: control,
//     name: `bill.${index}.billTable`,
//   });

//   function handleChange(event: DragEndEvent) {
//     const { active, over } = event;
//     if (!active || !over) return;
//     const oldIndex = fields.findIndex((item) => item.id === active.id);
//     const newIndex = fields.findIndex((item) => item.id === over.id);
//     move(oldIndex, newIndex);
//   }

  // console.log({billIndexForTable: index})

  return (
    <>
    <div className='relative'>

      {/* <p className='mb-4 ps-4 text-lg text-gray-900 font-semibold'>Professional Fees</p> */}

      <div className="grid grid-cols-10 gap-2 rounded-t-md bg-gray-100 p-2 dark:bg-gray-900">
        <TableHeaderCell className="col-span-1 py-2 flex items-center justify-center">
          <Text className='font-semibold text-gray-500'>No.</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-4 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Question</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-1 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Strongly Disagree</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-1 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Disagree</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-1 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Neutral</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-1 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Agree</Text>
        </TableHeaderCell>

        <TableHeaderCell className="col-span-1 p-1 py-2 flex items-center">
          <Text className='font-semibold text-gray-500'>Strongly Agree</Text>
        </TableHeaderCell>
      </div>

      <>
        <form>
          {data.map((field, index) => {

            return (
              <Fragment key={`add-review-table-${index}`}>
                <li>
                  <div className="group grid min-h-10 grid-cols-10 gap-0 border-b border-muted dark:border-muted/20">
                    
                    <div className="col-span-1 w-full p-2 pe-4 pt-3 text-center text-gray-900 dark:text-gray-0">
                        {index + 1}
                    </div>  

                    <div className="col-span-4 py-2 pe-2">
                        <Text className='text-gray-900 dark:text-gray-0'>{ field.question }</Text>
                    </div>

                    {/* <RadioGroup value='' setValue={}>
                      <Radio value={1} className='col-span-1 p-2 ps-4' />
                      <Radio value={2} className='col-span-1 p-2 ps-4' />
                      <Radio value={3} className='col-span-1 p-2 ps-4' />
                      <Radio value={4} className='col-span-1 p-2 ps-4' />
                      <Radio value={5} className='col-span-1 p-2 ps-4' />
                    </RadioGroup>           */}
                  </div>
                </li>
              </Fragment>
            );
          })}
        </form>
      </>

      {/* <div className='flex mt-8 mb-8'> */}
        {/* <p className='font-semibold mr-8 flex-shrink-0'>Comments</p> */}
        <Textarea
          placeholder="Add comments..."
          // {...register('review')}
          // error={errors.review?.message}
          textareaClassName="h-24 w-full"
          className="mt-8"
          label="Comments"
        />
      {/* </div> */}

      <div className='flex justify-center mt-8'>
        <Button className="px-8" type="submit">
          Submit
        </Button>
      </div>
     
      </div>
    </>
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
