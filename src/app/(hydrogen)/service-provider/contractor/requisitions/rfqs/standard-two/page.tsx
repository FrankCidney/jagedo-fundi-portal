import CreateQuotationComponent from '@/app/shared/service-provider/create-quotation';
import { metaObject } from '@/config/site.config';
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
  ],
};

export default function RfqStandardOnePage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />

      <CreateQuotationComponent />
    </>
  )
}
