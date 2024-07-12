import { metaObject } from '@/config/site.config';
import EditProfileAccountDetails from '@/app/shared/service-provider/profile/edit-profile/contractor/account-details';

export const metadata = {
  ...metaObject('Profile Settings'),
};

export default function ProfileSettingsFormPage() {
  return <EditProfileAccountDetails />;
}
