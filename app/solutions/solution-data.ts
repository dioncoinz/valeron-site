import type { SolutionData } from "@/components/SolutionPage";

export const solutionMetadata: Record<string, { title: string; description: string }> = {
  "mining-shutdown-management": { title: "Mining Shutdown Management Software", description: "Plan, control and track mining shutdowns with live readiness dashboards, structured approvals, clear ownership and reporting-ready data." },
  "digital-prestart-fleet-management": { title: "Digital Pre-Start & Fleet Management Software | Inspectz", description: "Digitise equipment pre-starts, defect reporting, compliance records, servicing and fleet visibility with Inspectz by Valeron." },
  "contractor-mobilisation": { title: "Contractor Mobilisation and Workforce Request Software | Requestz", description: "Manage workforce requests, vendor nominations, agreed rates, documentation and contractor mobilisation through one structured platform." },
  "mining-timesheet-labour-capture": { title: "Mining Timesheet and Labour Capture Software | Timesheetz", description: "Capture contractor hours against work orders and generate clean, SAP-ready labour data with Timesheetz by Valeron." },
  "tool-equipment-tracking": { title: "Tool and Equipment Tracking Software | Logz", description: "Track tools and equipment across employees, vehicles, locations and projects with digital issue, return, inspection and audit records." },
  "custom-mining-software": { title: "Custom Mining Work Management Software", description: "Custom operational software for mining approvals, maintenance, compliance, workforce management, reporting and complex site workflows." },
};

