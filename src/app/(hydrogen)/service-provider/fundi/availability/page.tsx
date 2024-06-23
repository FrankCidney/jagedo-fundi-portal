import MetricCard from "@/components/cards/metric-card";
import { Metadata } from "next";
import { Button, Title } from "rizzui";

// SEO metadata
export const metadata: Metadata = {
  title: "New Page | Isomorphic",
};

export default function Home() {
  return (
    <>
        <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
            View RFQ
        </Title>

        <MetricCard 
            title="#89MJ3"
            metric="Repair work in Kisumu"
            info="Repairing a faulty wiring system"
        />

        <p className="w-full text-center font-bold pt-5">Please be advised that for this job, the customer will be the one to manage the works.</p>
        <p className="w-full text-center font-bold pt-5">Confirm your availability for this job.</p>

        <div className="flex justify-center space-x-4 pt-5">
            <Button className="w-32">
                Accept Job
            </Button>

            <Button variant="outline" className="w-32">
                Back
            </Button>
        </div>
    </>
  )
}