import { z } from "zod";

/**
 * Enquiry schemas shared by the forms (client-side validation) and the
 * /api/enquiry route (server-side validation). Add a field here and it is
 * validated in both places.
 */

const name = z.string().trim().min(2, "Please enter your name.").max(120);
const email = z.email("Please enter a valid email address.").max(200);
const message = z.string().trim().min(20, "Please tell us a little more (20 characters minimum).").max(4000);
const optionalPhone = z.string().trim().max(40).optional().or(z.literal(""));

export const studioEnquirySchema = z.object({
  kind: z.literal("studio"),
  name,
  email,
  phone: optionalPhone,
  serviceType: z.string().min(1, "Choose a service."),
  budget: z.string().min(1, "Choose a budget range."),
  timeline: z.string().min(1, "Choose a timeline."),
  message,
});

export const privateOfficeEnquirySchema = z.object({
  kind: z.literal("private-office"),
  name,
  contactMethod: z.string().min(1, "Choose how you would like to be contacted."),
  contactDetail: z.string().trim().min(5, "Add the number or address we should use.").max(200),
  areaOfInterest: z.string().min(1, "Choose an area of interest."),
  brief: message,
});

export const contactEnquirySchema = z.object({
  kind: z.literal("contact"),
  name,
  email,
  division: z.string().min(1, "Choose who you would like to reach."),
  message,
});

export const enquirySchema = z.discriminatedUnion("kind", [
  studioEnquirySchema,
  privateOfficeEnquirySchema,
  contactEnquirySchema,
]);

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryKind = Enquiry["kind"];

/** Flatten zod issues into { fieldName: message } for inline form errors. */
export function issuesToErrors(issues: z.core.$ZodIssue[]) {
  const errors: Record<string, string> = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
