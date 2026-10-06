export const shutdownDemo = {
  key: "mining-shutdown-management",
  label: "Mining shutdown management with Shunter",
  sourcePath: "/solutions/mining-shutdown-management",
  href: "/book-demo?interest=mining-shutdown-management",
  description: "We’ll focus on scope, readiness and work coordination. Your shutdown interest will be included with your enquiry.",
  placeholder: "For example, scope approvals, workforce readiness or execution reporting.",
} as const;

export const workforceDemo = {
  key: "mining-workforce-management",
  label: "Mining workforce management with Shunter",
  sourcePath: "/solutions/mining-workforce-management",
  href: "/book-demo?interest=mining-workforce-management",
  description: "We’ll focus on people, availability, qualifications and mobilisation. Your workforce interest will be included with your enquiry.",
  placeholder: "How do you currently coordinate people, qualifications and mobilisation?",
} as const;

export const metriczDemo = {
  key: "sap-maintenance-analytics",
  label: "SAP maintenance analytics with Metricz",
  sourcePath: "/metricz",
  href: "/book-demo?interest=sap-maintenance-analytics",
  description: "We’ll walk through upload, material analysis and evidence review. Your Metricz interest will be included with your enquiry.",
  placeholder: "What maintenance question are you investigating, and which Excel or CSV exports are available? Please do not include confidential data.",
} as const;

export const demoInterests = [shutdownDemo, workforceDemo, metriczDemo] as const;

// Only known solution interests become enquiry context; never echo arbitrary query text.
export function resolveDemoInterest(value: unknown) {
  return demoInterests.find((interest) => interest.key === value);
}
