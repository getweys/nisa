import {
  CoreValue,
  InvestmentCard,
  LanguageOption,
  NavigationItem,
  FooterLink,
  SocialLink,
  GrowthRole,
  FeaturedService,
} from "types/type";
import {
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTruck,
  FiHeart,
  FiBook,
  FiPackage,
  FiBriefcase,
  FiShoppingBag,
  FiUsers,
  FiShield,
  FiGlobe,
  FiTarget,
  FiZap,
  FiDollarSign,
  FiTrendingUp,
  FiBarChart,
  FiClock,
  FiStar,
  FiCheckCircle,
  FiMapPin,
  FiAlertTriangle,
  FiEye,
  FiYoutube,
  FiFileText,
} from "react-icons/fi";
import { FaSchool, FaShoppingBag, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

export const navigationItems = [
  { labelKey: "navigation.services", href: "/services" },
  { labelKey: "navigation.business", href: "/business" },
  { labelKey: "navigation.earn", href: "/earn" },
  { labelKey: "navigation.impact", href: "/impact" },
  { labelKey: "navigation.about", href: "/about" },
  { labelKey: "navigation.safety", href: "/safety" },
  { labelKey: "navigation.careers", href: "/careers" },
];

export const languages: LanguageOption[] = [
  { code: "en", name: "English", label: "EN" },
  { code: "ar", name: "اردو", label: "UR" },
];

export const features = [
  {
    titleKey: "data.features.womenOnly.title",
    descriptionKey: "data.features.womenOnly.description",
  },
  {
    titleKey: "data.features.pricing.title",
    descriptionKey: "data.features.pricing.description",
  },
  {
    titleKey: "data.features.safetyZones.title",
    descriptionKey: "data.features.safetyZones.description",
  },
  {
    titleKey: "data.features.cultural.title",
    descriptionKey: "data.features.cultural.description",
  },
  {
    titleKey: "data.features.empowering.title",
    descriptionKey: "data.features.empowering.description",
  },
];

export const services = [
  {
    titleKey: "data.services.student.title",
    descriptionKey: "data.services.student.description",
    color: "from-blue-500 to-blue-600",
    lightColor: "from-blue-50 to-blue-100",
  },
  {
    titleKey: "data.services.professional.title",
    descriptionKey: "data.services.professional.description",
    color: "from-pink-500 to-pink-600",
    lightColor: "from-pink-50 to-pink-100",
  },
  {
    titleKey: "data.services.personal.title",
    descriptionKey: "data.services.personal.description",
    color: "from-green-500 to-green-600",
    lightColor: "from-green-50 to-green-100",
  },
  {
    titleKey: "data.services.courier.title",
    descriptionKey: "data.services.courier.description",
    color: "from-purple-500 to-purple-600",
    lightColor: "from-purple-50 to-purple-100",
  },
];

export const roles = [
  {
    titleKey: "data.roles.rider.title",
    descriptionKey: "data.roles.rider.description",
    link: "/RideExperienceForm",
  },

  {
    titleKey: "data.roles.driver.title",
    descriptionKey: "data.roles.driver.description",
    link: "/DriverAffiliateForm",
  },
  {
    titleKey: "data.roles.partner.title",
    descriptionKey: "data.roles.partner.description",
    link: "/PartnerApplicationForm",
  },
];

export const quickLinks: FooterLink[] = [
  { titleKey: "footer.quickLinks.home", href: "/" },
  { titleKey: "footer.quickLinks.aboutUs", href: "/about" },
  { titleKey: "footer.quickLinks.ourServices", href: "/services" },
  { titleKey: "footer.quickLinks.safetyFirst", href: "/safety" },
  { titleKey: "footer.quickLinks.ourImpact", href: "/impact" },
  { titleKey: "footer.quickLinks.joinOurTeam", href: "/careers" },
];

export const businessLinks: FooterLink[] = [
  { titleKey: "footer.business.businessSolutions", href: "/business" },
  { titleKey: "footer.business.partnerWithUs", href: "/earn" },
  { titleKey: "footer.business.bookARide", href: "/booking" },
  { titleKey: "footer.business.helpCenter", href: "/faq" },
  { titleKey: "footer.business.contactSupport", href: "/contact" },
  { titleKey: "footer.business.becomeADriver", href: "/partners" },
];

export const legalLinks: FooterLink[] = [
  { titleKey: "footer.legal.privacyPolicy", href: "/privacy" },
  { titleKey: "footer.legal.termsOfService", href: "/terms" },
  { titleKey: "footer.legal.cookiePolicy", href: "/cookies" },
  { titleKey: "footer.legal.compliance", href: "/compliance" },
];

export const socialLinks: SocialLink[] = [
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/nisadrive/",
    labelKey: "footer.social.facebook",
    color: "hover:bg-blue-500",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/nisadrive/",
    labelKey: "footer.social.instagram",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
  },
  {
    icon: FiYoutube,
    href: "https://www.youtube.com/@NisaDrive",
    labelKey: "footer.social.youtube",
    color: "hover:bg-blue-600",
  },
  {
    icon: FiTwitter,
    href: "https://x.com/nisadrivepk ",
    labelKey: "footer.social.twitter",
    color: "hover:bg-sky-500",
  },
  {
    icon: FaTiktok,
    href: "www.tiktok.com/@nisadrivepk",
    labelKey: "footer.social.tiktok",
    color: "hover:bg-sky-500",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/923235307093",
    labelKey: "footer.social.whatsapp",
    color: "hover:bg-sky-500",
  },
];

