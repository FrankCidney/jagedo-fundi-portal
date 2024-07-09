import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/commons/page-header';
import FundiEditProfileNav from '@/app/shared/service-provider/profile/edit-profile/navigation';
// import ProfileSettingsNav from '@/app/shared/account-settings/navigation';

const pageHeader = {
  title: 'Account Settings',
  breadcrumb: [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: routes.forms.profileSettings,
      name: 'Form',
    },
    {
      name: 'Account Settings',
    },
  ],
};

export default function ProfileSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb} />
      {/* <ProfileSettingsNav /> */}
      <FundiEditProfileNav />
      {children}
    </>
  );
}
