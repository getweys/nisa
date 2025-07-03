"use client";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "components/ui/input";
import { AnimatedButton } from "components/animated-button";
import { FormRadioGroup } from "components/ui/FormRadioGroup";

export default function PartnerApplicationForm() {
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
          FRANCHISE &{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            INVESTMENT INQUIRY FORM
          </span>
        </motion.h1>
      </motion.div>

      {/* Form */}
      <form className="space-y-6 mx-4 sm:mx-20">
        {/* Section 1: Personal Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              name="name"
              placeholder="Your name"
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
              label="Residential Address"
              name="address"
              placeholder="Your address"
              required
            />
            <FormInput
              label="City of Operation"
              name="city"
              placeholder="Your city"
              required
            />
          </div>
        </div>

        {/* Section 2: Investment Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Investment Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Briefly describe your business background (if any)"
              name="businessBackground"
              placeholder="Your business background"
              required
            />
            <FormInput
              label="Why are you interested in NisaDrive?"
              name="interestReason"
              placeholder="Your reason for interest"
              required
            />
            <FormInput
              label="Available Investment Range (PKR)"
              name="investmentRange"
              placeholder="Enter amount in PKR"
              required
            />
            <FormRadioGroup
              label="Type of Interest"
              name="interestType"
              options={[
                "Franchise Partnership",
                "Investment Opportunity",
                "Both",
              ]}
              required
            />
            <FormRadioGroup
              label="Preferred Mode of Involvement"
              name="involvementMode"
              options={["Active", "Strategic", "Silent Partner"]}
              required
            />
            <FormRadioGroup
              label="Do you have experience in business or mobility sectors?"
              name="businessExperience"
              options={["(Yes)", "(No)"]}
              required
            />

            <FormRadioGroup
              label="How did you hear about NisaDrive?"
              name="source"
              options={[
                "Facebook",
                "Instagram",
                "Website",
                "Referral",
                "Other",
              ]}
              required
            />
            <FormRadioGroup
              label="Would you like to receive our investor updates and newsletter?"
              name="newsletter"
              options={["Yes", "No"]}
              required
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