export const featuredServices: FeaturedService[] = [
  {
    icon: MdDirectionsBike,
    titleKey: "data.featuredServices.rideHailing.title",
    descriptionKey: "data.featuredServices.rideHailing.description",
    features: [
      "data.featuredServices.rideHailing.features.feature1",
      "data.featuredServices.rideHailing.features.feature2",
      "data.featuredServices.rideHailing.features.feature3",
      "data.featuredServices.rideHailing.features.feature4",
      "data.featuredServices.rideHailing.features.feature5",
    ],
    ctaKey: "data.featuredServices.rideHailing.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiPackage,
    titleKey: "data.featuredServices.courier.title",
    descriptionKey: "data.featuredServices.courier.description",
    features: [
      "data.featuredServices.courier.features.feature1",
      "data.featuredServices.courier.features.feature2",
      "data.featuredServices.courier.features.feature3",
      "data.featuredServices.courier.features.feature4",
    ],
    ctaKey: "data.featuredServices.courier.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: FaSchool,
    titleKey: "data.featuredServices.school.title",
    descriptionKey: "data.featuredServices.school.description",
    features: [
      "data.featuredServices.school.features.feature1",
      "data.featuredServices.school.features.feature2",
      "data.featuredServices.school.features.feature3",
      "data.featuredServices.school.features.feature4",
    ],
    ctaKey: "data.featuredServices.school.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-orange-50",
    subtitleKey: "data.featuredServices.school.subtitle",
  },
  {
    icon: FiHeart,
    titleKey: "data.featuredServices.ngo.title",
    descriptionKey: "data.featuredServices.ngo.description",
    features: [
      "data.featuredServices.ngo.features.feature1",
      "data.featuredServices.ngo.features.feature2",
      "data.featuredServices.ngo.features.feature3",
      "data.featuredServices.ngo.features.feature4",
    ],
    ctaKey: "data.featuredServices.ngo.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FiBriefcase,
    titleKey: "data.featuredServices.corporate.title",
    descriptionKey: "data.featuredServices.corporate.description",
    features: [
      "data.featuredServices.corporate.features.feature1",
      "data.featuredServices.corporate.features.feature2",
      "data.featuredServices.corporate.features.feature3",
      "data.featuredServices.corporate.features.feature4",
    ],
    ctaKey: "data.featuredServices.corporate.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-blue-50",
    subtitleKey: "data.featuredServices.corporate.subtitle",
  },
  {
    icon: FaShoppingBag,
    titleKey: "data.featuredServices.marketplace.title",
    descriptionKey: "data.featuredServices.marketplace.description",
    features: [
      "data.featuredServices.marketplace.features.feature1",
      "data.featuredServices.marketplace.features.feature2",
      "data.featuredServices.marketplace.features.feature3",
      "data.featuredServices.marketplace.features.feature4",
    ],
    ctaKey: "data.featuredServices.marketplace.cta",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-purple-50",
    specialCtaKey: "data.featuredServices.marketplace.specialCta",
  },
];

