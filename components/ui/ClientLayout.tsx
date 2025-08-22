"use client";
import { useLanguage } from "contexts/language-context";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  return <html lang={language}>{children}</html>;
}
