import type { SolutionData } from "@/components/SolutionPage";

export const workforceMetadata = {
  title: "Mining Workforce Management Software | Shunter",
  description: "Coordinate mining workforce records, availability, qualifications, mobilisation and assignments with Shunter, Valeron’s operational management platform.",
};

export const miningWorkforce: SolutionData = {
  slug: "mining-workforce-management", product: "SHUNTER / BY VALERON", icon: "workforce", variant: 1,
  h1: "Mining workforce management software",
  introduction: "Coordinate the people behind mining, maintenance and project work. Shunter brings workforce records, availability, qualifications, mobilisation requirements and assignments into an operational workflow your team can follow.",
  problemTitle: "A confirmed person still needs to be ready for the work.",
  problem: "A labour request sets the requirement. Availability, evidence and mobilisation checks determine the next steps. Keep those decisions visible as people move from consideration to authorised assignments.",
  sections: [
    { title: "Define the workforce requirement", intro: "Record the role, number of people, dates, location, shift and required qualifications against the client request. Give a maintenance contractor or labour-hire coordinator a clear requirement to work from.", items: ["Keep request details and chronological activity together.", "Set the qualification requirements and mobilisation checklist for the work."] },
    { title: "Find suitable people", intro: "Search workforce records by role, location, availability and compliance status. Review candidate matches against the request, including qualifications and overlapping assignments.", items: ["Keep employee, casual and contractor personnel in the shared people record.", "Review the reasons behind a match before authorising an assignment."] },
    { title: "Coordinate responses and authorisation", intro: "Record outreach activity, share candidate response links and review confirmations or declines. Authorising selected people creates the assignment and mobilisation records.", note: "Response links are shared manually. Recording outreach or a follow-up does not send an email or SMS." },
    { title: "Check mobilisation readiness", intro: "Work through the required checklist, review linked evidence and see what remains pending, missing, expired or in need of action. Keep readiness tied to the individual assignment.", note: "Qualifications and licences are recorded evidence for review. Shunter does not independently verify a licence or deliver training and competency assessments." },
    { title: "See workforce assignments", intro: "Review assignments across a date range, with filters for people, role, client, project, site, employment type and status. Recorded availability and overlapping assignments help coordinators identify issues to resolve.", note: "This is assignment scheduling and visibility. It does not generate optimised rosters or manage fatigue rules." },
    { title: "Connect people with operational resources", intro: "For crane and equipment work, Shunter also supports asset and person assignments against operational bookings, with availability and conflict checks.", note: "Asset bookings and workforce assignments are distinct workflows. Their relationship is agreed during implementation; automatic synchronisation between all schedules is not assumed." },
    { title: "Review workforce information", intro: "See open requests, available people and readiness states. Export workforce compliance information covering personnel availability, evidence coverage and expiring items for operational review.", note: "Recorded readiness supports a coordinator’s decision. It is not a guarantee of site compliance." },
  ],
  finalHeading: "Walk through your next workforce requirement.", finalButton: "Book a Shunter workforce demo",
  related: ["mining-shutdown-management", "contractor-mobilisation", "mining-timesheet-labour-capture"],
};

export const workforceFaqs = [
  { question: "Can Shunter manage employees, casuals and contractors?", answer: "Yes. Shared person records and workforce profiles support those employment contexts, with roles, qualifications, availability and assignments. This is operational personnel coordination, not a complete recruitment or HR suite." },
  { question: "How are availability and overlapping assignments checked?", answer: "Coordinators record availability periods and review candidate matching and assignment conflicts for the requested dates. The workforce schedule provides a filtered view of assignments and their status." },
  { question: "How are qualifications and licences managed?", answer: "Record qualifications, associated competencies, evidence and expiry information, then review their status against the work requirement. External licence verification and training delivery are outside this workflow." },
  { question: "What determines mobilisation readiness?", answer: "The configured checklist, required evidence and recorded item statuses determine the next mobilisation steps. Your team agrees the requirements and remains responsible for reviewing whether a person is ready for the site and work." },
  { question: "Is this an automated workforce rostering system?", answer: "The current workforce calendar shows dated assignments and status. It does not provide automatic roster optimisation, fatigue management, payroll, award interpretation or reusable crew allocation." },
  { question: "Does Shunter send candidate emails or SMS messages?", answer: "No. The current workflow records outreach and follow-ups and generates response links for manual sharing. Recording an outreach action is not confirmation that a message was delivered." },
  { question: "How does this differ from Requestz and Timesheetz?", answer: "Shunter coordinates operational personnel, availability, readiness and assignments. Requestz is a separate product focused on workforce requests, vendor nominations and mobilisation coordination. Timesheetz focuses on labour capture. Separate product workflows and any required connections are discussed during scoping." },
] as const;
