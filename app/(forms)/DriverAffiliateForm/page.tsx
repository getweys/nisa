"use client";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "components/ui/input";
import { AnimatedButton } from "components/animated-button";
import { FormFileInput } from "components/ui/FormFileInput";
import { FormRadioGroup } from "components/ui/FormRadioGroup";
import { FormCheckboxGroup } from "components/ui/FormCheckboxGroup";

export default function DriverAffiliateForm() {
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
          DRIVER{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            / AFFILIATE REGISTRATION FORM
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
              label="Full Name"
              name="fullName"
              placeholder="Your name"
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <FormInput
              label="Father's / Husband's Name"
              name="guardianName"
              placeholder="Father's or Husband's name"
              required
            />
            <FormInput
              label="CNIC Number"
              name="cnicNumber"
              placeholder="XXXXX-XXXXXXX-X"
              required
            />
            <FormInput
              label="Date of Birth"
              name="dob"
              type="date"
              placeholder="YYYY-MM-DD"
              required
            />
            <FormInput
              label="Mobile Number (WhatsApp Preferred)"
              name="mobileNumber"
              type="tel"
              placeholder="Your mobile number"
              required
            />
            <FormInput
              label="Residential Address"
              name="address"
              placeholder="Your address"
              required
            />
            <FormInput
              label="City"
              name="city"
              placeholder="Your city"
              required
            />
          </div>
        </div>

        {/* Section 2: Mobility & Vehicle Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Mobility & Vehicle Info
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Driving License Number (Optional)"
              name="licenseNumber"
              placeholder="Your license number"
            />
            <FormInput
              label="Bike Model & Registration No."
              name="bikeDetails"
              placeholder="e.g., Honda CD70, ABC-123"
            />
            <FormFileInput
              label="Upload CNIC Copy (Front & Back)"
              name="cnicCopy"
              accept="image/*,.pdf"
              required
            />
            <FormFileInput
              label="Upload Driving License (Optional)"
              name="licenseCopy"
              accept="image/*,.pdf"
            />
            <FormRadioGroup
              label="Do you own a motorbike?"
              name="ownMotorbike"
              options={["Yes", "No"]}
              required
            />
          </div>
        </div>

        {/* Section 3: Safety & Background */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Safety & Background
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormRadioGroup
              label="Have you received safety riding training?"
              name="safetyTraining"
              options={["Yes", "No"]}
              required
            />
            <FormRadioGroup
              label="Can you complete NisaDrive training modules?"
              name="nisaDriveTraining"
              options={["Yes", "No"]}
              required
            />
            <FormRadioGroup
              label="Any legal/criminal case history?"
              name="criminalHistory"
              options={["Yes", "No"]}
              required
            />
            <FormRadioGroup
              label="Will you allow police verification?"
              name="policeVerification"
              options={["Yes", "No"]}
              required
            />
            <FormFileInput
              label="Upload Passport-size Photo"
              name="passportPhoto"
              accept="image/*"
              required
            />
          </div>
        </div>

        {/* Section 4: Availability & Agreement */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Availability & Agreement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormCheckboxGroup
              label="Preferred Working Days"
              name="workingDays"
              options={[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ]}
            />
            <FormCheckboxGroup
              label="Preferred Working Hours"
              name="workingHours"
              options={["Morning", "Afternoon", "Evening", "Flexible"]}
            />
            <FormRadioGroup
              label="Are you comfortable with girl student rides?"
              name="girlStudentRides"
              options={["Yes", "No", "Maybe"]}
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
