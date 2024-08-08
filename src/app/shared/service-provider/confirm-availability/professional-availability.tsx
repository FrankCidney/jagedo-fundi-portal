'use client'

// import MetricCard from "@/components/cards/metric-card";
import { routes } from "@/config/routes";
import Link from "next/link";
import { Button, Checkbox, Textarea } from "rizzui";
import ChunkedGrid from "../../custom-chunked-grid";
import { professionalRequestDetailsData } from "@/data/custom-job-details-data";
import { useSearchParams } from "next/navigation";

// const data = [
//     {
//       'Managed by self': 'Standard 1',
//       'Job description': 'Change of Use for Proposed Acakoro Sports Academy',
//       'Job No': '#A1GS0435-RFQ',
//       'Site conditions': 'Black cotton soil',
//       'Specifications': 'Designing five bedroom maisonette',     
//       Location: 'Kome,Homabay',

//     },
//     // {
//     //   'Invoice Number': '#3454',
//     //   'Payment Status': 'Paid',
//     //   'Deadline for  availability': '20/04/2024',
//     //   'Start Date': '22/04/2024',
//     //   'End Date': '30/04/2024',
//     // },
// ];


export default function ProfessionalAvailability() {
  const searchParams = useSearchParams()
  const requestId = searchParams.get('id')
  const jobId = '3420'
  
  return (
    <>
        {/* <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
            View RFQ
        </Title> */}

        <div className="my-4">
          <ChunkedGrid data={requestId === 'REQ0021'? professionalRequestDetailsData[0] : professionalRequestDetailsData[1]} dataChunkSize={8} />
        </div>
        
        {/* <MetricCard 
            title="#89MJ3"
            metric="Repair work in Kisumu"
            info="Repairing a faulty wiring system"
        /> */}

        {/* <div className="grid items-start rounded-xl border border-gray-300 p-5 md:grid-cols-2 gap-6 @2xl:grid-cols-2 @3xl:grid-cols-3 @3xl:p-8 @5xl:grid-cols-4">

            {data.map((item, index) => (
              <ul key={index} className="mt-3 grid gap-2 @5xl:mt-0">
                {Object.entries(item).map(([key, value]) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <span className="font-semibold text-gray-900">{key} :</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            ))}
        </div>

        <Textarea
            label="Notes"
            className="mt-4"
        /> */}

        {/* <div className="flex pt-8 justify-center">
            <p className="text-center font-bold mr-4">Confirm your availability for this job.</p>
            <Checkbox
                // {...register('termsAndConditions')}
                className="[&>label.items-center]:items-start [&>label>div.leading-none]:mt-0.5 [&>label>div.leading-none]:sm:mt-0 [&>label>span]:font-medium"           
            />
        </div> */}

        <div className="flex justify-center space-x-4 pt-5">
          {requestId === 'REQ0021'? (
            <Link href={{ pathname: routes.serviceProvider.professional.rfqStandardOne, query: { jobId } }}>             
              <Button className="w-62">
                  Create Quotation
              </Button>
            </Link>
            ) : (
              <Link href={routes.serviceProvider.professional.rfqStandardTWo}>
              <Button className="w-62">
                  Create Quotation
              </Button>
            </Link>
            )}

          {/* <Link href={routes.serviceProvider.professional.rfqStandardOne}>
            <Button className="w-62">
                Create Quotation
            </Button>
          </Link> */}

          <Link href={routes.serviceProvider.professional.requisitions}>
            <Button variant="outline" className="w-32">
                Back
            </Button>
          </Link>
        </div>
    </>
  )
}