import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import cv from "@/data/cv.json";
import "./globals.css";

const font = Open_Sans({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${cv.fullName} CV`,
  description: `${cv.title} Resume`,
  keywords: cv.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
