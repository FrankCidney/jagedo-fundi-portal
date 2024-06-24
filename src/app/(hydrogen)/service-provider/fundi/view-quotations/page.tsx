import ViewQuotationsTable from "@/app/shared/admin/dashboard/tables/view-quotations";
import { Metadata } from "next";
import { Title } from "rizzui";

// SEO metadata
export const metadata: Metadata = {
  title: "New Page | Isomorphic",
};

export default function Home() {
  return (
    <>
        <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
            Quotations
        </Title>

        <div className="@container">
            <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
                <ViewQuotationsTable className="relative @4xl:col-span-12  @7xl:col-span-8" />
            </div>
        </div>

    </>
  )
}