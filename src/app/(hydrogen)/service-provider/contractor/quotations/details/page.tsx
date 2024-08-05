import { metaObject } from '@/config/site.config';
import CreateQuotationComponent from '@/app/shared/service-provider/create-quotation';

export const metadata = {
    ...metaObject(),
  };
  
  export default function QuotationDetailsPage() {
    return (
        <>
            <CreateQuotationComponent />
        </>
    )
  }