// Temporary official ASCE Studio email. Update here when a custom-domain
// mailbox is introduced, then rebuild the site.
export const contactEmail = "lovishgarg90412@gmail.com";

export const projectEnquirySubject = "Project Enquiry — ASCE Studio";

export const projectEnquiryBody = [
  "Hi ASCE Studio,",
  "",
  "I'd like to discuss a project.",
  "",
  "Project type:",
  "Business/company:",
  "Brief:",
].join("\r\n");

export const projectEnquiryLinkProps = {
  href: `mailto:${contactEmail}?subject=${encodeURIComponent(projectEnquirySubject)}&body=${encodeURIComponent(projectEnquiryBody)}`,
} as const;
