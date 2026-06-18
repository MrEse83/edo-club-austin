import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edoclubaustin.org"), // update once domain is final
  title: {
    default: `${site.name} | Edo Heritage in Austin, Texas`,
    template: `%s | ${site.name}`,
  },
  description: site.aboutSummary,
  openGraph: {
    title: site.name,
    description: site.aboutSummary,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
