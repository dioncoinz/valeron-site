"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  return (
    <form className="mt-10 grid gap-6" onSubmit={onSubmit}>
      {/* Honeypot (bots fill this) */}
      <div className="hidden">
        <label>Website</label>
        <input name="website" type="text" autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-gray-900">Name</label>
          <input
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-900">Company</label>
          <input
            name="company"
            type="text"
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
            placeholder="Company / Site"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-900">Email</label>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-900">Phone (optional)</label>
          <input
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
            placeholder="0400 000 000"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">
          What are you trying to improve?
        </label>
        <textarea
          name="message"
          required
          rows={7}
          className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-400"
          placeholder="Example: We want controlled break-in approvals during a shutdown and a clean readiness dashboard for weekly reporting…"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-700">Thanks — we’ve received your enquiry.</p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-700">{error}</p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Prefer email? Send to{" "}
        <a className="font-medium text-gray-900 hover:underline" href="mailto:solutions@valeron.com.au">
          solutions@valeron.com.au
        </a>
      </p>
    </form>
  );
}
