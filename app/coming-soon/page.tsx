"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";
import {
  Smartphone,
  Clock,
  Bell,
  ArrowLeft,
  Download,
  Mail,
  MapPin,
  Calendar,
  Star,
  Users,
  Shield,
  Heart,
} from "lucide-react";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";
import { useLanguage } from "contexts/language-context";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown timer (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const features = [
    {
      icon: Shield,
      title: t("comingSoon.features.safety.title"),
      description: t("comingSoon.features.safety.description"),
    },
    {
      icon: Users,
      title: t("comingSoon.features.community.title"),
      description: t("comingSoon.features.community.description"),
    },
    {
      icon: Heart,
      title: t("comingSoon.features.empowerment.title"),
      description: t("comingSoon.features.empowerment.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 px-4 overflow-hidden">
        <div className="relative max-w-6xl mx-auto h-screen text-center flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div>
              {/* Main Content */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                {t("comingSoon.tagline")}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {t("comingSoon.title.part1")}
                </span>
                <br />
                <span className="text-gray-800">
                  {t("comingSoon.title.part2")}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                {t("comingSoon.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