export const coreValues = [
  {
    icon: FiHeart,
    titleKey: "data.coreValues.cultureAligned.title",
    descriptionKey: "data.coreValues.cultureAligned.description",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiZap,
    titleKey: "data.coreValues.techEnabled.title",
    descriptionKey: "data.coreValues.techEnabled.description",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiUsers,
    titleKey: "data.coreValues.womenLed.title",
    descriptionKey: "data.coreValues.womenLed.description",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
];

export const businessPillars = [
  {
    icon: FiShield,
    title: "Dignity & Safety",
    description:
      "Every ride prioritizes respect, security, and cultural sensitivity for all our users.",
    stats: "100% Safe Rides",
  },
  {
    icon: FiDollarSign,
    title: "Economic Empowerment",
    description:
      "Creating sustainable income opportunities for women across urban and rural Pakistan.",
    stats: "₨35K Avg. Monthly Earning",
  },
  {
    icon: FiGlobe,
    title: "Scalable Impact",
    description:
      "Building a platform that grows with communities while maintaining quality and values.",
    stats: "50+ Cities Planned",
  },
  {
    icon: FiTarget,
    title: "Purpose-Driven",
    description:
      "Every decision is guided by our mission to transform lives and communities.",
    stats: "10,000+ Women Served",
  },
];

export const impactAreas = [
  {
    title: "Digital Economy",
    description:
      "Driving Pakistan's digital transformation through women's participation in the gig economy.",
    icon: FiZap,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Inclusive Growth",
    description:
      "Ensuring economic opportunities reach underserved communities and marginalized groups.",
    icon: FiUsers,
    color: "from-green-500 to-green-600",
  },
  {
    title: "Social Innovation",
    description:
      "Creating solutions that address real social challenges while building sustainable businesses.",
    icon: FiTarget,
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Women's Empowerment",
    description:
      "Breaking barriers and creating pathways for women's economic and social independence.",
    icon: FiHeart,
    color: "from-pink-500 to-pink-600",
  },
];

export const iconMap = {
  FiUsers,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiBarChart,
  FiFileText,
};

export const coreValue: CoreValue[] = [
  {
    title: "Empowerment",
    description: "Empowering women through economic opportunities",
    icon: FiHeart,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  // Add more core values as needed
];

export const investmentCards: InvestmentCard[] = [
  {
    titleKey: "data.investmentCards.affiliate.title",
    subtitleKey: "data.investmentCards.affiliate.subtitle",
    descriptionKey: "data.investmentCards.affiliate.description",
    icon: "FiUsers",
    color: "from-pink-500 to-pink-600",
    borderColor: "pink-200",
    benefits: [
      {
        icon: "💰",
        titleKey: "data.investmentCards.affiliate.benefits.earnings.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.earnings.description",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "🎓",
        titleKey: "data.investmentCards.affiliate.benefits.training.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.training.description",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🛡️",
        titleKey: "data.investmentCards.affiliate.benefits.insurance.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.insurance.description",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "⛽",
        titleKey: "data.investmentCards.affiliate.benefits.fuel.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.fuel.description",
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🗺️",
        titleKey: "data.investmentCards.affiliate.benefits.zones.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.zones.description",
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "⏰",
        titleKey: "data.investmentCards.affiliate.benefits.flexible.title",
        descriptionKey: "data.investmentCards.affiliate.benefits.flexible.description",
        color: "from-pink-500 to-pink-600",
      },
    ],
    targetAudience: [
      {
        icon: "🎓",
        titleKey: "data.investmentCards.affiliate.audience.educated.title",
        descriptionKey: "data.investmentCards.affiliate.audience.educated.description",
      },
      {
        icon: "🏠",
        titleKey: "data.investmentCards.affiliate.audience.home.title",
        descriptionKey: "data.investmentCards.affiliate.audience.home.description",
      },
      {
        icon: "💪",
        titleKey: "data.investmentCards.affiliate.audience.empowerment.title",
        descriptionKey: "data.investmentCards.affiliate.audience.empowerment.description",
      },
    ],
    cta: {
      primaryKey: "data.investmentCards.affiliate.cta.primary",
      secondaryKey: "data.investmentCards.affiliate.cta.secondary",
      primaryColor:
        "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      secondaryColor:
        "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    },
    additionalLink: {
      icon: "FiShield",
      titleKey: "data.investmentCards.affiliate.additionalLink.title",
      textKey: "data.investmentCards.affiliate.additionalLink.text",
      color: "blue-600",
    },
  },
  {
    titleKey: "data.investmentCards.franchise.title",
    subtitleKey: "data.investmentCards.franchise.subtitle",
    descriptionKey: "data.investmentCards.franchise.description",
    icon: "FiGlobe",
    color: "from-blue-500 to-blue-600",
    borderColor: "blue-200",
    benefits: [
      {
        icon: "🗺️",
        titleKey: "data.investmentCards.franchise.benefits.area.title",
        descriptionKey: "data.investmentCards.franchise.benefits.area.description",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "🏷️",
        titleKey: "data.investmentCards.franchise.benefits.branding.title",
        descriptionKey: "data.investmentCards.franchise.benefits.branding.description",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "👥",
        titleKey: "data.investmentCards.franchise.benefits.onboarding.title",
        descriptionKey: "data.investmentCards.franchise.benefits.onboarding.description",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        titleKey: "data.investmentCards.franchise.benefits.dashboard.title",
        descriptionKey: "data.investmentCards.franchise.benefits.dashboard.description",
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "💰",
        titleKey: "data.investmentCards.franchise.benefits.revenue.title",
        descriptionKey: "data.investmentCards.franchise.benefits.revenue.description",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "✅",
        titleKey: "data.investmentCards.franchise.benefits.compliance.title",
        descriptionKey: "data.investmentCards.franchise.benefits.compliance.description",
        color: "from-orange-500 to-orange-600",
      },
    ],
    targetAudience: [
      {
        icon: "🏢",
        titleKey: "data.investmentCards.franchise.audience.msme.title",
        descriptionKey: "data.investmentCards.franchise.audience.msme.description",
      },
      {
        icon: "🚀",
        titleKey: "data.investmentCards.franchise.audience.entrepreneurs.title",
        descriptionKey: "data.investmentCards.franchise.audience.entrepreneurs.description",
      },
      {
        icon: "🌱",
        titleKey: "data.investmentCards.franchise.audience.development.title",
        descriptionKey: "data.investmentCards.franchise.audience.development.description",
      },
    ],
    cta: {
      primaryKey: "data.investmentCards.franchise.cta.primary",
      secondaryKey: "data.investmentCards.franchise.cta.secondary",
      primaryColor:
        "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      secondaryColor:
        "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
    additionalLink: {
      icon: "FiFileText",
      titleKey: "data.investmentCards.franchise.additionalLink.title",
      textKey: "data.investmentCards.franchise.additionalLink.text",
      color: "blue-600",
    },
  },
  {
    titleKey: "data.investmentCards.investment.title",
    subtitleKey: "data.investmentCards.investment.subtitle",
    descriptionKey: "data.investmentCards.investment.description",
    icon: "FiTrendingUp",
    color: "from-green-500 to-green-600",
    borderColor: "green-200",
    benefits: [
      {
        icon: "💎",
        titleKey: "data.investmentCards.investment.benefits.profit.title",
        descriptionKey: "data.investmentCards.investment.benefits.profit.description",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "📈",
        titleKey: "data.investmentCards.investment.benefits.analytics.title",
        descriptionKey: "data.investmentCards.investment.benefits.analytics.description",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🛡️",
        titleKey: "data.investmentCards.investment.benefits.compliance.title",
        descriptionKey: "data.investmentCards.investment.benefits.compliance.description",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "📊",
        titleKey: "data.investmentCards.investment.benefits.equity.title",
        descriptionKey: "data.investmentCards.investment.benefits.equity.description",
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "🌍",
        titleKey: "data.investmentCards.investment.benefits.csr.title",
        descriptionKey: "data.investmentCards.investment.benefits.csr.description",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "🚀",
        titleKey: "data.investmentCards.investment.benefits.scaling.title",
        descriptionKey: "data.investmentCards.investment.benefits.scaling.description",
        color: "from-orange-500 to-orange-600",
      },
    ],
    targetAudience: [
      {
        icon: "👼",
        titleKey: "data.investmentCards.investment.audience.angel.title",
        descriptionKey: "data.investmentCards.investment.audience.angel.description",
      },
      {
        icon: "🕌",
        titleKey: "data.investmentCards.investment.audience.islamic.title",
        descriptionKey: "data.investmentCards.investment.audience.islamic.description",
      },
      {
        icon: "🤝",
        titleKey: "data.investmentCards.investment.audience.social.title",
        descriptionKey: "data.investmentCards.investment.audience.social.description",
      },
    ],
    cta: {
      primaryKey: "data.investmentCards.investment.cta.primary",
      secondaryKey: "data.investmentCards.investment.cta.secondary",
      primaryColor:
        "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      secondaryColor:
        "border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
    },
  },
];

export const whyChooseReasons = [
  {
    icon: FiClock,
    titleKey: "data.whyChooseReasons.flexibleHours.title",
    descriptionKey: "data.whyChooseReasons.flexibleHours.description",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiShield,
    titleKey: "data.whyChooseReasons.safeEcosystem.title",
    descriptionKey: "data.whyChooseReasons.safeEcosystem.description",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: FiUsers,
    titleKey: "data.whyChooseReasons.verifiedRiders.title",
    descriptionKey: "data.whyChooseReasons.verifiedRiders.description",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiHeart,
    titleKey: "data.whyChooseReasons.respect.title",
    descriptionKey: "data.whyChooseReasons.respect.description",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
];

// Stats Data
export const stats = [
  {
    value: "5000+",
    labelKey: "data.stats.womenDrivers.label",
  },
  {
    value: "₨39K+",
    labelKey: "data.stats.avgEarning.label",
  },
  {
    value: "4.9★",
    labelKey: "data.stats.driverRating.label",
  },
];

// Who Can Join - Left Content
export const whoCanJoin = [
  {
    icon: "👩‍🦳",
    textKey: "data.whoCanJoin.criteria1.text",
  },
  {
    icon: "🏙️",
    textKey: "data.whoCanJoin.criteria2.text",
  },
  {
    icon: "🤝",
    textKey: "data.whoCanJoin.criteria3.text",
  },
  {
    icon: "⏰",
    textKey: "data.whoCanJoin.criteria4.text",
  },
];

// Who Can Join - Right Content (Equal Opportunity)
export const equalOpportunityGroups = [
  {
    icon: "🌾",
    labelKey: "data.equalOpportunity.rural.label",
  },
  {
    icon: "👩‍👧‍👦",
    labelKey: "data.equalOpportunity.singleMothers.label",
  },
  {
    icon: "🎓",
    labelKey: "data.equalOpportunity.students.label",
  },
];

// Grow With Us - Roles
export const growthRoles: GrowthRole[] = [
  {
    icon: "👑",
    titleKey: "growWithUs.roles.cityCaptains.title",
    descriptionKey: "growWithUs.roles.cityCaptains.description",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🛡️",
    titleKey: "growWithUs.roles.safetyMentors.title",
    descriptionKey: "growWithUs.roles.safetyMentors.description",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🏢",
    titleKey: "growWithUs.roles.franchiseLeads.title",
    descriptionKey: "growWithUs.roles.franchiseLeads.description",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💻",
    titleKey: "growWithUs.roles.digitalTrainers.title",
    descriptionKey: "growWithUs.roles.digitalTrainers.description",
    color: "from-purple-500 to-indigo-500",
  },
];

// CSR Initiatives
export const csrInitiatives = [
  {
    icon: "🎓",
    titleKey: "data.csrInitiatives.scholarships.title",
    descriptionKey: "data.csrInitiatives.scholarships.description",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: "💻",
    titleKey: "data.csrInitiatives.digital.title",
    descriptionKey: "data.csrInitiatives.digital.description",
    color: "from-green-400 to-green-500",
  },
  {
    icon: "🏪",
    titleKey: "data.csrInitiatives.grants.title",
    descriptionKey: "data.csrInitiatives.grants.description",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    icon: "🏥",
    titleKey: "data.csrInitiatives.health.title",
    descriptionKey: "data.csrInitiatives.health.description",
    color: "from-purple-400 to-purple-500",
  },
];

// How to Join - Steps
export const joinSteps = [
  {
    step: "01",
    titleKey: "data.joinSteps.step1.title",
    descriptionKey: "data.joinSteps.step1.description",
    icon: "📝",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    step: "02",
    titleKey: "data.joinSteps.step2.title",
    descriptionKey: "data.joinSteps.step2.description",
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    step: "03",
    titleKey: "data.joinSteps.step3.title",
    descriptionKey: "data.joinSteps.step3.description",
    icon: "🎓",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    step: "04",
    titleKey: "data.joinSteps.step4.title",
    descriptionKey: "data.joinSteps.step4.description",
    icon: "🚗",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

// Transparency & Trust - Policies
export const policies = [
  {
    titleKey: "data.policies.driver.title",
    descriptionKey: "data.policies.driver.description",
    icon: "📋",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    url: "https://nisadrive.com/policies/driver-agreement-placeholder",
  },
  {
    titleKey: "data.policies.refund.title",
    descriptionKey: "data.policies.refund.description",
    icon: "💰",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    url: "https://nisadrive.com/policies/refund-policy-placeholder",
  },
  {
    titleKey: "data.policies.verification.title",
    descriptionKey: "data.policies.verification.description",
    icon: "🔍",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    url: "https://nisadrive.com/policies/verification-protocol-placeholder",
  },
  {
    titleKey: "data.policies.faq.title",
    descriptionKey: "data.policies.faq.description",
    icon: "❓",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    url: "https://nisadrive.com/faq/affiliate-faq-placeholder",
  },
];

// Quick Facts for How to Join CTA
export const quickFacts = [
  {
    icon: "⚡",
    textKey: "data.quickFacts.quick.title",
  },
  {
    icon: "🛡️",
    textKey: "data.quickFacts.insurance.title",
  },
  {
    icon: "📞",
    textKey: "data.quickFacts.support.title",
  },
];

// Additional Info for Ready to Drive Your Destiny
export const destinyFacts = [
  {
    icon: "🛡️",
    textKey: "data.destinyFacts.insured.title",
  },
  {
    icon: "📞",
    textKey: "data.destinyFacts.support.title",
  },
  {
    icon: "💰",
    textKey: "data.destinyFacts.payments.title",
  },
];

export const impactStats = [
  {
    icon: "FiUsers",
    labelKey: "data.impactStats.womenEmpowered.label",
    value: "10,000+",
    color: "pink",
  },
  {
    icon: "FiShield",
    labelKey: "data.impactStats.safeRides.label",
    value: "4.5M+",
    color: "rose",
  },
  {
    icon: "FiTrendingUp",
    labelKey: "data.impactStats.ecosystemValue.label",
    value: "PKR 500M+",
    color: "purple",
  },
  {
    icon: "FiStar",
    labelKey: "data.impactStats.citiesCovered.label",
    value: "15+",
    color: "indigo",
  },
  {
    icon: "FiGlobe",
    labelKey: "data.impactStats.safetyRating.label",
    value: "95%",
    color: "pink",
  },
  {
    icon: "FiHeart",
    labelKey: "data.impactStats.livesTransformed.label",
    value: "∞",
    color: "rose",
  },
];

export const headlineStats = [
  {
    indicatorKey: "data.headlineStats.activeRiders.indicator",
    year1: "500",
    year2: "1,000",
    year3: "2,000",
  },
  {
    indicatorKey: "data.headlineStats.dailyRides.indicator",
    year1: "5,000+",
    year2: "12,000+",
    year3: "25,000+",
  },
  {
    indicatorKey: "data.headlineStats.womenRiders.indicator",
    year1: "80,000+",
    year2: "200,000+",
    year3: "450,000+",
  },
  {
    indicatorKey: "data.headlineStats.directJobs.indicator",
    year1: "600+",
    year2: "1,200+",
    year3: "2,500+",
  },
  {
    indicatorKey: "data.headlineStats.indirectJobs.indicator",
    year1: "250+",
    year2: "600+",
    year3: "1,200+",
  },
  {
    indicatorKey: "data.headlineStats.cities.indicator",
    year1: "2 (Pilot)",
    year2: "5+",
    year3: "10+",
  },
  {
    indicatorKey: "data.headlineStats.households.indicator",
    year1: "150,000+",
    year2: "400,000+",
    year3: "1 Million+",
  },
];

export const problemStats = [
  {
    stat: "70%+",
    labelKey: "data.problemStats.mobilityChallenges.label",
    color: "red",
  },
  {
    stat: "85%",
    labelKey: "data.problemStats.harassment.label",
    color: "orange",
  },
  {
    stat: "60%",
    labelKey: "data.problemStats.avoidTravel.label",
    color: "yellow",
  },
  {
    stat: "45%",
    labelKey: "data.problemStats.missOpportunities.label",
    color: "pink",
  },
];

export const stories = [
  {
    titleKey: "data.stories.firstIncome.title",
    storyKey: "data.stories.firstIncome.story",
    icon: "💰",
    locationKey: "data.stories.firstIncome.location",
    impactKey: "data.stories.firstIncome.impact",
  },
  {
    titleKey: "data.stories.nightShift.title",
    storyKey: "data.stories.nightShift.story",
    icon: "🏥",
    locationKey: "data.stories.nightShift.location",
    impactKey: "data.stories.nightShift.impact",
  },
  {
    titleKey: "data.stories.education.title",
    storyKey: "data.stories.education.story",
    icon: "🎓",
    locationKey: "data.stories.education.location",
    impactKey: "data.stories.education.impact",
  },
];

export const csrPillars = [
  {
    titleKey: "data.csrPillars.womenTech.title",
    pillarKey: "data.csrPillars.womenTech.pillar",
    descriptionKey: "data.csrPillars.womenTech.description",
    metricKey: "data.csrPillars.womenTech.metric",
    color: "purple",
    icon: "💻",
  },
  {
    titleKey: "data.csrPillars.economic.title",
    pillarKey: "data.csrPillars.economic.pillar",
    descriptionKey: "data.csrPillars.economic.description",
    metricKey: "data.csrPillars.economic.metric",
    color: "pink",
    icon: "💼",
  },
  {
    titleKey: "data.csrPillars.educational.title",
    pillarKey: "data.csrPillars.educational.pillar",
    descriptionKey: "data.csrPillars.educational.description",
    metricKey: "data.csrPillars.educational.metric",
    color: "rose",
    icon: "📚",
  },
];

export const visionItems = [
  {
    titleKey: "data.visionItems.geographic.title",
    descriptionKey: "data.visionItems.geographic.description",
    icon: "🗺️",
    color: "blue",
  },
  {
    titleKey: "data.visionItems.service.title",
    descriptionKey: "data.visionItems.service.description",
    icon: "📦",
    color: "green",
  },
  {
    titleKey: "data.visionItems.sustainable.title",
    descriptionKey: "data.visionItems.sustainable.description",
    icon: "🔋",
    color: "emerald",
  },
  {
    titleKey: "data.visionItems.regional.title",
    descriptionKey: "data.visionItems.regional.description",
    icon: "🌍",
    color: "indigo",
  },
  {
    titleKey: "data.visionItems.rideVolume.title",
    descriptionKey: "data.visionItems.rideVolume.description",
    icon: "🚗",
    color: "pink",
  },
  {
    titleKey: "data.visionItems.economic.title",
    descriptionKey: "data.visionItems.economic.description",
    icon: "💎",
    color: "purple",
  },
];

export const actionCards = [
  {
    titleKey: "data.actionCards.partner.title",
    descriptionKey: "data.actionCards.partner.description",
    icon: "🤝",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    titleKey: "data.actionCards.sponsor.title",
    descriptionKey: "data.actionCards.sponsor.description",
    icon: "💝",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    titleKey: "data.actionCards.safeRide.title",
    descriptionKey: "data.actionCards.safeRide.description",
    icon: "🎒",
    gradient: "from-purple-400 to-indigo-400",
  },
];

export const milestones = [
  {
    year: "2023",
    titleKey: "data.milestones.2023.title",
    descriptionKey: "data.milestones.2023.description",
  },
  {
    year: "2024",
    titleKey: "data.milestones.2024.title",
    descriptionKey: "data.milestones.2024.description",
  },
  {
    year: "2025",
    titleKey: "data.milestones.2025.title",
    descriptionKey: "data.milestones.2025.description",
  },
  {
    year: "2027",
    titleKey: "data.milestones.2027.title",
    descriptionKey: "data.milestones.2027.description",
  },
];

export const values = [
  {
    icon: FiHeart,
    titleKey: "data.values.culture.title",
    descriptionKey: "data.values.culture.description",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FiShield,
    titleKey: "data.values.tech.title",
    descriptionKey: "data.values.tech.description",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: FiUsers,
    titleKey: "data.values.women.title",
    descriptionKey: "data.values.women.description",
    color: "from-emerald-500 to-teal-500",
  },
];

export const verificationSteps = [
  {
    icon: FiCheckCircle,
    titleKey: "data.verificationSteps.nadra.title",
    descriptionKey: "data.verificationSteps.nadra.description",
  },
  {
    icon: FiShield,
    titleKey: "data.verificationSteps.police.title",
    descriptionKey: "data.verificationSteps.police.description",
  },
  {
    icon: FiUsers,
    titleKey: "data.verificationSteps.safety.title",
    descriptionKey: "data.verificationSteps.safety.description",
  },
  {
    icon: FiStar,
    titleKey: "data.verificationSteps.certification.title",
    descriptionKey: "data.verificationSteps.certification.description",
  },
];

export const geoFeatures = [
  {
    icon: FiMapPin,
    titleKey: "data.geoFeatures.preApproved.title",
    descriptionKey: "data.geoFeatures.preApproved.description",
  },
  {
    icon: FiAlertTriangle,
    titleKey: "data.geoFeatures.redFlag.title",
    descriptionKey: "data.geoFeatures.redFlag.description",
  },
  {
    icon: FiClock,
    titleKey: "data.geoFeatures.dynamic.title",
    descriptionKey: "data.geoFeatures.dynamic.description",
  },
  {
    icon: FiEye,
    titleKey: "data.geoFeatures.monthly.title",
    descriptionKey: "data.geoFeatures.monthly.description",
  },
];

export const aboutMilestones = [
  {
    year: "2023",
    titleKey: "about.milestones.2023.title",
    descriptionKey: "about.milestones.2023.description",
  },
  {
    year: "2024",
    titleKey: "about.milestones.2024.title",
    descriptionKey: "about.milestones.2024.description",
  },
  {
    year: "2025",
    titleKey: "about.milestones.2025.title",
    descriptionKey: "about.milestones.2025.description",
  },
  {
    year: "2027",
    titleKey: "about.milestones.2027.title",
    descriptionKey: "about.milestones.2027.description",
  },
];

export const aboutValues = [
  {
    icon: FiHeart,
    titleKey: "about.values.culture.title",
    descriptionKey: "about.values.culture.description",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FiShield,
    titleKey: "about.values.tech.title",
    descriptionKey: "about.values.tech.description",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: FiUsers,
    titleKey: "about.values.women.title",
    descriptionKey: "about.values.women.description",
    color: "from-emerald-500 to-teal-500",
  },
];

export const aboutStats = [
  { icon: FiUsers, value: "10,000+", labelKey: "about.stats.womenEmpowered.label" },
  { icon: FiTarget, value: "15+", labelKey: "about.stats.cities.label" },
  { icon: FiStar, value: "100%", labelKey: "about.stats.safety.label" },
  { icon: FiTrendingUp, value: "5 Years", labelKey: "about.stats.growth.label" },
];
