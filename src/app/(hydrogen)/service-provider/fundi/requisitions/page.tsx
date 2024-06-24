import ServiceProviderRequisitionsTable from '@/app/shared/admin/dashboard/tables/service-provider-requisions';
// import FileDashboard from '@/app/shared/file/dashboard';
import { metaObject } from '@/config/site.config';
import { Title } from 'rizzui';

export const metadata = {
  ...metaObject('Files'),
};

export default function File() {
  return (
    <>
      <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
        Requisitions
      </Title>

      <div className="@container">
        <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
          <ServiceProviderRequisitionsTable className="relative @4xl:col-span-12  @7xl:col-span-8" />
        </div>
      </div>
    </>
  )
  
}
