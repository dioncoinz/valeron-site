export const shutdownDemo = {
  key: "mining-shutdown-management",
  label: "Mining shutdown management with Shunter",
  sourcePath: "/solutions/mining-shutdown-management",
  href: "/book-demo?interest=mining-shutdown-management",
} as const;

// Only known solution interests become enquiry context; never echo arbitrary query text.
export function resolveDemoInterest(value: unknown) {
  return value === shutdownDemo.key ? shutdownDemo : undefined;
}
