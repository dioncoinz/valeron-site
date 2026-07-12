export type SolutionIconName =
  | "shutdown"
  | "fleet"
  | "workforce"
  | "timesheet"
  | "tools"
  | "custom";

export default function SolutionIcon({
  name,
  className = "h-6 w-6",
}: {
  name: SolutionIconName;
  className?: string;
}) {
  const paths: Record<SolutionIconName, React.ReactNode> = {
    shutdown: <><path d="M4 5h16v14H4z"/><path d="M8 3v4M16 3v4M8 11h3v3H8zM14 11h2M14 15h2"/></>,
    fleet: <><path d="M3 16V9l2-4h11l3 4v7"/><path d="M5 16h14M6 16v2M17 16v2M6 11h10M8 8h6"/></>,
    workforce: <><circle cx="9" cy="8" r="3"/><path d="M3 19c.5-4 2.5-6 6-6s5.5 2 6 6M16 6a3 3 0 0 1 0 6M16 14c2.8.2 4.4 1.9 5 5"/></>,
    timesheet: <><path d="M5 3h14v18H5zM8 7h8M8 11h4M8 15h3"/><circle cx="16" cy="15" r="3"/><path d="M16 13.5V15l1 1"/></>,
    tools: <><path d="m14 6 4-3 3 3-3 4-3-1-7 7-3 1-2-2 1-3 7-7z"/><path d="m13 11 5 5"/></>,
    custom: <><path d="M4 4h7v7H4zM13 13h7v7h-7zM14 4h6v6M4 14h6v6"/><path d="M17 4v6M14 7h6"/></>,
  };

  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>;
}
