"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  Palette,
  BarChart3,
  MessageSquare,
  Bell,
  ExternalLink,
  Heart,
  Shield,
  Globe,
  Video,
  Lock,
  TrendingUp,
} from "lucide-react";
import { Navigation } from "components/navigation";
import { Card, CardContent } from "components/ui/card";
import { Button } from "components/ui/button";
import { Footer } from "components/footer";
import { AnimatedButton } from "components/animated-button";
import { useRouter } from "next/navigation";

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const internshipAreas = [
    {
      title: "Mobility Tech & App Development",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      description: "Build the next generation of mobility solutions",
    },
    {
      title: "Artificial Intelligence / Machine Learning",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
      description: "Develop AI systems for safer, smarter rides",
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      description: "Design intuitive experiences for women riders",
    },
    {
      title: "Research, Policy & Data Analytics",
      icon: BarChart3,
      color: "from-green-500 to-teal-500",
      description: "Drive data-informed policy and research",
    },
    {
      title: "Digital Media & Communications",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500",
      description: "Tell our story and amplify our impact",
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4" />
              Careers at NisaDrive
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Join the Movement.
              </span>
              <br />
              <span className="text-gray-800">
                Shape the Future of Inclusive Mobility.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At NisaDrive, we're building more than just a transport service —
              we're driving a movement of dignified livelihoods, safety
              innovation, and gender equity. While our services are designed for
              women, by women, our team welcomes diverse talent committed to
              making mobility safer, smarter, and more accessible across
              Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                🚫 Open Positions
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      No vacancies at the moment.
                    </h3>
                    <p className="text-gray-600 mb-8">
                      We're always evolving — stay in the loop by subscribing to
                      our updates or following us on social media.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                      <Bell className="w-4 h-4 mr-2" />
                      Subscribe to Career Alerts
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-full font-medium transition-all duration-300"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Follow Us for Updates
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internship & Fellowship Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🚀 Internship & Fellowship Opportunities
              </h2>
              <p className="text-xl text-white/90 mb-2">
                Are you a changemaker ready to build the future?
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                NisaDrive's 3-Month Fellowship & Internship Program is crafted
                for emerging professionals in:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {internshipAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {area.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/10 border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/90 mb-6">
                      We particularly encourage applications from women, rural
                      youth, and marginalized communities.
                    </p>
                  </div>
                  <AnimatedButton
                    size="sm"
                    className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                    onClick={() => {
                      router.push("/InternshipProgramForm");
                    }}
                  >
                    Join the Internship Waitlist
                  </AnimatedButton>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inclusive Hiring Policy Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Inclusive Hiring Policy
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Although our services cater exclusively to women commuters, our
                hiring is based on equal opportunity principles. We believe in
                skill, sincerity, and social commitment — regardless of gender,
                religion, ethnicity, or background.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      NisaDrive proudly upholds:
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        The Equal Opportunity Employment Policy
                      </h4>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        The Anti-Harassment & Anti-Discrimination Act 2010
                      </h4>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Our internal Safe Workplace & Inclusivity Guidelines
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                📝 How to Apply
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                When positions open, our recruitment follows a secure and
                transparent process:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  step: "1",
                  title: "Online Application",
                  description: "Online Application through our website",
                  icon: Globe,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "2",
                  title: "Background Verification",
                  description: "Mandatory Background & Police Verification",
                  icon: Shield,
                  color: "from-green-500 to-green-600",
                },
                {
                  step: "3",
                  title: "Virtual Interview",
                  description: "Phase 1: Virtual Interview with HR",
                  icon: Video,
                  color: "from-purple-500 to-purple-600",
                },
                {
                  step: "4",
                  title: "Final Interview",
                  description: "Phase 2: Final Interview with Leadership Team",
                  icon: Users,
                  color: "from-pink-500 to-pink-600",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Every application is treated with confidentiality and
                    respect.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning & Growth Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Learning & Growth at NisaDrive
              </h2>
              <p className="text-xl text-white/90 mb-6">
                We don't just hire — we invest in people.
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                All team members gain access to:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "On-the-job mentoring by seasoned experts",
                  icon: Users,
                  color: "from-blue-400 to-blue-500",
                },
                {
                  title: "Safety, compliance & first-aid workshops",
                  icon: Shield,
                  color: "from-green-400 to-green-500",
                },
                {
                  title: "Tech upskilling, webinars & cross-border learning",
                  icon: Code,
                  color: "from-purple-400 to-purple-500",
                },
                {
                  title: "Career coaching & progression planning",
                  icon: TrendingUp,
                  color: "from-pink-400 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-white/10 border-white/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xl text-white font-medium">
                    Because when our people grow, so does our impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Celebrating Our People Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Celebrating Our People
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're a front-line affiliate rider or an office-based
                analyst, your contribution counts.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      We recognize outstanding team members through:
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Affiliate Rider of the Month
                      </h4>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        NisaDrive CSR Fellow Awards
                      </h4>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        Leadership Track Recognition for Interns
                      </h4>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-medium text-gray-800 mb-2">
                      Your story could be next.
                    </p>
                    <p className="text-gray-600">
                      Stay tuned for inspiring employee journeys.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Have More Questions Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Have More Questions?
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 border-0 shadow-xl">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      Visit our detailed FAQ Page for answers on:
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <p className="font-medium text-gray-800">Internships</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <p className="font-medium text-gray-800">
                        Career Pathways
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                      <p className="font-medium text-gray-800">
                        Diversity Commitments
                      </p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <p className="font-medium text-gray-800">
                        Hiring Process
                      </p>
                    </div>
                  </div>

                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    onClick={() => (window.location.href = "/faq")}
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Visit FAQ Page
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <div className="mt-4">
                    <a
                      href="/faq"
                      className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-300"
                    >
                      FAQ
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <span className="text-gray-600 mx-4 font-medium">
              Building Tomorrow's Mobility, Today
            </span>
            <div
              className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
