"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
  isRTL: boolean;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Fallback translations to prevent errors
const fallbackTranslations = {
  navigation: {
    home: "Home",
    services: "Our Services",
    business: "Our Business",
    earn: "Earn With NisaDrive",
    impact: "Impact",
    about: "About",
    safety: "Safety",
    careers: "Careers",
    downloadApp: "Download App",
  },
  hero: {
    badge: "Pakistan's First Women-to-Women Service",
    title: "Your Journey, Your Way – Safe, Affordable, and Women-Driven",
    subtitle:
      "NisaDrive provides a dignified and culturally respectful transport experience.",
    downloadApp: "Download NisaDrive App",
    watchDemo: "Watch Demo",
  },
  footer: {
    description: "Pakistan's first women-to-women ride-hailing service.",
    quickLinksTitle: "Quick Links",
    businessTitle: "Business",
    downloadTitle: "Download App",
    followUs: "Follow Us",
    contact: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      cities: "Karachi, Lahore, Islamabad\nPakistan",
    },
    download: {
      availableOn: "Available on",
      getItOn: "Get it on",
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    quickLinks: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      safety: "Safety First",
      impact: "Our Impact",
      careers: "Careers",
    },
    business: {
      ourBusiness: "Our Business",
      earnWithUs: "Earn with Us",
      bookRide: "Book a Ride",
      helpCenter: "Help Center",
      contact: "Contact Us",
      partner: "Partner With Us",
    },
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      compliance: "Compliance",
    },
    copyright: "© {year} NisaDrive. All rights reserved.",
    madeWithLove: "Made with love in Pakistan",
    disclaimer:
      "NisaDrive is committed to providing safe transportation services.",
  },
  common: {
    buttons: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      joinNow: "Join Now",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState(fallbackTranslations);

  const isRTL = language === "ar";

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}.json`);

        if (
          response.ok &&
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const data = await response.json();
          setTranslations(data);
        } else {
          console.warn(
            `Translation file for ${language} not found, using fallback`
          );
          setTranslations(fallbackTranslations);
        }
      } catch (error) {
        console.warn("Failed to load translations, using fallback:", error);
        setTranslations(fallbackTranslations);
      }
    };

    loadTranslations();
  }, [language]);

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    if (typeof value !== "string") {
      return key;
    }

    // Replace parameters in the translation
    if (params) {
      return Object.entries(params).reduce((str, [param, replacement]) => {
        return str.replace(new RegExp(`{${param}}`, "g"), replacement);
      }, value);
    }

    return value;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, isRTL, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
