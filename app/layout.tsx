import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query/provider";
import { Toaster } from "sonner";
import GoogleAnalytics from "@/components/analytics/google-analytics";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Admin Dashboard",
  description: "Frontend portfolio project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} antialiased`}
    >
      <body>
        <ReactQueryProvider>
          {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
          {children}
          <Toaster position="top-right" richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
