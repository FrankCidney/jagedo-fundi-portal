// import Link from 'next/link';
// import Image from 'next/image';
// import { routes } from '@/config/routes';
// import { Button } from 'rizzui';
// import WelcomeBanner from '@/components/banners/welcome';

// import { PiPlusBold } from 'react-icons/pi';
// import welcomeImg from '@public/shop-illustration.png';
// import HandWaveIcon from '@/components/icons/hand-wave';
// import { BarChart } from 'recharts';
// import BarChartList from '@/app/(hydrogen)/widgets/cards/bar-chart-list';
// import SummaryWidget from '@/app/shared/admin/dashboard/summary';
// import JobsWidget from '@/app/shared/ecommerce/dashboard/promotional-sales';
import SpNavCards from './sp-nav-cards';
import BidsStatus from './pie-chart';
import JobSlider from './job-slider';
import ReviewSlider from './review-slider';
// import CustomMessagesList from '@/app/shared/custom-messages-list';
import RequisitionAlerts from './requisition-alerts';
import Notifications from './notifications';

export default function ServiceProviderDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
        <SpNavCards className="py-5 @2xl:grid-cols-3 @3xl:gap-6 @4xl:col-span-2 @4xl:grid-cols-4 @7xl:col-span-8" />
        <JobSlider />
        <RequisitionAlerts />
      </div>
      <div className="pt-10 grid grid-cols-1 gap-6 @4xl:grid-cols-3 @7xl:grid-cols-12 3xl:gap-8">
        <BidsStatus /* className="h-[300px] @sm:h-[320px]   @7xl:col-span-4 @7xl:col-start-auto @7xl:row-start-auto" */ />
        <ReviewSlider />
        <Notifications />
      </div>
    </div>
  );
}
