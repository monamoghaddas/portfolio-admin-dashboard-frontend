import MarketingNavbar from "@/components/layout/marketing-navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingNavbar />
      <main>{children}</main>
    </>
  );
}
