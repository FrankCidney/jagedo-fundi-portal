import ActiveJobDetailsCard from '@/app/shared/service-provider/details/sp-job-details';
import SpActiveJobsTable from '@/app/shared/service-provider/tables/sp-active-jobs-table';
// import SpJobsTable from '@/app/shared/service-provider/tables/sp-jobs-table';
import { metaObject } from '@/config/site.config';
import { Title } from 'rizzui';

export const metadata = {
    ...metaObject(),
  };
  
  export default function JobDetailsPage() {
    return (
        <>
            <ActiveJobDetailsCard />
        </>
    )
  }