export const navigation = [
  { label: "Shunter", href: "/shunter", featured: true },
  { label: "Solutions", href: "/solutions", featured: false },
  { label: "Industries", href: "/industries", featured: false },
  { label: "About", href: "/about", featured: false },
] as const;

export type ShunterModule = {
  eyebrow: string;
  title: string;
  description: string;
  capabilities: readonly string[];
};

export const shunterModules: readonly ShunterModule[] = [
  {
    eyebrow: "01 / ASSETS",
    title: "Know the condition, history and next action for every asset.",
    description: "Bring the asset register, maintenance activity and field checks into one operational record.",
    capabilities: ["Asset register", "Maintenance", "Inspections", "Prestarts", "Defects", "Asset history"],
  },
  {
    eyebrow: "02 / WORKFORCE",
    title: "Keep people, capability and mobilisation visible.",
    description: "Coordinate workforce information without losing qualifications, competencies or compliance in separate trackers.",
    capabilities: ["People", "Mobilisation", "Qualifications", "Competencies", "Compliance", "Workforce visibility"],
  },
  {
    eyebrow: "03 / OPERATIONS",
    title: "Coordinate work from planning through field execution.",
    description: "Give planners, supervisors and operational teams a shared view of schedules, allocation and workflow status.",
    capabilities: ["Scheduling", "Allocation", "Work coordination", "Configurable workflows", "Multi-site visibility"],
  },
  {
    eyebrow: "04 / INFORMATION",
    title: "Put the right operational information where work happens.",
    description: "Connect controlled documents, inventory and instructions to the assets, people and workflows that use them.",
    capabilities: ["Procedures", "SWIs", "Controlled documents", "Parts", "Stock visibility", "Inventory workflows"],
  },
  {
    eyebrow: "05 / INTELLIGENCE",
    title: "Turn operational activity into structured, usable data.",
    description: "See exceptions, trace decisions and report from information captured at the source.",
    capabilities: ["Dashboards", "Reporting", "Audit history", "Structured data", "Operational exceptions"],
  },
] as const;

export type ScreenshotConfig = {
  id: string;
  label: string;
  description: string;
  filename: string;
  kind: "desktop" | "mobile";
  aspectRatio?: string;
  image?: string;
};

export const shunterScreenshots: readonly ScreenshotConfig[] = [
  { id: "overview", label: "Shunter platform overview", description: "Connected operational dashboard and priority view", filename: "dashboard.webp", kind: "desktop", aspectRatio: "1885 / 904", image: "/images/shunter/dashboard.webp" },
  { id: "assets", label: "Asset management", description: "Asset register, status, history and related activity", filename: "assets.webp", kind: "desktop", aspectRatio: "1911 / 903", image: "/images/shunter/assets.webp" },
  { id: "workforce", label: "Workforce", description: "People, mobilisation and compliance visibility", filename: "workforce.webp", kind: "desktop", aspectRatio: "1893 / 895", image: "/images/shunter/workforce.webp" },
  { id: "scheduling", label: "Scheduling", description: "Operational schedule, allocation and coordination", filename: "scheduling.webp", kind: "desktop", aspectRatio: "1894 / 909", image: "/images/shunter/scheduling.webp" },
  { id: "inspections", label: "Inspections", description: "Inspection workflow and resulting actions", filename: "inspections.webp", kind: "desktop", aspectRatio: "1896 / 904", image: "/images/shunter/inspections.webp" },
  { id: "maintenance", label: "Maintenance", description: "Maintenance activity and asset history", filename: "maintenance.webp", kind: "desktop", aspectRatio: "1912 / 909", image: "/images/shunter/maintenance.webp" },
  { id: "documents", label: "Documents", description: "Controlled procedures and operational documents", filename: "documents.webp", kind: "desktop", aspectRatio: "1908 / 910", image: "/images/shunter/documents.webp" },
  { id: "inventory", label: "Inventory", description: "Parts, stock visibility and movements", filename: "inventory.webp", kind: "desktop", aspectRatio: "1894 / 900", image: "/images/shunter/inventory.webp" },
  { id: "mobile", label: "Operator experience", description: "Equipment access, documentation and pre-starts in the field", filename: "mobile-operator-v2.webp", kind: "mobile", aspectRatio: "568 / 901", image: "/images/shunter/mobile-operator-v2.webp" },
] as const;

export const focusedSolutions = [
  { name: "Shutdown Suite", category: "Shutdown management", description: "Structured tools for readiness, approvals, execution visibility, labour capture and reporting.", href: "/shutdown-suite" },
  { name: "Inspectz", category: "Prestarts and fleet", description: "Digital prestarts, defect actions, compliance records and fleet visibility.", href: "/solutions/digital-prestart-fleet-management" },
  { name: "Requestz", category: "Workforce mobilisation", description: "Workforce requests, vendor nominations, documentation and mobilisation readiness.", href: "/solutions/contractor-mobilisation" },
  { name: "Timesheetz", category: "Labour capture", description: "Structured daily labour capture with clean, enterprise-ready data outputs.", href: "/solutions/mining-timesheet-labour-capture" },
  { name: "Logz", category: "Tools and equipment", description: "Ownership, location, condition, inspection and movement history for operational equipment.", href: "/solutions/tool-equipment-tracking" },
] as const;

export const industries = [
  { name: "Mining", description: "Software for asset-intensive sites, mobile workforces, maintenance programs and shutdowns." },
  { name: "Heavy industry", description: "Connected operational information for complex facilities, equipment and compliance obligations." },
  { name: "Field services", description: "Coordinate people, work, documents and assets across distributed teams and locations." },
  { name: "Equipment and crane operations", description: "Manage prestarts, defects, servicing, competency and asset history around critical equipment." },
  { name: "Maintenance contractors", description: "Bring workforce readiness, execution data, labour capture and client reporting into a controlled workflow." },
  { name: "Infrastructure", description: "Support repeatable operational work across assets, projects, teams and delivery partners." },
] as const;

export const enterpriseCapabilities = [
  ["Role-based access", "Structure access around operational responsibilities and organisational boundaries."],
  ["Multi-site ready", "Support consistent workflows while maintaining the context of sites and operating groups."],
  ["Audit history", "Retain a traceable record of actions, decisions and changes where the workflow requires it."],
  ["Designed for integration", "Use REST APIs and structured data approaches to work alongside approved enterprise systems."],
  ["Identity capability", "Support enterprise authentication direction, including Microsoft Entra and MFA requirements."],
  ["Australian support", "Work directly with an Australian software company that understands operational delivery."],
] as const;
