import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "contexts/language-context";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";
import ClientLayout from "components/ui/ClientLayout";
// import { LanguageProvider } from "@/contexts/language-context";
// import { Navigation } from "@/components/navigation";
// import { Footer } from "@/components/footer";
// import ClientLayout from "@/components/ClientLayout"; // New Client Component

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"], // Added arabic subset for Urdu
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nisa Drive - Safe Rides for Women",
  description:
    "Experience secure and comfortable transportation with female drivers you can trust. Book your safe ride today.",
  keywords:
    "women taxi, female drivers, safe rides, transportation, booking app",
  generator: "v0.dev",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ClientLayout>
        <body className={openSans.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </ClientLayout>
    </LanguageProvider>
  );
}
