import Topbar from "@/components/layout/topbar";
import AppShell from "@/components/layout/app-shell";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <AppShell>{children}</AppShell>
    </>
  );
}
