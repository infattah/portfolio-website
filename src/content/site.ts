export const contact = {
  whatsapp: "https://wa.me/971545676559",
  email: "mailto:cafattah@gmail.com",
  emailLabel: "cafattah@gmail.com",
  linkedin: "https://linkedin.com/in/abdulfathah",
  location: "UAE",
};

export const homeStats = [
  "Growth marketing across real estate, SaaS, e-commerce, and agency work",
  "Paid media, CRM, automation, and attribution",
  "Based in the UAE",
];

export const featuredWins = [
  {
    name: "RPI Real Estate",
    metric: "AED 50-150 CPL",
    context: "Real estate lead generation with weak tracking and slow follow-up.",
    summary:
      "Rebuilt campaign structure and connected tracking, scoring, routing, and follow-up.",
    outcome: "A stronger path from ad click to sales handoff.",
  },
  {
    name: "Almeka Technologies",
    metric: "14+ accounts",
    context: "A growing agency slowed down by manual delivery workflows.",
    summary:
      "Improved delivery systems, added automation, and made execution more repeatable.",
    outcome: "More capacity without matching headcount growth.",
  },
  {
    name: "AI Lead Qualification",
    metric: "<5 min speed-to-lead",
    context: "Inbound leads were going cold before sales could respond.",
    summary:
      "Built AI calling, WhatsApp follow-up, CRM logging, and qualification logic.",
    outcome: "Faster response and better lead quality.",
  },
];

export const timeline = [
  {
    period: "2024 - Present",
    role: "Performance Marketing and Growth",
    company: "RPI Real Estate",
    detail:
      "Built paid media, tracking, lead scoring, and follow-up systems for real estate growth.",
  },
  {
    period: "2023 - 2024",
    role: "Digital Marketing Manager",
    company: "Almeka Technologies",
    detail:
      "Managed 14+ client accounts and improved delivery with better systems and automation.",
  },
  {
    period: "2021 - 2023",
    role: "Digital Marketing Specialist",
    company: "Yoko Groups",
    detail:
      "Worked across multi-channel campaigns while building stronger sales and operations understanding.",
  },
  {
    period: "2019 - 2020",
    role: "Founder and Operator",
    company: "BeingHijabee",
    detail:
      "Built and ran an e-commerce brand with direct ownership across growth and operations.",
  },
];

export const expertise = [
  {
    title: "Paid media",
    copy: "Meta and Google campaigns built around lead quality, not just lead volume.",
  },
  {
    title: "CRM systems",
    copy: "Lead routing, scoring, and handoff logic that support sales properly.",
  },
  {
    title: "Automation",
    copy: "Workflows that remove delay, reduce manual work, and improve consistency.",
  },
  {
    title: "Attribution",
    copy: "Tracking systems that make performance decisions easier to trust.",
  },
];

export const workItems = [
  {
    slug: "rpi-revenue-pipeline",
    title: "RPI | Building a Revenue Pipeline From Zero",
    industry: "Real Estate",
    challenge:
      "Leads were coming in, but the system behind them was weak.",
    whatIDid:
      "Rebuilt campaign structure and connected tracking, routing, scoring, and follow-up.",
    result:
      "Built a cleaner lead generation pipeline from ad click to sales handoff.",
    takeaway:
      "I build the system behind paid acquisition.",
  },
  {
    slug: "almeka-agency-automation",
    title: "Almeka Technologies | Automating an Agency That Had None",
    industry: "Agency Operations",
    challenge:
      "The agency was growing, but manual work was slowing performance.",
    whatIDid:
      "Managed the portfolio, reduced repetitive work, and improved delivery systems.",
    result:
      "Made the operation more scalable without matching headcount growth.",
    takeaway:
      "I can rebuild process-heavy marketing operations.",
  },
  {
    slug: "ai-lead-qualification-system",
    title: "AI Lead Qualification System | Faster Handoffs, Better Pipeline Quality",
    industry: "Lead Generation Infrastructure",
    challenge:
      "Inbound leads were cooling off before sales could act.",
    whatIDid:
      "Built AI calling, WhatsApp follow-up, CRM logging, and scoring logic.",
    result:
      "Reduced speed-to-lead to under 5 minutes.",
    takeaway:
      "AI matters when it improves the workflow.",
  },
];

export const workDetails = {
  "rpi-revenue-pipeline": {
    context:
      "RPI needed more than campaign optimization. The missing piece was the system behind lead generation.",
    problem:
      "Tracking was weak and sales handoff was too manual.",
    built: [
      "Reworked Meta campaign structure for off-plan real estate projects",
      "Improved creative and audience logic for higher-intent acquisition",
      "Implemented Meta CAPI for better server-side signal quality",
      "Built n8n routing from Meta forms into a structured lead sheet and CRM-ready flow",
      "Added lead scoring and WhatsApp follow-up logic",
    ],
    outcome:
      "The result was a cleaner pipeline with better signal and stronger lead handling.",
  },
  "almeka-agency-automation": {
    context:
      "Almeka was growing, but the internal process layer was still too manual.",
    problem:
      "Manual workflows and delivery bottlenecks limited scale.",
    built: [
      "Owned delivery across 14+ client accounts",
      "Mapped repetitive operational bottlenecks",
      "Introduced automation into reporting and internal process flows",
      "Improved repeatability in how work moved through the team",
    ],
    outcome:
      "The agency gained more capacity without proportional headcount growth.",
  },
  "ai-lead-qualification-system": {
    context:
      "Leads were expensive to acquire and too easy to lose.",
    problem:
      "Response speed was slow and qualification was too manual.",
    built: [
      "Created an AI-powered calling agent triggered on lead submission",
      "Added qualification logic based on budget, timeline, and intent",
      "Built WhatsApp follow-up sequences for missed or unanswered calls",
      "Connected scoring and assignment into the CRM automatically",
    ],
    outcome:
      "Speed-to-lead dropped to under 5 minutes and handoff quality improved.",
  },
} as const;
