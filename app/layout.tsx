
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEESociety — Free JEE Community on WhatsApp",
  description:
    "A free WhatsApp community for JEE 2027 & 2028 aspirants: live webinars by IITians and premium study material. No fees, ever.",
  openGraph: {
    title: "JEESociety — Free JEE Community on WhatsApp",
    description:
      "Live webinars by IITians and premium study material. Free, forever.",
    images: ["/logo.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-text">
        {children}
      </body>
    </html>
  );
}