export const solutions: Record<string, SolutionData> = {
  "mining-shutdown-management": {
    slug: "mining-shutdown-management", product: "VALERON SHUTDOWN SUITE", icon: "shutdown", variant: 1,
    h1: "Control every stage of your shutdown from one connected platform.",
    introduction: "Valeron’s Shutdown Suite provides maintenance and project teams with a single source of truth for planning, controlling and reporting shutdown activity. Replace disconnected spreadsheets, email chains and manually updated trackers with structured workflows that provide real-time visibility across the entire shutdown.",
    secondary: { label: "Explore the Shutdown Suite", href: "/shutdown-suite" },
    problemTitle: "Shutdown information shouldn’t be scattered across multiple systems.",
    problem: "Major shutdowns involve hundreds of work orders, competing priorities, multiple departments, vendors and critical deadlines. When information is maintained across separate spreadsheets and emails, teams lose visibility of readiness, ownership and emerging risk. Reporting becomes time-consuming, and decisions may be made using outdated information.",
    sections: [
      { title: "Built around the complete shutdown lifecycle", intro: "Use one focused module or implement a connected suite. Each workflow can support the way your team plans, governs, executes and reviews shutdown work.", items: ["Shutdown initiation and milestone tracking", "Scope submission and review", "Planning readiness", "Work-order status monitoring", "Break-in work requests and approvals", "Contractor and workforce requirements", "Materials and documentation readiness", "Execution progress", "Timesheets and labour capture", "Leadership dashboards", "Post-shutdown reporting", "Action and improvement tracking"] },
      { title: "Control break-in work without losing the audit trail", intro: "Late work can be submitted through a controlled approval workflow that captures scope, priority, resources, risk and the reason for inclusion.", items: ["Structured scope submission", "Priority and risk capture", "Resource requirements", "Role-based approval decisions", "Comments and timestamps", "Complete decision history"], note: "Every decision has a clear owner, supporting comments and timestamps, creating a complete audit trail throughout the shutdown." },
      { title: "See what needs attention before it affects execution.", intro: "Readiness views bring key planning and delivery information together so leaders and workgroups can focus on exceptions.", items: ["Overall shutdown readiness", "Progress by department or workgroup", "Overdue and at-risk activities", "Work orders completed against target", "Materials and documentation status", "Planning hours remaining", "Outstanding decisions and approvals", "Key shutdown milestones"] },
      { title: "Configured for your operation", intro: "The Shutdown Suite is shaped around your governance, language and reporting model—not a generic project template.", items: ["Shutdown process", "Planning phases", "Workgroups", "Approval authorities", "Site terminology", "Readiness measures", "Reporting requirements", "Existing systems and data"] },
    ], finalHeading: "Bring control and visibility to your next shutdown.", finalButton: "Book a shutdown demo", related: ["mining-timesheet-labour-capture", "contractor-mobilisation", "custom-mining-software"]
  },
  "digital-prestart-fleet-management": {
    slug: "digital-prestart-fleet-management", product: "INSPECTZ BY VALERON", icon: "fleet", variant: 2,
    h1: "One platform for pre-starts, defects, compliance and fleet visibility.",
    introduction: "Inspectz is a digital pre-start and fleet management platform designed for businesses operating vehicles, mobile plant and other critical assets. Operators can complete inspections from a phone or tablet, maintenance teams can respond to defects, and management can monitor fleet condition and utilisation from one connected system.",
    secondary: { label: "Discuss your fleet", href: "/contact" },
    problemTitle: "Move beyond paper forms and disconnected records.",
    problem: "Paper pre-start books may identify a problem, but they do not provide maintenance and management teams with immediate visibility. Forms must be collected, reviewed and stored. Defects may be communicated separately, making it difficult to confirm what was reported, who responded and whether the equipment is safe to operate.",
    sections: [
      { title: "Digital pre-starts built around each asset", items: ["Asset-specific inspection checklists", "Pass, fail and not-applicable responses", "Meter and engine-hour readings", "Comments and photographs", "Critical defect identification", "Operator declarations", "Electronic submission records", "Automatic defect notifications"] },
      { title: "Turn reported defects into controlled actions.", intro: "Maintenance teams can assess, assign and close work with evidence. Critical issues can prevent an asset from being displayed as available for operation.", items: ["Review new defects", "Assess severity", "Assign responsibility", "Update repair progress", "Record corrective actions", "Attach evidence", "Close and verify work", "Maintain a complete defect history"] },
      { title: "Monitor fleet condition from one management dashboard", items: ["Fleet availability", "Open and overdue defects", "Pre-start completion", "Critical safety issues", "Upcoming services", "Expiring documentation", "Equipment hours", "Asset utilisation", "Defect trends"] },
      { title: "A complete record for every asset", items: ["Identification and registration", "Pre-start history", "Open and closed defects", "Service history", "Compliance documentation", "Manuals and procedures", "Photographs", "Meter readings", "Expiry dates", "Current operational status", "QR-code access"] },
      { title: "Built for your fleet—not a generic checklist.", intro: "Inspectz can support different asset types, multiple sites and distinct user roles, from a small operational fleet through to hundreds of assets.", items: ["Asset-specific forms", "Multiple sites", "Role-based access", "Fleet-specific terminology", "Configurable notifications", "Scalable asset registers"] },
    ], finalHeading: "Gain better control of your fleet.", finalButton: "Book an Inspectz demo", related: ["tool-equipment-tracking", "custom-mining-software", "mining-shutdown-management"]
  },
  "contractor-mobilisation": {
    slug: "contractor-mobilisation", product: "REQUESTZ BY VALERON", icon: "workforce", variant: 3,
    h1: "Coordinate workforce requests, vendor nominations and mobilisation in one place.",
    introduction: "Requestz connects client teams and labour vendors through a structured workforce request and mobilisation process. Clients can publish requirements, vendors can nominate suitable personnel, and coordinators can monitor fulfilment, cost and documentation without relying on spreadsheets and email chains.",
    secondary: { label: "Discuss mobilisation", href: "/contact" },
    problemTitle: "Mobilising a large workforce requires more than an email trail.",
    problem: "Coordinating hundreds of workers across multiple vendors means managing changing requirements, replacement candidates, expiring documents and labour costs. Separate spreadsheets and long email chains make it difficult to see whether each role is filled and ready to mobilise.",
    sections: [
      { title: "Publish clear workforce requirements", items: ["Site and project details", "Start and finish dates", "Nomination deadlines", "Documentation deadlines", "Mobilisation dates", "Required positions", "Shift arrangements", "Required qualifications", "Number of personnel", "Site-specific instructions", "Release to selected vendors"] },
      { title: "Give vendors a structured nomination process", items: ["Employee details", "Proposed position", "Shift allocation", "Qualifications and experience", "Availability", "Agreed labour rate", "Required documentation", "Supporting comments"] },
      { title: "See mobilisation readiness, cost and risk", items: ["Positions requested", "Positions filled", "Remaining vacancies", "Nominations awaiting review", "Fulfilment by vendor", "Labour cost forecasts", "Documentation status", "Mobilisation readiness", "Upcoming deadlines", "At-risk positions"] },
      { title: "Keep workforce documentation connected", intro: "Store the evidence required to assess whether nominated personnel meet the role and site requirements.", items: ["Licences", "Trade certificates", "Medicals", "Training records", "Site access requirements", "Identification", "Role-specific competencies", "Client-mandated evidence", "Expiry dates", "Review and approval status"] },
      { title: "Clear access for every participant", items: ["Client administrator", "Client coordinator", "Vendor administrator", "Vendor representative", "Valeron support administrator"] },
    ], finalHeading: "Mobilise with fewer spreadsheets and fewer surprises.", finalButton: "Book a Requestz demo", related: ["mining-timesheet-labour-capture", "mining-shutdown-management", "custom-mining-software"]
  },
  "mining-timesheet-labour-capture": {
    slug: "mining-timesheet-labour-capture", product: "TIMESHEETZ BY VALERON", icon: "timesheet", variant: 1,
    h1: "Capture labour hours accurately at the source.",
    introduction: "Timesheetz gives supervisors and contractors a simple way to record daily labour against the correct work orders, operations and service details. Structured entry rules improve data quality before information reaches administration, reporting or enterprise systems such as SAP.",
    secondary: { label: "Discuss labour capture", href: "/contact" },
    problemTitle: "Stop repairing timesheet data after submission.",
    problem: "Inconsistent vendor spreadsheets, missing work orders, incorrect operation numbers and incomplete employee information create avoidable rework and upload delays. Timesheetz validates structured information closer to where the work is recorded.",
    sections: [
      { title: "Simple, structured daily labour entry", intro: "Employee and commercial information can be populated from controlled master data to reduce repeated entry and improve consistency.", items: ["Date", "Vendor or company", "Work order", "Operation", "Employee", "Service details", "Hours worked"] },
      { title: "Align entries with controlled operational data", items: ["Employee name and identification", "Vendor company", "Work order", "Operation", "Work centre", "Purchase order and line item", "Service master data", "Date and shift"] },
      { title: "Track labour submissions and approvals", items: ["Total hours by day", "Hours by vendor", "Hours by work order", "Hours by department", "Planned versus actual labour", "Missing submissions", "Approval status", "Labour cost", "Submission and amendment history"] },
      { title: "Generate clean exports for existing systems.", intro: "Approved entries can be exported into predefined formats for administration, reporting or SAP upload. Outputs are SAP-ready and formatted for upload; they do not depend on a direct SAP integration.", items: ["Reduced manual entry", "Fewer formatting errors", "Less missing information", "Fewer rejected uploads", "Faster processing", "Easier consolidation"] },
    ], finalHeading: "Improve labour data before it reaches payroll or SAP.", finalButton: "Book a Timesheetz demo", related: ["contractor-mobilisation", "mining-shutdown-management", "custom-mining-software"]
  },
  "tool-equipment-tracking": {
    slug: "tool-equipment-tracking", product: "LOGZ BY VALERON", icon: "tools", variant: 2,
    h1: "Know where your tools are, who has them and what condition they’re in.",
    introduction: "Logz provides a central system for tracking tools and portable equipment across employees, vehicles, work areas and projects. Replace handwritten registers and disconnected spreadsheets with a searchable record of every issue, transfer, inspection and return.",
    secondary: { label: "Discuss asset tracking", href: "/contact" },
    problemTitle: "Tool registers only work when they remain current.",
    problem: "Tools move between people, vehicles, crews and locations. Without a current movement history, ownership becomes unclear, stocktakes take longer and teams can face avoidable replacement costs and delays.",
    sections: [
      { title: "A searchable profile for every tool and asset", items: ["Asset identification", "Serial number", "Category and description", "Photograph", "Current holder", "Current location", "Condition", "Inspection requirements", "Purchase information", "Supporting documents", "Movement history", "QR-code or barcode access"] },
      { title: "Record every movement and change of condition", items: ["Issue to an employee", "Allocate to a vehicle or work area", "Transfer between users", "Allocate temporarily to a project", "Return to store", "Assess condition", "Record inspection or testing", "Repair or quarantine", "Report lost or damaged equipment", "Dispose of or replace an item"] },
      { title: "Maintain visibility across tools and portable equipment", items: ["Total registered assets", "Items currently issued", "Overdue returns", "Missing or damaged tools", "Current locations", "Inspection compliance", "History by employee", "Replacement trends", "Utilisation by category"] },
      { title: "Keep inspection and compliance requirements visible", items: ["Upcoming inspections", "Overdue testing", "Items unavailable for use", "Damaged or quarantined equipment", "Missing documentation", "Non-compliant assets", "Automated notifications"] },
    ], finalHeading: "Take control of your tools and portable equipment.", finalButton: "Book a Logz demo", related: ["digital-prestart-fleet-management", "custom-mining-software", "mining-shutdown-management"]
  },
  "custom-mining-software": {
    slug: "custom-mining-software", product: "VALERON CUSTOM BUILDS", icon: "custom", variant: 3,
    h1: "Custom software built around how your operation actually works.",
    introduction: "Valeron designs and builds practical work management applications for mining, maintenance and project teams. We take processes currently managed through spreadsheets, emails and manual trackers and turn them into structured, user-friendly systems with clear ownership and reliable data.",
    secondary: { label: "View practical examples", href: "/examples" },
    problemTitle: "Your operation shouldn’t have to fit around unsuitable software.",
    problem: "Broad off-the-shelf systems rarely match each site’s terminology, approvals or reporting requirements. Teams compensate with additional spreadsheets, duplicate entry and disconnected processes that weaken visibility and data integrity.",
    sections: [
      { title: "Operational workflows we can structure", items: ["Approvals and governance", "Maintenance planning", "Work requests", "Shutdown management", "Workforce mobilisation", "Contractor management", "Timesheets and labour capture", "Equipment inspections", "Compliance and qualification tracking", "Tool and asset management", "Project readiness", "Evidence collection", "Operational dashboards", "Automated reporting", "Structured data exports"] },
      { title: "Designed for practical adoption", items: ["Simple to understand", "Fast to use", "Clear responsibilities", "Configured to site terminology", "Structured data entry", "Desktop, tablet and mobile access", "Trusted operational reporting"] },
      { title: "Clear visibility for the people running the work", intro: "Role-based dashboards and reliable histories give teams the information needed to manage exceptions, ownership and decisions.", items: ["Role-based dashboards", "Approval status", "Outstanding actions", "Document readiness", "Audit histories", "Reporting packs", "Structured exports", "Operational exceptions"] },
      { title: "Complement your existing enterprise systems", intro: "Valeron applications can improve the workflows and data surrounding existing enterprise systems, without claiming to replace them.", items: ["Structured Excel exports", "Reporting packs", "Data import tools", "Email notifications", "Document generation", "API integrations where approved and available", "Role-based dashboards", "Audit histories", "Client-specific branding"] },
      { title: "A structured path from workflow to rollout", intro: "Delivery keeps operational users involved from the first workflow map through to ongoing improvement.", items: ["1. Discovery — map workflows, users, decisions, data and reporting", "2. Prototype — create a visual or working demonstration", "3. Build — develop around agreed requirements", "4. Pilot — test with real users and refine", "5. Rollout — deploy with onboarding, support and improvement"] },
    ], finalHeading: "Tell us the workflow that is holding your team back.", finalButton: "Discuss your workflow", related: ["mining-shutdown-management", "contractor-mobilisation", "digital-prestart-fleet-management"]
  },
};
