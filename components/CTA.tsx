export default function CTA() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-10 md:p-12">
      <h2 className="text-3xl font-bold">
        Tell us your workflow — we’ll build the solution.
      </h2>
      <p className="mt-4 max-w-2xl text-gray-600">
        Book a call and we’ll walk through your process, identify friction points,
        and propose a tailored build and rollout plan.
      </p>
      <a
        href="/contact"
        className="inline-block mt-8 rounded-xl bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-800 transition"
      >
        Book a call
      </a>
    </div>
  );
}
