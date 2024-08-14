import ProfessionalCreateQuotationComponent from '@/app/shared/service-provider/create-quotation/professional';
import { metaObject } from '@/config/site.config';
// import { Title } from 'rizzui';

export const metadata = {
    ...metaObject(),
  };
  
  export default function QuotationDetailsPage() {
    return (
        <>
            <ProfessionalCreateQuotationComponent />
        </>
    )
  }