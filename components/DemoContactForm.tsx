"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { resolveDemoInterest } from "@/lib/demo-interest";

export default function DemoContactForm() {
  const searchParams = useSearchParams();
  const interest = resolveDemoInterest(searchParams.get("interest"));

  return <>
    {interest && <div className="mt-6 rounded-xl border border-[#dd622d]/25 bg-[#dd622d]/5 p-5">
      <p className="eyebrow text-[#b94d21]">YOUR DEMO</p>
      <p className="mt-2 font-semibold">{interest.label}</p>
      <p className="mt-2 text-sm leading-6 text-[#66635b]">{interest.description}</p>
    </div>}
    <ContactForm key={interest?.key ?? "general"} submitLabel="Request a demo" interest={interest?.key} />
  </>;
}
