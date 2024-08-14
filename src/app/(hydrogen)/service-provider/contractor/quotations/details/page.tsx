import { metaObject } from '@/config/site.config';
import ViewContractorQuotationComponent from '@/app/shared/service-provider/view-quotation/contractor';
import PageHeader from '@/app/shared/commons/page-header';

export const metadata = {
    ...metaObject(),
};

const pageHeader = {
  title: 'Create Quotation',
  breadcrumb: [
    {
      href: '#',
      name: 'Home',
    },
    {
      href: '#',
      name: 'Quotations',
    },
    {
      href: '#',
      name: 'Details',
    },
  ],
};


  
export default function QuotationDetailsPage() {
  return (
      <>
          <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

          <ViewContractorQuotationComponent />
      </>
  )
}