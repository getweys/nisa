import {
  CoreValue,
  InvestmentCard,
  LanguageOption,
  NavigationItem,
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
} from "react-icons/fi";
import { FaSchool, FaShoppingBag } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

export const navigationItems: NavigationItem[] = [
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
    title: "Women-Only Drivers",
    description:
      "Trained and verified female drivers ensuring your peace of mind.",
  },
  {
    title: "Transparent & Fair Pricing",
    description:
      "No hidden charges. Standard rates with real-time fare estimates.",
  },
  {
    title: "Geo-Fenced Safety Zones",
    description:
      "Smart mobility with routes mapped for maximum safety using AI & local intel.",
  },
  {
    title: "Culturally Aligned Services",
    description:
      "Tailored for the social and cultural needs of Pakistani women.",
  },
  {
    title: "Empowering Livelihoods",
    description:
      "Enabling thousands of women to earn through driving, delivery, and digital gigs.",
  },
];

export const services = [
  {
    title: "Student Commutes",
    description:
      "Safe, scheduled school and university drop-offs with background-verified women drivers.",
    color: "from-blue-500 to-blue-600",
    lightColor: "from-blue-50 to-blue-100",
  },
  {
    title: "Professional Transport",
    description:
      "Reliable transport for working women with ride history, emergency alert features & live tracking.",
    color: "from-pink-500 to-pink-600",
    lightColor: "from-pink-50 to-pink-100",
  },
  {
    title: "Personal Errands",
    description:
      "Easy access to healthcare, markets, salons, and home visits – right from your phone.",
    color: "from-green-500 to-green-600",
    lightColor: "from-green-50 to-green-100",
  },
  {
    title: "Courier Services",
    description:
      "Female-managed last-mile delivery for women-centric businesses and home services.",
    color: "from-purple-500 to-purple-600",
    lightColor: "from-purple-50 to-purple-100",
  },
];

export const roles = [
  {
    title: "Rider",
    description:
      "Experience safe, reliable transportation with verified female drivers. Book rides, track your journey, and travel with confidence across Pakistan.",
    link: "/RideExperienceForm",
  },

  {
    title: "Driver (Affiliate)",
    description:
      "Empower yourself with flexible earning opportunities. Join our network of verified female drivers and build your independent business while serving your community.",
    link: "/DriverAffiliateForm",
  },
  {
    title: "Partner",
    description:
      "Collaborate with NisaDrive to expand women-centric services. From businesses to organizations, join us in creating safer mobility solutions for Pakistani women.",
    link: "/PartnerApplicationForm",
  },
];

export const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Our Services", href: "/services" },
  { title: "Safety First", href: "/safety" },
  { title: "Our Impact", href: "/impact" },
  { title: "Join Our Team", href: "/careers" },
];

export const businessLinks = [
  { title: "Business Solutions", href: "/business" },
  { title: "Partner with Us", href: "/earn" },
  { title: "Book a Ride", href: "/booking" },
  { title: "Help Center", href: "/faq" },
  { title: "Contact Support", href: "/contact" },
  { title: "Become a Driver", href: "/partners" },
];

export const legalLinks = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
  { title: "Compliance", href: "/compliance" },
];

