import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query/provider";
import Topbar from "@/components/layout/topbar";
import AppShell from "@/components/layout/app-shell";

export const metadata: Metadata = {
  title: "Portfolio Admin Dashboard",
  description: "Frontend portfolio project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <Topbar />
          <AppShell>{children}</AppShell>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
