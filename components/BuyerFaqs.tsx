export default function BuyerFaqs({ title, items }: { title: string; items: readonly { question: string; answer: string }[] }) {
  return <><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{title}</h2><div className="mt-8 divide-y divide-black/15 border-y border-black/15">{items.map(({ question, answer }) => <details key={question} className="py-5"><summary className="cursor-pointer text-lg font-semibold leading-7">{question}</summary><p className="mt-4 max-w-4xl leading-7 text-[#66635b]">{answer}</p></details>)}</div></>;
}