export const socialLinks = [
  {
    icon: FiFacebook,
    href: "/",
    label: "Facebook",
    color: "hover:bg-blue-500",
  },
  {
    icon: FiInstagram,
    href: "/",
    label: "Instagram",
    color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
  },
  {
    icon: FiLinkedin,
    href: "/",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  { icon: FiTwitter, href: "/", label: "Twitter", color: "hover:bg-sky-500" },
];

export const featuredServices = [
  {
    icon: MdDirectionsBike,
    title: "Women-Only Ride-Hailing",
    description:
      "Whether it's college, work, shopping, or social visits – NisaDrive offers a secure, affordable, and female-only ride option. Our trained affiliates are background-verified, geo-tracked, and follow NisaDrive's strict Safety Management Protocols.",
    features: [
      "Women drivers only",
      "Live ride tracking",
      "In-app SOS button",
      "Police-verified affiliates",
      "Fixed, transparent pricing",
    ],
    cta: "Book now and ride with confidence.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiPackage,
    title: "Courier & Delivery Services",
    description:
      "Running a home-based business or need to send documents or parcels? NisaDrive offers women-friendly courier options with same-day delivery within city limits. Ideal for women entrepreneurs, NGOs, and working professionals.",
    features: [
      "Female-led pickup & drop-off",
      "Affordable pricing per km",
      "Secure, tracked delivery",
      "Optional signature verification",
    ],
    cta: "Start your delivery today.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-indigo-50",
  },
  {
    icon: FaSchool,
    title: "School, College & University Pick & Drop",
    description:
      "NisaDrive understands the challenges parents and guardians face. Our customized education sector mobility packages cater to: Schools, Colleges, Universities, Coaching Centers, and Female Dormitories.",
    features: [
      "Police-verified drivers",
      "Daily check-ins & route tracking",
      "Support for special needs",
      "Soft behavioral training for affiliates",
    ],
    cta: "Institutions may request customized monthly ride bundles.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-orange-50",
    subtitle: "Why Parents Trust Us:",
  },
  {
    icon: FiHeart,
    title: "NGO & Health Mobility Support",
    description:
      "Partner with us to mobilize your field staff, female beneficiaries, or outreach teams. NisaDrive offers reliable transport for civil society actors to serve in the underserved regions.",
    features: [
      "Special discounts for registered NGOs",
      "Reliable transport in underserved regions",
      "Field staff mobility solutions",
      "Outreach team support",
    ],
    cta: "Let's move your mission forward — safely.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-green-50",
  },
  {
    icon: FiBriefcase,
    title: "Corporate & Office Mobility Packages",
    description:
      "From HR convenience to retention strategies — our corporate ride plans reduce absenteeism and increase safety. Ideal for organizations aiming for diverse, women-inclusive workforces.",
    features: [
      "White-label options",
      "Monthly billing",
      "Dedicated support",
      "Usage analytics dashboard",
    ],
    cta: "Contact us for enterprise quotes.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-blue-50",
    subtitle: "Benefits:",
  },
  {
    icon: FaShoppingBag,
    title: "Marketplace & Errand Rides",
    description:
      "Need a ride for daily errands, market trips, or running a side hustle? NisaDrive enables women to manage their homes, lives, and businesses with mobility that's safe and on-demand.",
    features: [
      "Daily errands & market trips",
      "Safe and on-demand mobility",
      "Support for side hustles",
      "Home and business management",
    ],
    cta: "From groceries to client meetings — we get you there, and back.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-purple-50",
    specialCta: "Every ride fuels a woman's freedom.",
  },
];

export const coreValues = [
  {
    icon: FiHeart,
    title: "Culture-Aligned",
    description:
      "Respecting Pakistani values while empowering women through dignified mobility solutions.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiZap,
    title: "Tech-Enabled",
    description:
      "Leveraging cutting-edge technology to create seamless, safe, and efficient transportation experiences.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiUsers,
    title: "Women-Led",
    description:
      "Built by women, for women—creating opportunities and breaking barriers in the mobility sector.",
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
    title: "Affiliate Partnership",
    subtitle: "Drive with purpose",
    description:
      "As a NisaDrive-affiliated rider, join thousands of women who have found financial independence and professional growth through our comprehensive support system.",
    icon: "FiUsers",
    color: "from-pink-500 to-pink-600",
    borderColor: "pink-200",
    benefits: [
      {
        icon: "💰",
        title: "Keep 85% of all earnings",
        description: "Highest revenue share in the industry",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "🎓",
        title: "Training & Licensing",
        description: "Comprehensive safety management program",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "🛡️",
        title: "Full Insurance Coverage",
        description: "Accidental injury & life insurance included",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "⛽",
        title: "Fuel Vouchers & Rewards",
        description: "Performance-based incentives and support",
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🗺️",
        title: "Geo-fenced Service Zones",
        description: "Culturally sensitive and safe areas",
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "⏰",
        title: "Flexible Hours",
        description: "Work on your terms with behavioral code compliance",
        color: "from-pink-500 to-pink-600",
      },
    ],
    targetAudience: [
      {
        icon: "🎓",
        title: "Educated Women",
        description: "Seeking professional opportunities",
      },
      {
        icon: "🏠",
        title: "Home-based Workers",
        description: "Looking for flexible income sources",
      },
      {
        icon: "💪",
        title: "Empowerment Seekers",
        description: "Wanting dignity and digital inclusion",
      },
    ],
    cta: {
      primary: "Become an Affiliate",
      secondary: "Learn More",
      primaryColor:
        "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
      secondaryColor:
        "border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
    },
    additionalLink: {
      icon: "FiShield",
      title: "Safety Management Policy",
      text: "Link Safety Policy Here →",
      color: "blue-600",
    },
  },
  {
    title: "Franchise Investment Model",
    subtitle: "Secure regional franchise rights within designated safe zones",
    description:
      "Establish your own NisaDrive franchise in strategic locations with comprehensive support, exclusive territorial rights, and proven business systems.",
    icon: "FiGlobe",
    color: "from-blue-500 to-blue-600",
    borderColor: "blue-200",
    benefits: [
      {
        icon: "🗺️",
        title: "5-10 km Geo-fenced Area",
        description: "Exclusive operating rights in designated safe zones",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "🏷️",
        title: "Complete Branding Package",
        description:
          "Access to branding, recruitment SOPs, and policy toolkits",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "👥",
        title: "Rider Onboarding System",
        description: "Background check & vetting system for quality assurance",
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "📊",
        title: "Live Dashboard Access",
        description: "Real-time analytics and performance monitoring",
        color: "from-indigo-500 to-indigo-600",
      },
      {
        icon: "💰",
        title: "Exclusive Revenue Sharing",
        description: "Transparent and profitable revenue distribution model",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "📋",
        title: "Compliance Framework",
        description: "Vendor Code of Conduct and Compliance Systems adherence",
        color: "from-red-500 to-red-600",
      },
    ],
    targetAudience: [
      {
        icon: "👩‍💼",
        title: "Women-led MSMEs",
        description: "Small and medium enterprises seeking expansion",
      },
      {
        icon: "🚀",
        title: "Local Entrepreneurs",
        description: "Business leaders with community connections",
      },
      {
        icon: "🌱",
        title: "Development-oriented Businesses",
        description: "Organizations focused on social impact",
      },
    ],
    cta: {
      primary: "Explore Franchise Opportunities",
      secondary: "Download Franchise Kit",
      primaryColor:
        "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      secondaryColor:
        "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
  },
  {
    title: "General & Institutional Investment",
    subtitle: "Partner with us to scale nationwide and beyond",
    description:
      "Join our mission to transform Pakistan's mobility landscape through strategic partnerships, transparent governance, and sustainable impact investing.",
    icon: "FiTrendingUp",
    color: "from-purple-500 to-purple-600",
    borderColor: "purple-200",
    benefits: [
      {
        icon: "📈",
        title: "Transparent Profit-sharing",
        description: "Clear and fair profit distribution structure",
        color: "from-green-500 to-green-600",
      },
      {
        icon: "📊",
        title: "MEL-based Analytics",
        description: "Monitoring, Evaluation & Learning framework insights",
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: "⚖️",
        title: "Strong Compliance",
        description: "PECA 2016, SECP governance, GDPR principles adherence",
        color: "from-red-500 to-red-600",
      },
      {
        icon: "🎯",
        title: "Future Equity Options",
        description: "Early-stage partner equity opportunities",
        color: "from-orange-500 to-orange-600",
      },
      {
        icon: "🤝",
        title: "CSR & ESG Alignment",
        description: "Philanthropy-ready for social impact funds",
        color: "from-purple-500 to-purple-600",
      },
      {
        icon: "🌍",
        title: "Nationwide Scaling",
        description: "Strategic expansion across Pakistan and beyond",
        color: "from-indigo-500 to-indigo-600",
      },
    ],
    targetAudience: [
      {
        icon: "👼",
        title: "Angel Investors",
        description: "Individual investors seeking social impact returns",
      },
      {
        icon: "🕌",
        title: "Islamic Finance Groups",
        description: "Sharia-compliant investment opportunities",
      },
      {
        icon: "🌱",
        title: "Social Impact Donors",
        description: "Organizations focused on sustainable development",
      },
    ],
    cta: {
      primary: "Explore Investment Opportunities",
      secondary: "Download Investment Deck",
      primaryColor:
        "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      secondaryColor:
        "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
    },
    additionalLink: {
      icon: "FiBarChart",
      title: "MEL Framework",
      text: "See MEL Framework →",
      color: "blue-600",
    },
  },
];

export const whyChooseReasons = [
  {
    icon: FiClock,
    title: "Flexible Hours, Full Control",
    description:
      "Whether you're a student, homemaker, or freelancer—you decide when and how much you want to work.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    icon: FiShield,
    title: "Safe and Secure Ecosystem",
    description:
      "Our Emergency Response Policy, Safety Management System, and Women-Only Rides ensure peace of mind.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: FiUsers,
    title: "Verified Riders & Real Training",
    description:
      "All affiliates undergo background checks, orientation, and safety training based on our Partner Agreement and Trust & Safety Policies.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: FiHeart,
    title: "Respect, Not Risk",
    description:
      "You drive with pride, in zones you choose, with full insurance coverage for major injuries and accidental death (no vehicle damage required).",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
  },
];

// Stats Data
export const stats = [
  {
    value: "5000+",
    label: "Women Drivers",
  },
  {
    value: "₨39K+",
    label: "Avg. Monthly Earning",
  },
  {
    value: "4.9★",
    label: "Driver Rating",
  },
];

// Who Can Join - Left Content
export const whoCanJoin = [
  {
    icon: "👩‍🦳",
    text: "Women aged 18-50 with a valid motorcycle license",
  },
  {
    icon: "🏙️",
    text: "Residents of the areas of our operations",
  },
  {
    icon: "🤝",
    text: "Individuals from underrepresented areas or marginalized backgrounds",
  },
  {
    icon: "⏰",
    text: "Women interested in flexible, part-time, or weekend work",
  },
];

// Who Can Join - Right Content (Equal Opportunity)
export const equalOpportunityGroups = [
  {
    icon: "🌾",
    label: "Rural Areas",
  },
  {
    icon: "👩‍👧‍👦",
    label: "Single Mothers",
  },
  {
    icon: "🎓",
    label: "Students",
  },
];

// Grow With Us - Roles
export const growthRoles = [
  {
    icon: "👑",
    title: "City Captains",
    description: "Lead and coordinate operations in your city",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🛡️",
    title: "Safety Mentors",
    description: "Train new drivers on safety protocols",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "🏢",
    title: "Franchise Leads",
    description: "Manage your own NisaDrive franchise",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💻",
    title: "Digital Literacy Trainers",
    description: "Teach tech skills to fellow riders",
    color: "from-purple-500 to-indigo-500",
  },
];

// CSR Initiatives
export const csrInitiatives = [
  {
    icon: "🎓",
    title: "Annual Scholarships",
    description: "For girls in IT fields and AI Research Engineering",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: "💻",
    title: "Digital Literacy Programs",
    description: "For riders and their families",
    color: "from-green-400 to-green-500",
  },
  {
    icon: "🏪",
    title: "Community Grants",
    description: "For female-led microenterprises",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    icon: "🏥",
    title: "Health & Safety Workshops",
    description: "In partnership with NGOs",
    color: "from-purple-400 to-purple-500",
  },
];

// How to Join - Steps
export const joinSteps = [
  {
    step: "01",
    title: "Fill out the Affiliate Signup Form",
    description:
      "Complete our comprehensive application form with your details and preferences.",
    icon: "📝",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
  {
    step: "02",
    title: "Undergo background and police verification",
    description:
      "We conduct thorough background checks to ensure safety for all our community members.",
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    step: "03",
    title: "Attend a two-day orientation",
    description:
      "Join our comprehensive training program and receive your official rider badge.",
    icon: "🎓",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    step: "04",
    title: "Start earning with full support",
    description:
      "Begin your journey with rider insurance, safety coverage, and 24/7 support.",
    icon: "🚗",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

// Transparency & Trust - Policies
export const policies = [
  {
    title: "Driver/Partner Agreement",
    description: "Comprehensive terms and conditions for all affiliates",
    icon: "📋",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    url: "https://nisadrive.com/policies/driver-agreement-placeholder",
  },
  {
    title: "Refund & Cancellation Policy",
    description: "Clear guidelines on refunds and cancellation procedures",
    icon: "💰",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    url: "https://nisadrive.com/policies/refund-policy-placeholder",
  },
  {
    title: "Background Verification Protocol",
    description: "Detailed process for safety and security checks",
    icon: "🔍",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    url: "https://nisadrive.com/policies/verification-protocol-placeholder",
  },
  {
    title: "Affiliate FAQs",
    description: "Frequently asked questions and detailed answers",
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
    text: "Quick 5-min application",
  },
  {
    icon: "🛡️",
    text: "Full insurance coverage",
  },
  {
    icon: "📞",
    text: "24/7 support available",
  },
];

// Additional Info for Ready to Drive Your Destiny
export const destinyFacts = [
  {
    icon: "🛡️",
    text: "Fully Insured",
  },
  {
    icon: "📞",
    text: "24/7 Support",
  },
  {
    icon: "💰",
    text: "Weekly Payments",
  },
];

export const impactStats = [
  {
    icon: "FiUsers",
    label: "Women Empowered",
    value: "10,000+",
    color: "pink",
  },
  {
    icon: "FiShield",
    label: "Safe Rides",
    value: "4.5M+",
    color: "rose",
  },
  {
    icon: "FiTrendingUp",
    label: "Ecosystem Value",
    value: "PKR 500M+",
    color: "purple",
  },
  {
    icon: "FiStar",
    label: "Cities Covered",
    value: "15+",
    color: "indigo",
  },
  {
    icon: "FiGlobe",
    label: "Safety Rating",
    value: "95%",
    color: "pink",
  },
  {
    icon: "FiHeart",
    label: "Lives Transformed",
    value: "∞",
    color: "rose",
  },
];

export const headlineStats = [
  {
    indicator: "Active Female Riders (Affiliates)",
    year1: "500",
    year2: "1,000",
    year3: "2,000",
  },
  {
    indicator: "Daily Rides Facilitated",
    year1: "5,000+",
    year2: "12,000+",
    year3: "25,000+",
  },
  {
    indicator: "Women Riders Served",
    year1: "80,000+",
    year2: "200,000+",
    year3: "450,000+",
  },
  {
    indicator: "Direct Jobs Created",
    year1: "600+",
    year2: "1,200+",
    year3: "2,500+",
  },
  {
    indicator: "Indirect Jobs Enabled",
    year1: "250+",
    year2: "600+",
    year3: "1,200+",
  },
  {
    indicator: "Cities Covered",
    year1: "2 (Pilot)",
    year2: "5+",
    year3: "10+",
  },
  {
    indicator: "Estimated Households Reached",
    year1: "150,000+",
    year2: "400,000+",
    year3: "1 Million+",
  },
];

export const problemStats = [
  {
    stat: "70%+",
    label: "Women face mobility challenges",
    color: "red",
  },
  {
    stat: "85%",
    label: "Report harassment in public transport",
    color: "orange",
  },
  {
    stat: "60%",
    label: "Avoid traveling alone",
    color: "yellow",
  },
  {
    stat: "45%",
    label: "Miss opportunities due to transport issues",
    color: "pink",
  },
];

export const stories = [
  {
    title: "First Income",
    story:
      "A single mother living in Rawalpindi, originally from Vehari earns her first income by becoming a NisaDrive affiliate.",
    icon: "💰",
    location: "Rawalpindi",
    impact: "Economic Independence",
  },
  {
    title: "Night Shift Freedom",
    story:
      "A nurse in Rawalpindi travels to evening shifts without fear or male dependence.",
    icon: "🏥",
    location: "Rawalpindi",
    impact: "Professional Growth",
  },
  {
    title: "Education Access",
    story:
      "A student in Islamabad regularly attends university — no longer missing classes due to van shortages.",
    icon: "🎓",
    location: "Islamabad",
    impact: "Educational Success",
  },
];

export const csrPillars = [
  {
    title: "Women in Tech",
    pillar: "Pillar 1",
    description:
      "Annual Awards for female students in AI, data science & robotics",
    metric: "> 100+ girls supported annually",
    color: "purple",
    icon: "💻",
  },
  {
    title: "Economic Inclusion",
    pillar: "Pillar 2",
    description: "Affiliate training in underserved towns",
    metric: "Micro-finance & safety-certified women riders",
    color: "pink",
    icon: "💼",
  },
  {
    title: "Educational Access",
    pillar: "Pillar 3",
    description: "Safe rides for school/college girls",
    metric: "Target: Unlock 1 million learning hours by 2027",
    color: "rose",
    icon: "📚",
  },
];

export const visionItems = [
  {
    title: "Geographic Expansion",
    description: "Serve 10+ cities including Lahore, Karachi, and Peshawar",
    icon: "🗺️",
    color: "blue",
  },
  {
    title: "Service Diversification",
    description: "Launch Women Courier Services for e-commerce",
    icon: "📦",
    color: "green",
  },
  {
    title: "Sustainable Transport",
    description: "Introduce electric rides & climate-smart scooters",
    icon: "🔋",
    color: "emerald",
  },
  {
    title: "Regional Expansion",
    description: "Expand cross-border pilots in culturally similar regions",
    icon: "🌍",
    color: "indigo",
  },
  {
    title: "Ride Volume",
    description: "Deliver 4.5M+ rides",
    icon: "🚗",
    color: "pink",
  },
  {
    title: "Economic Impact",
    description: "Generate Rs 500M+ in earnings for women",
    icon: "💎",
    color: "purple",
  },
];

export const actionCards = [
  {
    title: "Partner with us",
    description:
      "Join our mission as a strategic partner and help scale our impact across Pakistan",
    icon: "🤝",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    title: "Sponsor a female rider",
    description:
      "Directly support a woman's journey to economic independence and empowerment",
    icon: "💝",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    title: "Support a safe ride to school",
    description:
      "Enable educational access by funding safe transportation for young women",
    icon: "🎒",
    gradient: "from-purple-400 to-indigo-400",
  },
];

export const milestones = [
  {
    year: "2023",
    title: "The Inspiration",
    description:
      "Tasmia's personal challenge with unreliable transport sparked the idea",
  },
  {
    year: "2024",
    title: "Foundation",
    description: "NisaDrive launched under FAIRIST with initial pilot program",
  },
  {
    year: "2025",
    title: "Growth",
    description: "Expanding to multiple cities with 500+ active drivers",
  },
  {
    year: "2027",
    title: "Vision",
    description: "Empowering 10,000+ women across Pakistan and beyond",
  },
];

export const values = [
  {
    icon: FiHeart,
    title: "Culture-Aligned",
    description:
      "Respecting Pakistani values while empowering women's mobility",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FiShield,
    title: "Tech-Enabled",
    description:
      "Leveraging AI and technology for safer, smarter transportation",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: FiUsers,
    title: "Women-Led",
    description: "By women, for women - creating opportunities at every level",
    color: "from-emerald-500 to-teal-500",
  },
];

export const verificationSteps = [
  {
    icon: FiCheckCircle,
    title: "NADRA-based ID Verification",
    description:
      "Complete identity verification through Pakistan's national database",
  },
  {
    icon: FiShield,
    title: "Police Background Checks",
    description:
      "Thorough background screening under our official Verification Policy",
  },
  {
    icon: FiUsers,
    title: "Safety & Anti-Harassment Training",
    description: "Mandatory comprehensive training for all driver affiliates",
  },
  {
    icon: FiStar,
    title: "Safety Management Certification",
    description: "Certified under our Safety Management System Policy",
  },
];

export const geoFeatures = [
  {
    icon: FiMapPin,
    title: "Pre-Approved Secure Zones",
    description: "Operations limited to verified safe areas only",
  },
  {
    icon: FiAlertTriangle,
    title: "Red-Flag Avoidance",
    description: "Automatic exclusion of high-risk hotspots",
  },
  {
    icon: FiClock,
    title: "Dynamic Safety Adjustments",
    description: "Real-time zone updates based on local safety trends",
  },
  {
    icon: FiEye,
    title: "Monthly Zone Reviews",
    description:
      "Regular coordination with local authorities and community input",
  },
];
