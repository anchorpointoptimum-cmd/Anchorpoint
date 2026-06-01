import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import SiteHeader from "@/app/components/layout/SiteHeader";
import SiteFooter from "@/app/components/layout/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://anchorpoint.com"
  ),

  title: {
    default:
      "Anchorpoint | Operational Intelligence Infrastructure",
    template:
      "%s | Anchorpoint",
  },

  description:
    "Anchorpoint reveals how operations actually function—restoring execution visibility, governance stability, and operational control where operational reality diverges from documented process.",

  keywords: [
    "Operational Intelligence",
    "Governance Intelligence",
    "Execution Visibility",
    "Operational Stability",
    "Governance Systems",
    "Process Integrity",
    "Recovery Intelligence",
    "Execution Governance",
    "Operational Control",
    "Anchorpoint",
  ],

  authors: [
    {
      name:
        "Anchorpoint Optimum Global Ltd.",
    },
  ],

  creator:
    "Anchorpoint Optimum Global Ltd.",

  publisher:
    "Anchorpoint Optimum Global Ltd.",

  category:
    "Operational Intelligence",

  openGraph: {
    title:
      "Anchorpoint | Operational Intelligence Infrastructure",

    description:
      "Operational visibility, governance intelligence, stabilization analysis, and execution control for complex organizations.",

    url:
      "https://anchorpoint.com",

    siteName:
      "Anchorpoint",

    locale:
      "en_US",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Anchorpoint | Operational Intelligence Infrastructure",

    description:
      "Governance intelligence, operational visibility, and execution stability infrastructure.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body
        className={`
          ${inter.className}
          bg-black
          text-white
          antialiased
          min-h-screen
          overflow-x-hidden
        `}
      >

        {/* ==========================================
            GLOBAL NAVIGATION
        ========================================== */}

        <SiteHeader />

        {/* ==========================================
            APPLICATION SHELL
        ========================================== */}

        <main
          className="
            relative
            min-h-screen
          "
        >

          {children}

        </main>
        <SiteFooter />

        {/* ==========================================
            FUTURE GLOBAL FOOTER
        ========================================== */}

        {/*
          <SiteFooter />
        */}

      </body>

    </html>

  );

}