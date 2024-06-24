import { Metadata } from "next";
import QuoteComponent from "./quote-component";
import InvoiceBuilder from "./invoice-builder";
import { Title } from "rizzui";

// SEO metadata
export const metadata: Metadata = {
  title: "New Page | Isomorphic",
};



export default function MakeQuotationPage() {
  return (
    <>
      <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
        Make Quotation
      </Title>

      {/* <QuoteComponent /> */}

      <InvoiceBuilder />
    </>
  );
}