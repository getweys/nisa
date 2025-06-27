import type React from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "contexts/language-context";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nisa Drive - Safe Rides for Women",
  description:
    "Experience secure and comfortable transportation with female drivers you can trust. Book your safe ride today.",
  keywords:
    "women taxi, female drivers, safe rides, transportation, booking app",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <LanguageProvider>
          <Navigation />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
