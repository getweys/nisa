import { iconMap } from "data/data";

// Navbar Types
export interface NavigationItem {
  labelKey: string;
  href: string;
}

// Language Switcher Types
export interface LanguageOption {
  code: "en" | "ar";
  name: string;
  label: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface TargetAudience {
  icon: string;
  title: string;
  description: string;
}

export interface Cta {
  primary: string;
  secondary: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface AdditionalLink {
  icon: keyof typeof iconMap;
  title: string;
  text: string;
  color: string;
}

export interface InvestmentCard {
  title: string;
  subtitle: string;
  description: string;
  icon: keyof typeof iconMap;
  color: string;
  borderColor: string;
  benefits: Benefit[];
  targetAudience: TargetAudience[];
  cta: Cta;
  additionalLink?: AdditionalLink;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
}

// TypeScript interfaces
export interface SafetyData {
  section: string;
  title: string;
  description: string | string[];
  subtitle?: string;
  icon?: string;
  delay?: number;
  amount?: string;
  link?: string;
}

export interface SectionStyle {
  bg: string;
  iconBg: string;
  border: string;
}

export interface SafetyCardProps {
  item: SafetyData;
  sectionStyle: SectionStyle;
}

export interface SafetySectionProps {
  section: string;
  items: SafetyData[];
}
