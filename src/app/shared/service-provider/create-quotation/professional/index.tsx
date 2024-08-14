'use client';

import { useRef } from 'react';
import { Text, Checkbox } from 'rizzui';
// import SimpleBar from 'simplebar-react';
import { routes } from '@/config/routes';
import FirstTable from './first-table';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { CREATE_QUOTATION_DEFAULT_VALUE, CREATE_QUOTATION_VIEW_VALUE, createQuotationSchema, CreateQuotationType } from '@/utils/create-quotation.schema';
import SecondTable from './second-table';
import ThirdTable from './third-table';
import FourthTable from './fourth-table';
// import CustomFormFooter from '@/components/custom-form-footer-with-upload';
// import FormFooter from '@/components/form-footer';
import AttachmentsBlock from '../attachments-block';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import FormFooter from '@/components/custom-form-footer';
import Link from 'next/link';
import ViewAttachmentsBlock from '../view-attachments-block';

export default function ProfessionalCreateQuotationComponent() {
  const searchParams = useSearchParams()
  const printRef = useRef(null);
  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  // });
  const router = useRouter()
  const jobId = searchParams.get('jobId')

  const pathname = usePathname()
  const viewQuotation = pathname.includes('quotations')
  const contractor = pathname.includes('contractor')
  const defaultValues =
    jobId === '3420'
      ? CREATE_QUOTATION_DEFAULT_VALUE
      : CREATE_QUOTATION_VIEW_VALUE;

  const methods = useForm<CreateQuotationType>({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: zodResolver(createQuotationSchema),
  });

  const handleAltBtn = () => { router.back() }
  const handleSubmitBtn = () => { 
    if (contractor) {
      router.push(routes.serviceProvider.contractor.quotations)
    } else {
      router.push(routes.serviceProvider.professional.quotations)
    }
   }

  const onSubmit: SubmitHandler<CreateQuotationType> = (data) => {
    // router.push(routes.serviceProvider.professional.quotations)
  };

  // let subTotal = methods.watch('invoiceTable').reduce((acc, item) => {
  //   if (!item.quantity || !item.rate) return acc;
  //   return acc + item.quantity * item.rate;
  // }, 0);

  // let totalTax = methods.watch('invoiceTable').reduce((acc, item) => {
  //   return acc + item.tax;
  // }, 0);

  return (
    <>
      <div className="rounded-2xl @container">
        {/* <SimpleBar className="w-full"> */}
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="rounded-xl bg-white"
            >
              <FirstTable />
              <SecondTable />
              <ThirdTable />
              <FourthTable />


              {viewQuotation? (
                <ViewAttachmentsBlock />
              ) : (
                <>
                  <AttachmentsBlock />

                  <div className="col-span-2 flex items-start text-gray-700 mt-3 mb-8 ps-2">
                    <Checkbox
                      className="[&>label.items-center]:items-start [&>label>div.leading-none]:mt-0.5 [&>label>div.leading-none]:sm:mt-0 [&>label>span]:font-medium"
                      label={
                        <Text as="span" className="ps-1 text-gray-500">
                          I agree to the{' '}
                          <Link
                            href="#"
                            className="font-semibold text-gray-700 transition-colors hover:text-primary"
                          >
                            Professional Agreement
                          </Link>
                        </Text>
                      }
                    />
                  </div>
                </>
              )}

              {viewQuotation? (
                <FormFooter
                  // isLoading={isLoading}
                  submitBtnText="Back"
                  handleSubmitBtn={handleAltBtn}
                />
              ) : (
                <FormFooter
                // isLoading={isLoading}
                altBtnText="Back"
                handleAltBtn={handleAltBtn}
                handleSubmitBtn={handleSubmitBtn}
                submitBtnText="Submit"
              />
              )}
              {/* <FormFooter
              //   // isLoading={isLoading}
                altBtnText="Back"
                submitBtnText="Submit"
              /> */}
            </form>
          </FormProvider>
        {/* </SimpleBar> */}
      </div>
    </>
  );
}
