import ConfirmAvailability from "@/app/shared/service-provider/confirm-availability/confirm-availability";
// import MetricCard from "@/components/cards/metric-card";
import { Metadata } from "next";
// import Link from "next/link";
// import { Button, Title } from "rizzui";

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