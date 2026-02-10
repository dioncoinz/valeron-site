export default function ExampleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <p className="mt-4 text-sm font-medium text-gray-900">
        Demo available on request →
      </p>
    </div>
  );
}
