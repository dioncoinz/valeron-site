import type { SolutionData } from "@/components/SolutionPage";

export const miningShutdown: SolutionData = {
  slug: "mining-shutdown-management",
  product: "SHUNTER BY VALERON / MINING SHUTDOWNS",
  icon: "shutdown",
  variant: 1,
  h1: "Mining shutdown management software",
  introduction: "Shunter is Valeron’s operational software platform. It supports mining maintenance shutdown planning, coordination, governance and execution by connecting maintenance work, people, schedules and reporting.",
  problemTitle: "Keep the shutdown plan connected to the work.",
  problem: "A work order can be in scope while labour, parts or an approval are still outstanding. Planners and supervisors need to see those gaps before they become execution problems. Shunter brings the operational information together so maintenance teams can review readiness, coordinate work and make decisions with a shared view of status.",
  sections: [
    {
      title: "Planning and readiness",
      intro: "Build a view of the work scope and what it needs before execution. Bring work-order status, materials information and workforce requirements into the readiness discussion, using the planning phases and measures agreed for your operation.",
      items: ["Review scope, work orders and planning milestones", "Identify outstanding materials, documentation and labour requirements", "See readiness by workgroup and focus on exceptions"],
    },
    {
      title: "Scope changes and break-in approvals",
      intro: "Make late work a visible decision. A configured break-in workflow captures the proposed scope, reason, priority, risk and resource requirements for review by the appropriate approval roles. Comments and decision history keep the reasoning with the request.",
      items: ["Submit the scope and reason for inclusion", "Review the request against site approval authorities", "Keep the decision, owner and supporting comments visible"],
    },
    {
      title: "Workforce and contractor coordination",
      intro: "Give coordinators a shared view of people, mobilisation, qualifications and compliance alongside operational allocation. Review workforce requirements with supervisors so they can identify gaps and coordinate workgroups before committing work.",
      items: ["Review workforce readiness and mobilisation status", "Coordinate people and allocations across operational work", "Keep responsibilities clear between planners, supervisors and contractors"],
      note: "Contractor roles, access and approval responsibilities are agreed during configuration.",
    },
    {
      title: "Scheduling and execution coordination",
      intro: "Shunter provides operational schedules, allocation and workflow status for planners and supervisors. Its asset scheduler shows bookings and unallocated work, helping teams coordinate the resources behind execution.",
      items: ["View operational bookings and allocations", "Review work awaiting allocation", "Coordinate planned maintenance with operational activity"],
      note: "Use Shunter alongside your specialist shutdown scheduling process. Primavera P6 replacement, critical-path calculations and automatic resource levelling are outside the scheduling capability described here. Any exchange with an existing scheduling system must be scoped and confirmed with Valeron.",
    },
    {
      title: "Progress, exceptions and operational decisions",
      intro: "Follow work-order progress, outstanding approvals and readiness exceptions by workgroup. Bring overdue activities, missing information and materials status into the same operational discussion so leaders can identify the next action and responsible team.",
      items: ["Review work completed against the agreed target", "Identify overdue work and outstanding decisions", "Use current status to focus workgroup follow-up"],
      note: "The status definitions, exception views and reporting responsibilities are configured for your shutdown process.",
    },
    {
      title: "Shutdown reporting and post-shutdown review",
      intro: "Use captured work status, approval history and operational reporting to review how the shutdown was delivered. Compare the information available during execution with the decisions made, then use those findings to agree improvements for the next shutdown.",
      items: ["Review work progress and the decision record", "Bring consistent information to the post-shutdown review", "Identify lessons and agree follow-up responsibilities"],
      note: "Reporting outputs and any action-tracking workflow are defined during solution design.",
    },
  ],
  finalHeading: "Walk through your next shutdown with Shunter.",
  finalButton: "Book a shutdown demo",
  related: ["mining-timesheet-labour-capture", "contractor-mobilisation", "custom-mining-software"],
};

export const shutdownExample = [
  { title: "Submit the proposed work", description: "A supervisor raises a late repair request with the scope, reason for inclusion, priority and risk. The configured workflow keeps the request and supporting comments together." },
  { title: "Review readiness and resources", description: "The planner considers work-order information, labour needs, parts and documentation before recommending whether to include the work. People make this assessment using the available operational information." },
  { title: "Record the decision", description: "The designated approver reviews the request. The decision and comments remain visible in the approval history, giving the shutdown team a traceable record." },
  { title: "Coordinate the next action", description: "If approved, the responsible team coordinates the work and its allocation through the agreed planning process. Supervisors review the resulting work status; approval does not automatically recalculate a specialist shutdown schedule." },
];

export const shutdownFaqs = [
  { question: "What is Shunter?", answer: "Shunter is the operational software platform developed by Valeron, an Australian software company. It connects assets, maintenance, workforce, scheduling, documents, inventory and reporting. Mining shutdown management is a Shunter use case, with workflows configured for the operation." },
  { question: "How does Shunter support mining shutdowns?", answer: "It connects the operational information behind planning readiness, scope approvals, workforce coordination and execution visibility. Valeron works with your team to define the workgroups, responsibilities, approval steps and reports needed for your shutdown process." },
  { question: "Does Shunter replace our CMMS?", answer: "A shutdown implementation does not assume replacement of your existing CMMS or ERP. Shunter can provide an operational layer alongside those systems. Data ownership, imports, exports and any integration are agreed during solution design; a connection to a particular CMMS is not assumed." },
  { question: "Does Shunter replace Primavera P6 or specialist scheduling software?", answer: "Shunter’s role here is operational scheduling, allocation and work coordination. Keep your specialist tool for critical-path planning and resource levelling where required. Valeron will confirm how the operational workflow fits your scheduling process and whether a specific data exchange can be supported." },
  { question: "Can contractors and external workforce use Shunter?", answer: "Shunter supports workforce information, mobilisation and role-based access. The roles, organisational boundaries and access needed by contractor coordinators or external participants must be confirmed for your implementation. Access is configured around agreed responsibilities." },
  { question: "Can the shutdown workflow be configured for our operation?", answer: "Yes. Valeron works with your shutdown process, planning phases, workgroups, approval authorities, site terminology and reporting requirements. The configuration is agreed against your operational needs and validated with users." },
  { question: "How is Shunter implemented?", answer: "Valeron starts by understanding the work and mapping the users, decisions and information involved. The team then agrees configuration and any integration requirements, pilots the workflow with real users, supports adoption and iterates based on operational use. Scope and delivery arrangements are confirmed for each implementation." },
];
