'use client';

import ChunkedGrid from '@/app/shared/custom-chunked-grid';
import UserDetailsCard from '@/app/shared/custom-user-details-card';
// import UploadZone from '@/components/ui/file-upload/upload-zone';
// import { routes } from '@/config/routes';
// import { useRouter } from 'next/navigation';
// import { PiTrashDuotone, PiUpload } from 'react-icons/pi';
// import { Badge, Button } from 'rizzui';
import { activeJobDetailsData, professionalActiveJobDetailsData } from "@/data/custom-job-details-data";
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
// import { PiAcorn, PiCaretDownBold } from 'react-icons/pi';
// import { Accordion, Stepper } from 'rizzui';


// const data = [
//   {
//     'Requisition Type': 'Standard',
//     'Requisition Date': '13/04/2024',
//     'Requisition Number': '#REQ63532',
//     Location: 'Kome,Homabay',
//     Status: 'Submitted',
//     'Job description': 'Repair of faulty wiring system',
//   },
//   {
//     'Invoice Number': '#3454',
//     'Payment Status': 'Paid',
//     'Deadline for  availability': '20/04/2024',
//     'Start Date': '22/04/2024',
//     'End Date': '30/04/2024',
//   },
// ];

export default function ActiveJobDetailsCard() {
  // const router = useRouter();
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const jobId = searchParams.get('id')
  const professional = pathname.includes('professional')

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // const handleClick = () => {
  //   router.push(routes.serviceProvider.fundi.activeJobs);
  // };

  return (
    <>
      {/* <h3 className="mb-4">Job Details</h3> */}

      <div className='mb-4'>
        <UserDetailsCard />
      </div>

      <div className='mb-4'>
        {
          professional? (
            <ChunkedGrid data={jobId === 'JOB0021'? professionalActiveJobDetailsData[0] : professionalActiveJobDetailsData[1]} dataChunkSize={8} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6' />
          ) : (
            <ChunkedGrid data={jobId === 'JOB0021'? activeJobDetailsData[0] : activeJobDetailsData[1]} dataChunkSize={6} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6' />
          )
        }
        {/* <ChunkedGrid data={jobId === 'JOB0021'? activeJobDetailsData[0] : activeJobDetailsData[1]} dataChunkSize={6} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6' /> */}
      </div>

      {/* <Stepper currentIndex={2} className="w-full">
      <Stepper.Step
        variant="outline"
        title="Login"
        icon={<PiAcorn className="h-5 w-5" />}
        description={'This is a description, a long long long long long one'}
      />
      <Stepper.Step
        variant="outline"
        title="Verification"
        icon={<PiAcorn className="h-5 w-5" />}
      />
      <Stepper.Step
        variant="outline"
        title="Pay"
        icon={<PiAcorn className="h-5 w-5" />}
      />
      <Stepper.Step
        variant="outline"
        title="Done"
        icon={<PiAcorn className="h-5 w-5" />}
      />
    </Stepper> */}

      {/* <Accordion
        className=''
        defaultOpen={true}
      >
        <Accordion.Header>
          <div
            onClick={handleToggle}
            className="flex w-full items-center justify-between py-5 text-xl text-gray-900 font-semibold"
          >
            {'Project Details'}
            <PiCaretDownBold
              className={`flex h-5 w-5 transform  transition-transform duration-300 ${
                isOpen ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </div>
        </Accordion.Header>

        <Accordion.Body>
          
         
        </Accordion.Body>
      </Accordion> */}

      {/* <Accordion
        className='mt-2 mb-8'
      >
        <Accordion.Header>
          <div
            onClick={handleToggle}
            className="flex w-full items-center justify-between py-5 text-xl text-gray-900 font-semibold"
          >
            {'Customer Details'}
            <PiCaretDownBold
              className={`flex h-5 w-5 transform  transition-transform duration-300 ${
                isOpen ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </div>
        </Accordion.Header>

        <Accordion.Body>
          <div className='mb-4'>
            <UserDetailsCard />
          </div>
         
        </Accordion.Body>
      </Accordion> */}
      
      {/* <div className='my-4'>
        <ChunkedGrid data={jobId === 'JOB0021'? activeJobDetailsData[0] : activeJobDetailsData[1]} dataChunkSize={3} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6' />
      </div> */}

      {/* <div className='mb-4'>
        <UserDetailsCard />
      </div> */}


      {/* <div className='flex justify-between flex-wrap mt-8 rounded-xl border border-gray-300 p-8'>
        <div className="w-full md:w-1/2 pb-4">
          <p className='mb-4 font-semibold text-gray-700'>Milestone 1; Schematic drawing, layouts of five bedroom maisonette</p>
          <p className='font-semibold text-gray-700'>Milestone 2; Renders and final draft</p>
        </div>

        <div className="w-full md:w-1/2 pl-28">
          <div className='flex items-center mb-4'>         
            <Button className='mr-4'>
              <span>Upload</span>{' '}
              <PiUpload className="ms-2 h-5 w-5" />
            </Button>
            <PiTrashDuotone className="w-8 h-8" />
          </div>

          <div className='flex items-center'>
            <Button className='mr-4'>
              <span>Upload</span>{' '}
              <PiUpload className="ms-2 h-5 w-5" />
            </Button>
            <PiTrashDuotone className="w-8 h-8" />
          </div>
        </div>
      </div> */}

      {/* <Button onClick={handleClick} className="m-auto mt-4">
        Back
      </Button> */}
    </>
  );
}
