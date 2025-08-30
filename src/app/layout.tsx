import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blaze News | Breaking Crime, Politics & World News Today",
  description:
    "Stay updated with Blaze News – your trusted source for breaking crime updates, political insights, investigations, world news, and trending videos. Real-time reporting, in-depth analysis, and unbiased coverage you can rely on.",
  keywords:
    "Blaze News, breaking news, crime updates, political news, world news, investigations, trending news videos, latest news India, international news, live crime news",
  openGraph: {
    title: "Blaze News | Breaking Crime, Politics & World News Today",
    description:
      "Get the latest breaking news, crime updates, politics, investigations, and trending videos from Blaze News. Trusted coverage, real-time updates, and insights from around the globe.",
    url: "https://blazenews.com",
    siteName: "Blaze News",
    images: [
      {
        url: "/logo.png", // update with your actual OG image
        width: 1200,
        height: 630,
        alt: "Blaze News",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blaze News | Breaking Crime, Politics & World News Today",
    description:
      "Breaking crime, politics, investigations & world news from Blaze News. Trusted, real-time, and in-depth reporting.",
    images: ["/logo.png"], // replace with OG image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
