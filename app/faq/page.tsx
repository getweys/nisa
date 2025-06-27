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

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General FAQs about NisaDrive",
      icon: HelpCircle,
      color: "from-blue-500 to-purple-500",
      questions: [
        {
          question: "What is NisaDrive?",
          answer:
            "NisaDrive is a women-centric ride-hailing service designed to provide safe, affordable, and culturally appropriate transportation for women in Pakistan. The platform empowers women both as passengers and as driver-partners (affiliates).",
        },
        {
          question: "Who can become a NisaDrive driver/affiliate?",
          answer:
            "Any woman who meets the minimum age and licensing requirements and has access to a bike or can purchase one (with or without NisaDrive's support) may register as an affiliate driver.",
        },
        {
          question: "Is NisaDrive available in my city?",
          answer:
            "NisaDrive is launching pilot operations in Rawalpindi. Expansion to other cities will follow based on demand and feasibility assessments.",
        },
        {
          question: "How does NisaDrive ensure rider safety?",
          answer:
            "All drivers undergo background verification, safety and customer care training. The app includes emergency SOS, geo-fencing, real-time tracking, and 24/7 support.",
        },
        {
          question: "What are NisaDrive's working hours?",
          answer:
            "Our working hours include 07 am-07 pm daily, however affiliates manage their own schedules; nevertheless, the app and customer support operate 24/7 to ensure availability and safety.",
        },
        {
          question: "How is fare calculated on NisaDrive?",
          answer:
            "Fare is calculated based on standard per-kilometer rates. Rates are designed to be affordable for users while offering sustainable income for affiliates.",
        },
        {
          question: "What if I want to cancel a ride or request a refund?",
          answer:
            "Please refer to our Refund & Cancellation Policy, available in the Legal section of the app or website.",
        },
        {
          question: "How does NisaDrive protect my personal data?",
          answer:
            "NisaDrive complies with PECA 2016 and proposed Data Protection Bill guidelines to protect personal information, supported by our Privacy and Data Sharing Policies.",
        },
        {
          question: "Can men use NisaDrive?",
          answer:
            "No, NisaDrive is exclusively designed for women passengers and women drivers to maintain cultural and personal comfort.",
        },
        {
          question: "How can I join the NisaDrive Internship Program?",
          answer:
            "You can sign up for early access to internships by visiting the Careers section of our website and subscribing to updates.",
        },
      ],
    },
    {
      title: "App Functionality FAQs",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
      questions: [
        { question: "How do I download and register on the NisaDrive app?" },
        { question: "Can I choose my driver or schedule a ride in advance?" },
        { question: "How do geo-fenced zones work?" },
        { question: "How do I use promo codes or coupons?" },
      ],
    },
    {
      title: "Affiliate/Driver FAQs",
      icon: Car,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          question:
            "What are the eligibility requirements to become a NisaDrive affiliate?",
        },
        { question: "What kind of training will I receive?" },
        { question: "How is ride income calculated and disbursed?" },
        { question: "Can I work part-time or only on weekends?" },
        { question: "Is there any cost for joining as a driver?" },
      ],
    },
    {
      title: "Safety & Security FAQs",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      questions: [
        { question: "How does NisaDrive ensure my safety during the ride?" },
        { question: "What should I do if I feel unsafe during a ride?" },
        { question: "Are all rides tracked and recorded?" },
        { question: "How do I report an emergency or file a complaint?" },
      ],
    },
    {
      title: "Payments, Refunds & Wallet FAQs",
      icon: CreditCard,
      color: "from-orange-500 to-red-500",
      questions: [
        { question: "Which payment methods are accepted?" },
        { question: "Can I pay with JazzCash/Easypaisa?" },
        { question: "What is the refund process for canceled rides?" },
        { question: "Are there service charges or hidden fees?" },
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
              Frequently Asked Questions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Got Questions?
              </span>
              <br />
              <span className="text-gray-800">We've Got Answers.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find comprehensive answers to all your questions about NisaDrive -
              from app functionality and safety features to driver requirements
              and payment methods.
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
                key={category.title}
                variants={itemVariants}
                className="mb-12"
              >
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-full mb-4`}
                  >
                    <category.icon className="w-5 h-5" />
                    <h2 className="text-xl font-bold">{category.title}</h2>
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
                              {faq.question}
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
                                  {
                                    "This question is still being answered. Please check back later."
                                  }
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
