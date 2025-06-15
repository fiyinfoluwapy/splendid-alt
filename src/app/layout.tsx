import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { AboutUs } from "./components/about";
import { Academics } from "./components/acadamics";
import { Admissions } from "./components/admissions";
import { NewsEvents } from "./components/newsevents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Splendid Altruistic App",
  description: "...for destined leaders",
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
        <Navbar />
        <Hero />
        <AboutUs />
        <Academics />
        <Admissions />
        <NewsEvents />
        {children}
      </body>
    </html>
  );
}
