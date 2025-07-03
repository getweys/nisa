"use client";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "components/ui/input";
import { AnimatedButton } from "components/animated-button";
import { FormFileInput } from "components/ui/FormFileInput";
import { FormRadioGroup } from "components/ui/FormRadioGroup";
import { FormCheckboxGroup } from "components/ui/FormCheckboxGroup";

export default function InternshipProgramForm() {
  return (
    <div className="pt-32">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1
          className="text-4xl sm:text-4xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          INTERNSHIP PROGRAM{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            SIGN-UP FORM
          </span>
        </motion.h1>
      </motion.div>

      {/* Form */}
      <form className="space-y-6 mx-4 sm:mx-20">
        {/* Section A: Applicant Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Applicant Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Your name"
              required
            />
            <FormInput
              label="Date of Birth (MM-DD-YY)"
              name="dob"
              type="date"
              placeholder="MM-DD-YY"
              required
            />
            <FormInput
              label="Mobile Number (WhatsApp preferred)"
              name="mobileNumber"
              type="tel"
              placeholder="Your mobile number"
              required
            />
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <FormInput
              label="City of Residence"
              name="city"
              placeholder="Your city"
              required
            />
            <FormInput
              label="CNIC / B-Form Number"
              name="cnicNumber"
              placeholder="XXXXX-XXXXXXX-X"
              required
            />
            <FormRadioGroup
              label="Gender"
              name="gender"
              options={["Male", "Female", "Prefer not to say"]}
              required
            />
          </div>
        </div>

        {/* Section B: Education & Skills */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Education & Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Other"
              name="educationLevelOther"
              placeholder="Specify education level"
            />
            <FormInput
              label="Area of Study / Field"
              name="studyField"
              placeholder="Your field of study"
              required
            />
            <FormInput
              label="Current Institution (if any)"
              name="institution"
              placeholder="Your institution"
            />
            <FormInput
              label="Other"
              name="skillsOther"
              placeholder="Specify other skills"
            />
            <FormRadioGroup
              label="Current Education Level"
              name="educationLevel"
              options={["Matric", "Intermediate", "Graduate", "Other"]}
              required
            />
            <FormCheckboxGroup
              label="Technical or Digital Skills"
              name="skills"
              options={[
                "MS Office",
                "Social Media Management",
                "Graphic Design",
                "Web/App Development",
                "Research & Writing",
                "Other",
              ]}
            />
          </div>
        </div>

        {/* Section C: Internship Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Internship Preferences
          </h2>
          <div className="space-y-6">
            <FormInput
              label="Available Hours per Week"
              name="hoursPerWeek"
              placeholder="Enter hours"
              required
            />
            <FormRadioGroup
              label="Preferred Internship Department"
              name="department"
              options={[
                "Marketing & social media",
                "Technology & App Development",
                "Operations & Logistics",
                "Research & Impact",
                "Customer Experience",
                "CSR & Outreach",
              ]}
            />
            <FormRadioGroup
              label="Preferred Mode of Internship"
              name="internshipMode"
              options={[
                "On-site (Rawalpindi/Islamabad Office)",
                "Remote (Online)",
                "Hybrid",
              ]}
            />
            <FormRadioGroup
              label="Will you allow police verification?"
              name="policeVerification"
              options={["Yes", "No"]}
              required
            />
          </div>
        </div>

        {/* Section D: Motivation & Declaration */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Motivation & Declaration
          </h2>
          <div className="space-y-6">
            <FormInput
              label="Why do you want to intern with NisaDrive? (Max 150-250 words)"
              name="motivation"
              placeholder="Your motivation (150-250 words)"
              required
            />
            <FormFileInput
              label="Please upload your brief resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
            />
            <FormCheckboxGroup
              label="Preferred Working Hours"
              name="workingHours"
              options={["Morning", "Afternoon", "Evening", "Flexible"]}
            />
            <FormRadioGroup
              label="Do you agree to NisaDrive’s Affiliate Terms & Conditions and Code of Conduct?"
              name="termsAgreement"
              options={["Yes – Required to proceed"]}
              required
            />
            <FormCheckboxGroup
              label="Acknowledgment"
              name="acknowledgment"
              options={[
                "I confirm that all information provided is accurate.",
                "I understand this is an unpaid internship, but it may include certification, mentorship, and growth opportunities.",
                "I consent to the use of my data under NisaDrive's Privacy Policy.",
              ]}
            />
          </div>
        </div>

        <div className="py-4 flex justify-end">
          <AnimatedButton
            size="sm"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            Submit Application
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
}
