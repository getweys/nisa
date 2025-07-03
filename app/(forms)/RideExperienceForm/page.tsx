"use client";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "components/ui/input";
import { AnimatedButton } from "components/animated-button";
import { FormRadioGroup } from "components/ui/FormRadioGroup";

export default function RideExperienceForm() {
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
          CUSTOMER FEEDBACK{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            / RIDE EXPERIENCE FORM
          </span>
        </motion.h1>
      </motion.div>

      {/* Form */}
      <form className="space-y-6 mx-4 sm:mx-20">
        {/* Section A: Ride Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ride Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Ride Date"
              name="rideDate"
              type="date"
              placeholder="YYYY-MM-DD"
              required
            />
            <FormInput
              label="Pickup Location"
              name="pickupLocation"
              placeholder="Enter pickup location"
              required
            />
            <FormInput
              label="Drop-off Location"
              name="dropoffLocation"
              placeholder="Enter drop-off location"
              required
            />
            <FormInput
              label="Affiliate / Rider Name (Optional)"
              name="riderName"
              placeholder="Enter rider name"
            />
            <FormRadioGroup
              label="Type of Ride"
              name="rideType"
              options={[
                "Personal",
                "School / College / University",
                "Work Commute",
                "Medical / Emergency",
                "Other",
              ]}
              required
            />
            <FormInput
              label="Other (please specify)"
              name="rideTypeOther"
              placeholder="Specify ride type"
            />
          </div>
        </div>

        {/* Section B: Your Experience */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormRadioGroup
              label="How would you rate your overall ride experience?"
              name="overallExperience"
              options={["1", "2", "3", "4", "5"]}
              required
            />
            <FormRadioGroup
              label="Safety & Comfort"
              name="safetyComfort"
              options={["Excellent", "Good", "Fair", "Poor", "Not Applicable"]}
              required
            />
            <FormRadioGroup
              label="Driver Courtesy & Professionalism"
              name="driverCourtesy"
              options={["Excellent", "Good", "Fair", "Poor"]}
              required
            />
            <FormRadioGroup
              label="Punctuality & Ride Timing"
              name="punctuality"
              options={["On Time", "Slightly Late", "Very Late"]}
              required
            />
            <FormRadioGroup
              label="Ride Cleanliness & Hygiene"
              name="cleanliness"
              options={["Very Clean", "Acceptable", "Needs Improvement"]}
              required
            />
            <FormRadioGroup
              label="App Booking Experience"
              name="appExperience"
              options={[
                "Smooth and Easy",
                "Minor Issues",
                "Difficult",
                "Didn't use app",
              ]}
              required
            />
          </div>
        </div>

        {/* Section C: Suggestions & Complaints */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Suggestions & Complaints (Optional)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="What did you like the most about the ride?"
              name="likedMost"
              placeholder="Your feedback"
            />
            <FormInput
              label="What can we improve?"
              name="improvements"
              placeholder="Your suggestions"
            />
            <FormRadioGroup
              label="Did you face any issues or feel unsafe during the ride?"
              name="issuesUnsafe"
              options={["Yes", "No"]}
            />
            <FormInput
              label="Please describe below"
              name="issuesDescription"
              placeholder="Describe any issues"
            />
          </div>
        </div>

        {/* Section D: Optional Contact Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Optional Contact Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label="Name"
              name="contactName"
              placeholder="Your name"
            />
            <FormInput
              label="Phone / WhatsApp"
              name="contactPhone"
              type="tel"
              placeholder="Your phone number"
            />
            <FormRadioGroup
              label="Would you like our team to contact you regarding your feedback?"
              name="contactFeedback"
              options={["Yes", "No, just sharing feedback"]}
            />
          </div>
        </div>

        <div className="py-4 flex justify-end">
          <AnimatedButton
            size="sm"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            Submit Feedback
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
}
