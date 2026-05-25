import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anchorpoint | Operational Intelligence & Governance",

  description:
    "Anchorpoint reveals how operations actually run — restoring visibility, governance, and execution stability across complex organizations.",

  keywords: [
    "Operational Intelligence",
    "Process Integrity",
    "Execution Visibility",
    "Governance Systems",
    "Operational Stability",
    "Workflow Governance",
    "Anchorpoint",
  ],

  authors: [
    {
      name: "Anchorpoint Optimum Global Ltd.",
    },
  ],

  creator: "Anchorpoint",

  openGraph: {
    title: "Anchorpoint | Operational Intelligence & Governance",

    description:
      "Operational visibility, governance systems, and execution intelligence for complex organizations.",

    url: "https://anchorpoint.com",

    siteName: "Anchorpoint",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Anchorpoint | Operational Intelligence & Governance",

    description:
      "Operational visibility, governance systems, and execution intelligence for complex organizations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}