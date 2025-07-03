"use client";

import { AnimatedButton } from "components/animated-button";
import { AnimatedCard } from "components/animated-card";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiUsers,
  FiTarget,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

export default function AboutPage() {
  const milestones = [
    {
      year: "2023",
      title: "The Inspiration",
      description:
        "Tasmia's personal challenge with unreliable transport sparked the idea",
    },
    {
      year: "2024",
      title: "Foundation",
      description:
        "NisaDrive launched under FAIRIST with initial pilot program",
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

  const values = [
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
      description:
        "By women, for women - creating opportunities at every level",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    { icon: FiUsers, value: "10,000+", label: "Women to be Empowered" },
    { icon: FiTarget, value: "15+", label: "Cities Planned" },
    { icon: FiStar, value: "100%", label: "Safety Focused" },
    { icon: FiTrendingUp, value: "5 Years", label: "Growth Roadmap" },
  ];

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
              Our Story
            </motion.div>

            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                NisaDrive
              </span>
            </h1>
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
                NisaDrive was born from a deeply personal challenge—one that
                countless women in Pakistan silently endure every day: the
                simple act of commuting. Our story began with{" "}
                <strong className="text-pink-600">Tasmia Zehra</strong>, a
                bright and determined AI student, who missed classes and
                opportunities just because her school van broke down or was
                unavailable.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                That frustration turned into inspiration. Guided by her dream to
                remove barriers to women's mobility, she envisioned NisaDrive—a
                ride-hailing platform designed by women, for women.
              </p>

              <p className="text-base text-gray-700 leading-relaxed">
                What started as an idea has grown into a nationwide movement,
                nurtured under the umbrella of the{" "}
                <a href="https://fairist.ai/" className="text-purple-600">
                  Fatima AI Research Institute (FAIRIST)
                </a>
                —a forward-looking organization committed to "AI for All" and
                social innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-pink-400 via-rose-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                <div className="relative z-10 text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiHeart className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90">
                    Empowering women through safe, dignified, and reliable
                    transportation across Pakistan
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
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our Core{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Values
              </span>
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              NisaDrive is culture-aligned, tech-enabled, and women-led,
              offering a safe, dignified, and reliable transport alternative for
              millions of Pakistani women.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
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
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Rawalpindi to remote areas, our roadmap aims to empower
              10,000+ women over the next five years—whether as riders, drivers,
              coders, or community builders.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-200 via-purple-200 to-pink-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
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
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A Word from{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Our Founder
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FiHeart className="w-10 h-10 text-white" />
                </div>

                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "At NisaDrive, we're not just giving women a ride—we're giving
                  them freedom, safety, and opportunity. Whether you're a
                  student, a single mother, or a dreamer like I once was, know
                  that this platform belongs to you. Let's drive
                  forward—together."
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <div className="text-lg font-semibold text-gray-900">
                    Tasmia Zehra
                  </div>
                  <div className="text-pink-600 font-medium">
                    Founder & CEO, NisaDrive
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
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                  Vision
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Beyond Pakistan, we envision NisaDrive reaching other
                underserved regions where women face similar cultural and
                mobility barriers. Backed by robust legal compliance, data
                privacy protection, and a Monitoring, Evaluation & Learning
                (MEL) framework, NisaDrive is more than a platform—it's a
                promise to build a safe, inclusive, and accountable future for
                women in the digital economy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  size="sm"
                  className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                >
                  Join Our Mission
                </AnimatedButton>
                <AnimatedButton size="md" variant="outline">
                  Learn More
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Blogs{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                & Newsroom
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiStar className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Coming Soon!
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Sign up to receive inspiring rider stories, safety
                  innovations, and social impact highlights. Want to contribute?
                  Write to us at:{" "}
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
                    Subscribe for Updates
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              CSR Initiatives{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                & Ventures
              </span>
            </h1>
            <p className="text-base text-gray-500 max-w-4xl mx-auto">
              NisaDrive is proud to integrate its Corporate Social
              Responsibility (CSR) vision with real-world action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AnimatedCard className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                The Nisa Awards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recognizing talented girls in the tech and transport sectors,
                celebrating innovation and achievement.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.2} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Scholarships & Skills Programs
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering rural and underserved women to enter the digital
                economy through education and training.
              </p>
            </AnimatedCard>

            <AnimatedCard delay={0.4} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiHeart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Livelihood Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helping women in fragile areas gain flexible, dignified income
                through mobility opportunities.
              </p>
            </AnimatedCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 text-center border border-pink-100"
          >
            <p className="text-gray-700 leading-relaxed">
              All CSR programs are governed under our official policies
              including the{" "}
              <strong className="text-pink-600">
                CSR Commitment Statement
              </strong>
              ,{" "}
              <strong className="text-purple-600">
                Scholarship Disbursement Policy
              </strong>
              , and{" "}
              <strong className="text-rose-600">
                Sponsorship & Donations Policy
              </strong>
              , ensuring accountability and transparency at every step.
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
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                Our Teams
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with the right department for your specific needs.
              We're here to help!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                dept: "General Queries",
                email: "support@nisadrive.com",
                icon: FiUsers,
                color: "from-blue-500 to-cyan-500",
              },
              {
                dept: "Affiliates/Drivers",
                email: "affiliates@nisadrive.com",
                icon: FiTarget,
                color: "from-green-500 to-emerald-500",
              },
              {
                dept: "Investment & Franchise",
                email: "invest@nisadrive.com",
                icon: FiTrendingUp,
                color: "from-purple-500 to-indigo-500",
              },
              {
                dept: "CSR & Media",
                email: "impact@nisadrive.com",
                icon: FiHeart,
                color: "from-pink-500 to-rose-500",
              },
              {
                dept: "Legal & Privacy",
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
