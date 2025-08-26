import { iconMap } from "data/data";
import { IconType } from "react-icons";

// Navbar Types
export interface NavigationItem {
  labelKey: string;
  href: string;
}

// Footer Types
export interface FooterLink {
  titleKey: string;
  href: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  labelKey: string;
  color: string;
}

export interface GrowthRole {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

// Language Switcher Types
export interface LanguageOption {
  code: "en" | "ar";
  name: string;
  label: string;
}

export interface Benefit {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  color: string;
}

export interface TargetAudience {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

export interface Cta {
  primaryKey: string;
  secondaryKey: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface AdditionalLink {
  icon: keyof typeof iconMap;
  titleKey: string;
  textKey: string;
  color: string;
}

export interface InvestmentCard {
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  icon: keyof typeof iconMap;
  color: string;
  borderColor: string;
  benefits: Benefit[];
  targetAudience: TargetAudience[];
  cta: Cta;
  additionalLink?: AdditionalLink;
}

export interface CoreValue {
  titleKey: string;
  descriptionKey: string;
  icon: any;
  color: string;
  bgColor: string;
}

export interface FeaturedService {
  icon: any;
  titleKey: string;
  descriptionKey: string;
  features: string[];
  ctaKey: string;
  color: string;
  bgColor: string;
  subtitleKey?: string;
  specialCtaKey?: string;
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

export interface impactStats {
  icon: IconType;
  value: string;
  label: string;
}


