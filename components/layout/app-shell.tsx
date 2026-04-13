import Sidebar from "@/components/layout/sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-56px)]">
      <Sidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
