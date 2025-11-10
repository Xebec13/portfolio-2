import type { Metadata } from "next";
import { Sansation,Inter } from "next/font/google";
import "./globals.css";

const sansation = Sansation({
  subsets: ["latin"],
  variable: "--font-sansation",
  weight:["400","700"],
  fallback: ["ui-sans-serif", "system-ui"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DH Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansation.variable} ${inter.variable}  font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
