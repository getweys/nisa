"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Smartphone,
  Car,
  Shield,
  CreditCard,
} from "lucide-react";
import { Card, CardContent } from "components/ui/card";
import { useLanguage } from "contexts/language-context";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { t } = useLanguage();

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqCategories = [
    {
      titleKey: "faq.page.categories.general.title",
      icon: HelpCircle,
      color: "from-blue-500 to-purple-500",
      questions: [
        {
          questionKey: "faq.page.questions.whatIsNisaDrive.question",
          answerKey: "faq.page.questions.whatIsNisaDrive.answer",
        },
        {
          questionKey: "faq.page.questions.whoCanBecomeDriver.question",
          answerKey: "faq.page.questions.whoCanBecomeDriver.answer",
        },
        {
          questionKey: "faq.page.questions.availableCities.question",
          answerKey: "faq.page.questions.availableCities.answer",
        },
        {
          questionKey: "faq.page.questions.howEnsureSafety.question",
          answerKey: "faq.page.questions.howEnsureSafety.answer",
        },
        {
          questionKey: "faq.page.questions.workingHours.question",
          answerKey: "faq.page.questions.workingHours.answer",
        },
        {
          questionKey: "faq.page.questions.howFareCalculated.question",
          answerKey: "faq.page.questions.howFareCalculated.answer",
        },
        {
          questionKey: "faq.page.questions.cancelRideRefund.question",
          answerKey: "faq.page.questions.cancelRideRefund.answer",
        },
        {
          questionKey: "faq.page.questions.howProtectData.question",
          answerKey: "faq.page.questions.howProtectData.answer",
        },
        {
          questionKey: "faq.page.questions.canMenUse.question",
          answerKey: "faq.page.questions.canMenUse.answer",
        },
        {
          questionKey: "faq.page.questions.howJoinInternship.question",
          answerKey: "faq.page.questions.howJoinInternship.answer",
        },
      ],
    },
    {
      titleKey: "faq.page.categories.app.title",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
      questions: [
        { questionKey: "faq.page.questions.downloadRegister.question" },
        { questionKey: "faq.page.questions.chooseDriver.question" },
        { questionKey: "faq.page.questions.geoFencedZones.question" },
        { questionKey: "faq.page.questions.promoCodes.question" },
      ],
    },
    {
      titleKey: "faq.page.categories.driver.title",
      icon: Car,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          questionKey: "faq.page.questions.eligibilityRequirements.question",
        },
        { questionKey: "faq.page.questions.whatTraining.question" },
        { questionKey: "faq.page.questions.rideIncome.question" },
        { questionKey: "faq.page.questions.partTime.question" },
        { questionKey: "faq.page.questions.costForJoining.question" },
      ],
    },
    {
      titleKey: "faq.page.categories.safety.title",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      questions: [
        { questionKey: "faq.page.questions.howEnsureSafety.question" },
        { questionKey: "faq.page.questions.feelUnsafe.question" },
        { questionKey: "faq.page.questions.ridesTracked.question" },
        { questionKey: "faq.page.questions.reportEmergency.question" },
      ],
    },
    {
      titleKey: "faq.page.categories.payments.title",
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      questions: [
        { questionKey: "faq.page.questions.paymentMethods.question" },
        { questionKey: "faq.page.questions.jazzCashEasypaisa.question" },
        { questionKey: "faq.page.questions.refundProcess.question" },
        { questionKey: "faq.page.questions.serviceCharges.question" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              {t("faq.page.hero.tagline")}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("faq.page.hero.title.part1")}
              </span>
              <br />
              <span className="text-gray-800">{t("faq.page.hero.title.part2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("faq.page.hero.description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.titleKey}
                variants={itemVariants}
                className="mb-12"
              >
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4`}
                  >
                    <category.icon className="w-5 h-5" />
                    <h2 className="text-xl font-bold">{t(category.titleKey)}</h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(itemIndex);

                    return (
                      <Card
                        key={faqIndex}
                        className="backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                          >
                            <h3 className="text-lg font-semibold text-gray-800 pr-4">
                              {t(faq.questionKey)}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>

                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6"
                            >
                              <div className="border-t border-gray-200 pt-4">
                                <p className="text-gray-600 leading-relaxed">
                                  {faq.answerKey ? t(faq.answerKey) : t("faq.page.placeholder.answer")}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
