import type { ReactNode } from "react";
import MarketingNavbar from "@/components/layout/marketing-navbar";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <MarketingNavbar />
      <main>{children}</main>
    </>
  );
}
