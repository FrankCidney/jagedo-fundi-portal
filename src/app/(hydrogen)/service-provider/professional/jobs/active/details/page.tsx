'use client'

import ActiveJobDetailsCard from '@/app/shared/service-provider/details/sp-job-details';
// import { metaObject } from '@/config/site.config';
import { Button, Modal, Progressbar } from 'rizzui';
import Link from 'next/link';
import cn from '@/utils/class-names';
import ProgressBarActive from '@/app/shared/service-provider/progress-bar-fundi';
import { routes } from '@/config/routes';
import { useState } from 'react';

// export const metadata = {
//     ...metaObject(),
//   };

  type PageProps = {
    className: string;
    // other props as needed
  };
  
  export default function JobDetailsPage({ className }: PageProps) {
    const [modalState, setModalState] = useState(false);

    return (
      <>
      <div className='flex justify-between'>
      <h3 className="mb-4">Job Details</h3>
      <div className=''>     
            <Button onClick={() => setModalState(true)}>Complete Milestone</Button>       
      </div>
      </div>
      
      
      <div className={cn('xl:gap-15 grid grid-cols-1 lg:grid-cols-1', className)}>
        <Modal isOpen={modalState} onClose={() => setModalState(false)}>
              <div className='p-10'>
                  <p className='text-center text-lg font-semibold'>Do you confirm completion of this milestone?</p>

                  <div className='flex justify-center mt-6'>
                    <Button onClick={() => setModalState(false)} className='w-32'>Yes</Button>
                      <Button variant="outline" onClick={() => setModalState(false)} className="w-32 ml-4">
                          No
                      </Button>
                  </div>
              </div>
          </Modal>

        <ProgressBarActive />

        <ActiveJobDetailsCard />
        
        <div className="flex  justify-center">
          <Link href={routes.serviceProvider.fundi.activeJobs}>
              <Button className="mt-6">Back</Button>
          </Link>
        </div>
      
    </div>
    </>
    )
  }