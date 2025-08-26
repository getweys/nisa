"use client";

import { AnimatedButton } from "components/animated-button";
import { AnimatedCard } from "components/animated-card";
import { aboutMilestones, aboutStats, aboutValues, stats } from "data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiHeart,
  FiUsers,
  FiTarget,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { useLanguage } from "contexts/language-context";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="nisaDrive" className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-15 blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-rose-100 rounded-full opacity-25 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-pink-200"
            >
              <FiHeart className="w-4 h-4" />
              {t("about.ourStory")}
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                NisaDrive{" "}
              </span>
            </motion.h1>
          </motion.div>

          {/* Main Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-base text-gray-700 leading-relaxed">
                {t("about.story.part1")}{" "}
                <strong className="text-pink-600 font-semibold">
                  Tasmia Zehra
                </strong>
                {t("about.story.part2")}
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                {t("about.story.part3")}
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                {t("about.story.part4")}{" "}
                <a
                  href="https://fairist.ai/"
                  className="text-purple-600 font-semibold"
                >
                  {t("about.story.fairist")}
                </a>
                {t("about.story.part5")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-pink-500 via-rose-500 to-pink-500 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                <div className="relative z-10 text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiHeart className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t("about.mission.title")}</h3>
                  <p className="text-lg opacity-90">
                    {t("about.mission.description")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {aboutStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {t(`about.stats.${stat.label.toLowerCase().replace(/\s+/g, '')}.label`)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.values.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.values.title2")}{" "}
              </span>
            </motion.h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              {t("about.values.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutValues.map((value, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.2}
                className="text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(`about.values.${value.title.toLowerCase().replace(/\s+/g, '')}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`about.values.${value.title.toLowerCase().replace(/\s+/g, '')}.description`)}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.journey.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.journey.title2")}
              </span>
            </motion.h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("about.journey.description")}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-200 via-purple-200 to-pink-200 hidden md:block" />

            <div className="space-y-12">
              {aboutMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="text-2xl font-bold text-pink-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {t(`about.milestones.${milestone.year}.title`)}
                      </h3>
                      <p className="text-gray-600">{t(`about.milestones.${milestone.year}.description`)}</p>
                    </div>
                  </div>

                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {index + 1}
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section
        id="founder"
        className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.founder.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.founder.title2")}
              </span>
            </motion.h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
                <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Image
                    src={"/images/owner.jpeg"}
                    alt="Founder Image"
                    width={1000}
                    height={1000}
                    className="size-20 rounded-full object-cover"
                  />
                </div>

                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  {t("about.founder.quote")}
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-lg font-semibold text-gray-900">
                    Tasmia Zehra
                  </div>
                  <div className="text-pink-600 font-medium">
                    {t("about.founder.role")}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section id="vision" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {t("about.vision.title")}{" "}
                <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                  {t("about.vision.title2")}
                </span>
              </motion.h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t("about.vision.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  size="md"
                  className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  {t("about.vision.cta.primary")}
                </AnimatedButton>
                <AnimatedButton size="md" variant="outline">
                  {t("about.vision.cta.secondary")}
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blogs & Newsroom Section */}
      <section
        id="blogs"
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.blogs.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.blogs.title2")}
              </span>
            </motion.h1>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiStar className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("about.blogs.comingSoon")}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {t("about.blogs.description")}{" "}
                  <a
                    href="mailto:blog@nisadrive.com"
                    className="text-pink-600 hover:text-pink-700 font-semibold"
                  >
                    blog@nisadrive.com
                  </a>
                </p>

                <div className="flex justify-center">
                  <AnimatedButton
                    size="sm"
                    className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                  >
                    {t("about.blogs.cta")}
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSR Initiatives Section */}
      <section id="csr" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.csr.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.csr.title2")}
              </span>
            </motion.h1>
            <p className="text-base text-gray-500 max-w-4xl mx-auto">
              {t("about.csr.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("about.csr.initiatives.awards.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.csr.initiatives.awards.description")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("about.csr.initiatives.scholarships.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.csr.initiatives.scholarships.description")}
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t("about.csr.initiatives.livelihood.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.csr.initiatives.livelihood.description")}
              </p>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center border border-pink-100"
          >
            <p className="text-gray-700 leading-relaxed">
              {t("about.csr.policies.description")}{" "}
              <strong className="text-pink-600">
                {t("about.csr.policies.commitment")}
              </strong>
              ,{" "}
              <strong className="text-purple-600">
                {t("about.csr.policies.scholarship")}
              </strong>
              , and{" "}
              <strong className="text-rose-600">
                {t("about.csr.policies.sponsorship")}
              </strong>
              , {t("about.csr.policies.ensuring")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Teams Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t("about.contact.title")}{" "}
              <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                {t("about.contact.title2")}
              </span>
            </motion.h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("about.contact.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                dept: t("about.contact.teams.general.dept"),
                email: "support@nisadrive.com",
                icon: FiUsers,
                color: "from-blue-500 to-cyan-500",
              },
              {
                dept: t("about.contact.teams.affiliates.dept"),
                email: "affiliates@nisadrive.com",
                icon: FiTarget,
                color: "from-green-500 to-emerald-500",
              },
              {
                dept: t("about.contact.teams.investment.dept"),
                email: "invest@nisadrive.com",
                icon: FiTrendingUp,
                color: "from-purple-500 to-indigo-500",
              },
              {
                dept: t("about.contact.teams.csr.dept"),
                email: "impact@nisadrive.com",
                icon: FiHeart,
                color: "from-pink-500 to-rose-500",
              },
              {
                dept: t("about.contact.teams.legal.dept"),
                email: "compliance@nisadrive.com",
                icon: FiShield,
                color: "from-gray-500 to-slate-500",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {contact.dept}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-pink-600 hover:text-pink-700 font-medium transition-colors break-all"
                >
                  {contact.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
