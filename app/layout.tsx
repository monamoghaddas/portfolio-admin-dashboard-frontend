import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query/provider";
import { Toaster } from "sonner";

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
          {children}
          <Toaster position="top-right" richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
