declare global {
  interface Window {
    gtag?: (command: "event", name: string, parameters: Record<string, string>) => void;
  }
}

export function trackEnquiry(interest?: string) {
  // Analytics must never interrupt a successful submission or include form contents.
  try {
    window.gtag?.("event", "generate_lead", {
      form_name: window.location.pathname === "/book-demo" ? "demo_request" : "contact_enquiry",
      ...(interest ? { solution_interest: interest } : {}),
    });
  } catch {
    // The enquiry is still successful if tracking is unavailable.
  }
}
