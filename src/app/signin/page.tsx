import AuthWrapperFour from '@/app/shared/auth-layout/auth-wrapper-four';
import SignInForm from './sign-in-form';
import { metaObject } from '@/config/site.config';
import ComingSoonPage from '../(other-pages)/coming-soon/page';

export const metadata = {
  ...metaObject('Coming Soon'),
};

export default function SignInPage() {
  return (
    // <AuthWrapperFour
    //   title={
    //     <>
    //       Welcome Back! <br /> Sign in with your credentials.
    //     </>
    //   }
    //   isSignIn
    //   isSocialLoginActive={true}
    // >
    //   <SignInForm />
    // </AuthWrapperFour>
    <ComingSoonPage />
  );
}
