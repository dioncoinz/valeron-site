"use client";
import { useState } from "react";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function ContactForm({ submitLabel = "Send enquiry" }: { submitLabel?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setError("");
    const form = event.currentTarget; const formData = new FormData(form);
    const payload = Object.fromEntries(["name", "company", "email", "phone", "message", "website"].map((key) => [key, String(formData.get(key) || "")]));
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); const data = await response.json(); if (!response.ok || !data.ok) { setStatus("error"); setError(data?.error || "Something went wrong. Please try again."); return; } setStatus("sent"); form.reset(); }
    catch { setStatus("error"); setError("Network error. Please try again."); }
  }
  const inputClass = "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#dd622d]";
  return <form className="mt-8 grid gap-6" onSubmit={onSubmit}>
    <div className="hidden"><label htmlFor="website">Website</label><input id="website" name="website" type="text" autoComplete="off" tabIndex={-1} /></div>
    <div className="grid gap-6 md:grid-cols-2">
      <div><label htmlFor="name" className="text-sm font-medium">Name</label><input id="name" name="name" required className={inputClass} autoComplete="name" /></div>
      <div><label htmlFor="company" className="text-sm font-medium">Company</label><input id="company" name="company" className={inputClass} autoComplete="organization" /></div>
      <div><label htmlFor="email" className="text-sm font-medium">Work email</label><input id="email" name="email" type="email" required className={inputClass} autoComplete="email" /></div>
      <div><label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-[#747168]">(optional)</span></label><input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" /></div>
    </div>
    <div><label htmlFor="message" className="text-sm font-medium">What are you trying to improve?</label><textarea id="message" name="message" required rows={6} className={inputClass} placeholder="Describe the operation, workflow or visibility gap." /></div>
    <div className="flex flex-wrap items-center gap-4"><button type="submit" disabled={status === "sending"} className="button-primary disabled:cursor-wait disabled:opacity-60">{status === "sending" ? "Sending…" : submitLabel}<ArrowUpRight /></button><div aria-live="polite">{status === "sent" && <p className="text-sm text-green-700">Thanks—we’ve received your enquiry.</p>}{status === "error" && <p className="text-sm text-red-700">{error}</p>}</div></div>
  </form>;
}
