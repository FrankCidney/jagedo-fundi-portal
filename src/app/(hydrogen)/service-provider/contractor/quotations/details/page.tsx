import { metaObject } from '@/config/site.config';
// import CreateQuotationComponent from '@/app/shared/service-provider/create-quotation';
import CreateContractorQuotationComponent from '@/app/shared/service-provider/create-quotation/contractor';

export const metadata = {
    ...metaObject(),
  };
  
  export default function QuotationDetailsPage() {
    return (
        <>
            <CreateContractorQuotationComponent />
        </>
    )
  }