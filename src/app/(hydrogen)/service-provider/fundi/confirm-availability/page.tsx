import ConfirmAvailability from "@/app/shared/service-provider/confirm-availability/confirm-availability";
import { Metadata } from "next";

// SEO metadata
export const metadata: Metadata = {
  title: "New Page | Isomorphic",
};

export default function Home() {
  return (
    <>
    <ConfirmAvailability />
    </>
  )
}