"use client";
import React from "react";
import { motion } from "framer-motion";
import FormInput from "components/ui/input";
import { AnimatedButton } from "components/animated-button";
import { FormFileInput } from "components/ui/FormFileInput";
import { FormRadioGroup } from "components/ui/FormRadioGroup";
import { FormCheckboxGroup } from "components/ui/FormCheckboxGroup";
import { useLanguage } from "contexts/language-context";

export default function InternshipProgramForm() {
  const { t } = useLanguage();
  
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
          {t("internshipForm.title")}{" "}
          <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            {t("internshipForm.subtitle")}
          </span>
        </motion.h1>
      </motion.div>

      {/* Form */}
      <form className="space-y-6 mx-4 sm:mx-20">
        {/* Section A: Applicant Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("internshipForm.sections.applicantDetails.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label={t("internshipForm.sections.applicantDetails.fullName")}
              name="fullName"
              placeholder={t("internshipForm.sections.applicantDetails.fullNamePlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.applicantDetails.dateOfBirth")}
              name="dob"
              type="date"
              placeholder={t("internshipForm.sections.applicantDetails.dateOfBirthPlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.applicantDetails.mobileNumber")}
              name="mobileNumber"
              type="tel"
              placeholder={t("internshipForm.sections.applicantDetails.mobileNumberPlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.applicantDetails.emailAddress")}
              name="email"
              type="email"
              placeholder={t("internshipForm.sections.applicantDetails.emailAddressPlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.applicantDetails.cityOfResidence")}
              name="city"
              placeholder={t("internshipForm.sections.applicantDetails.cityOfResidencePlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.applicantDetails.cnicNumber")}
              name="cnicNumber"
              placeholder={t("internshipForm.sections.applicantDetails.cnicNumberPlaceholder")}
              required
            />
            <FormRadioGroup
              label={t("internshipForm.sections.applicantDetails.gender")}
              name="gender"
              options={[
                t("internshipForm.sections.applicantDetails.genderOptions.male"),
                t("internshipForm.sections.applicantDetails.genderOptions.female"),
                t("internshipForm.sections.applicantDetails.genderOptions.preferNotToSay")
              ]}
              required
            />
          </div>
        </div>

        {/* Section B: Education & Skills */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("internshipForm.sections.educationSkills.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormInput
              label={t("internshipForm.sections.educationSkills.other")}
              name="educationLevelOther"
              placeholder={t("internshipForm.sections.educationSkills.otherPlaceholder")}
            />
            <FormInput
              label={t("internshipForm.sections.educationSkills.areaOfStudy")}
              name="studyField"
              placeholder={t("internshipForm.sections.educationSkills.areaOfStudyPlaceholder")}
              required
            />
            <FormInput
              label={t("internshipForm.sections.educationSkills.currentInstitution")}
              name="institution"
              placeholder={t("internshipForm.sections.educationSkills.currentInstitutionPlaceholder")}
            />
            <FormInput
              label={t("internshipForm.sections.educationSkills.skillsOther")}
              name="skillsOther"
              placeholder={t("internshipForm.sections.educationSkills.skillsOtherPlaceholder")}
            />
            <FormRadioGroup
              label={t("internshipForm.sections.educationSkills.currentEducationLevel")}
              name="educationLevel"
              options={[
                t("internshipForm.sections.educationSkills.educationLevelOptions.matric"),
                t("internshipForm.sections.educationSkills.educationLevelOptions.intermediate"),
                t("internshipForm.sections.educationSkills.educationLevelOptions.graduate"),
                t("internshipForm.sections.educationSkills.educationLevelOptions.other")
              ]}
              required
            />
            <FormCheckboxGroup
              label={t("internshipForm.sections.educationSkills.technicalSkills")}
              name="skills"
              options={[
                t("internshipForm.sections.educationSkills.skillsOptions.msOffice"),
                t("internshipForm.sections.educationSkills.skillsOptions.socialMediaManagement"),
                t("internshipForm.sections.educationSkills.skillsOptions.graphicDesign"),
                t("internshipForm.sections.educationSkills.skillsOptions.webAppDevelopment"),
                t("internshipForm.sections.educationSkills.skillsOptions.researchWriting"),
                t("internshipForm.sections.educationSkills.skillsOptions.other"),
              ]}
            />
          </div>
        </div>

        {/* Section C: Internship Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("internshipForm.sections.internshipPreferences.title")}
          </h2>
          <div className="space-y-6">
            <FormInput
              label={t("internshipForm.sections.internshipPreferences.availableHours")}
              name="hoursPerWeek"
              placeholder={t("internshipForm.sections.internshipPreferences.availableHoursPlaceholder")}
              required
            />
            <FormRadioGroup
              label={t("internshipForm.sections.internshipPreferences.preferredDepartment")}
              name="department"
              options={[
                t("internshipForm.sections.internshipPreferences.departmentOptions.marketing"),
                t("internshipForm.sections.internshipPreferences.departmentOptions.technology"),
                t("internshipForm.sections.internshipPreferences.departmentOptions.operations"),
                t("internshipForm.sections.internshipPreferences.departmentOptions.research"),
                t("internshipForm.sections.internshipPreferences.departmentOptions.customerExperience"),
                t("internshipForm.sections.internshipPreferences.departmentOptions.csr"),
              ]}
            />
            <FormRadioGroup
              label={t("internshipForm.sections.internshipPreferences.preferredMode")}
              name="internshipMode"
              options={[
                t("internshipForm.sections.internshipPreferences.modeOptions.onSite"),
                t("internshipForm.sections.internshipPreferences.modeOptions.remote"),
                t("internshipForm.sections.internshipPreferences.modeOptions.hybrid"),
              ]}
            />
            <FormRadioGroup
              label={t("internshipForm.sections.internshipPreferences.policeVerification")}
              name="policeVerification"
              options={[
                t("internshipForm.sections.internshipPreferences.policeVerificationOptions.yes"),
                t("internshipForm.sections.internshipPreferences.policeVerificationOptions.no")
              ]}
              required
            />
          </div>
        </div>

        {/* Section D: Motivation & Declaration */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("internshipForm.sections.motivationDeclaration.title")}
          </h2>
          <div className="space-y-6">
            <FormInput
              label={t("internshipForm.sections.motivationDeclaration.motivation")}
              name="motivation"
              placeholder={t("internshipForm.sections.motivationDeclaration.motivationPlaceholder")}
              required
            />
            <FormFileInput
              label={t("internshipForm.sections.motivationDeclaration.resume")}
              name="resume"
              accept=".pdf,.doc,.docx"
              required
            />
            <FormCheckboxGroup
              label={t("internshipForm.sections.motivationDeclaration.preferredWorkingHours")}
              name="workingHours"
              options={[
                t("internshipForm.sections.motivationDeclaration.workingHoursOptions.morning"),
                t("internshipForm.sections.motivationDeclaration.workingHoursOptions.afternoon"),
                t("internshipForm.sections.motivationDeclaration.workingHoursOptions.evening"),
                t("internshipForm.sections.motivationDeclaration.workingHoursOptions.flexible")
              ]}
            />
            <FormRadioGroup
              label={t("internshipForm.sections.motivationDeclaration.termsAgreement")}
              name="termsAgreement"
              options={[
                t("internshipForm.sections.motivationDeclaration.termsAgreementOptions.yes")
              ]}
              required
            />
            <FormCheckboxGroup
              label={t("internshipForm.sections.motivationDeclaration.acknowledgment")}
              name="acknowledgment"
              options={[
                t("internshipForm.sections.motivationDeclaration.acknowledgmentOptions.accurateInfo"),
                t("internshipForm.sections.motivationDeclaration.acknowledgmentOptions.unpaidInternship"),
                t("internshipForm.sections.motivationDeclaration.acknowledgmentOptions.privacyPolicy"),
              ]}
            />
          </div>
        </div>

        <div className="py-4 flex justify-end">
          <AnimatedButton
            size="sm"
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            {t("internshipForm.submitButton")}
          </AnimatedButton>
        </div>
      </form>
    </div>
  );
}
