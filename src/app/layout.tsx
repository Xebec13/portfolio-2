import { IntroProvider } from "./components/utils/IntroProvider";
import Loader from "./components/utils/Loader";
import { LanguageProvider } from "./components/utils/LanguageProvider";
import SmoothScroll from "./components/utils/SmoothScroll";

import type { Metadata } from "next";
import { Sansation, Inter, Work_Sans } from "next/font/google";
import "./globals.css";

const sansation = Sansation({
  subsets: ["latin"],
  variable: "--font-sansation",
  weight: ["400", "700"],
  fallback: ["ui-sans-serif", "system-ui"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "DH Portfolio | Front-End Developer",
  description: "Developer Portfolio",
  metadataBase: new URL("https://xebec13.netlify.app"),
  
  icons: {
    icon: "/favicon.png", 
  },
  openGraph: {
    title: "David Hoesen | Front-End Developer",
    description: "Sprawdź moje projekty i doświadczenie.",
    siteName: "David Hoesen Portfolio",
  
    images: [
      {
        url: "/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${sansation.variable} ${inter.variable} ${workSans.variable} font-sans antialiased`}
      >
        <SmoothScroll>
          <LanguageProvider>
            <IntroProvider>
              <Loader>
                {children}
              </Loader>
            </IntroProvider>
          </LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}