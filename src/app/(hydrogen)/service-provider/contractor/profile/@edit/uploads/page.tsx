import { metaObject } from '@/config/site.config';
import EditProfileUploads from '@/app/shared/service-provider/profile/edit-profile/contractor/uploads';

export const metadata = {
  ...metaObject('Profile Settings'),
};

export default function ProfileSettingsFormPage() {
  return <EditProfileUploads />;
}
