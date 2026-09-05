import Link from "next/link";
import ArrowUpRight from "@/components/ArrowUpRight";

export default function ButtonLink({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <Link href={href} className={secondary ? "button-secondary" : "button-primary"}>
      {children}<ArrowUpRight />
    </Link>
  );
}
