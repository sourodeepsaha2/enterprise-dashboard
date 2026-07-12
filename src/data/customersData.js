const customersData = [
  {
    id: 1,
    name: "John Smith",
    email: "john@company.com",
    phone: "+1 (555) 123-4567",
    company: "Stripe",
    status: "Active",
    country: "United States",
    joinedDate: "2024-01-15",
    lastOrder: "2026-07-11",
    lastOrderFormatted: "Today",
    spent: 4820,
    spentFormatted: "$4,820",
    ordersCount: 14,
    notes: [
      { id: 1, text: "Highly active user. Interested in upgrading to the Enterprise tier next month.", date: "2026-07-10" },
      { id: 2, text: "Requested a demo for advanced billing integrations.", date: "2026-06-28" }
    ]
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@company.com",
    phone: "+1 (555) 987-6543",
    company: "Netflix",
    status: "Pending",
    country: "United Kingdom",
    joinedDate: "2024-03-22",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Yesterday",
    spent: 2150,
    spentFormatted: "$2,150",
    ordersCount: 6,
    notes: [
      { id: 1, text: "Awaiting approval on payment terms from their procurement department.", date: "2026-07-09" }
    ]
  },
  {
    id: 3,
    name: "Emma Davis",
    email: "emma@company.com",
    phone: "+1 (555) 234-5678",
    company: "Amazon",
    status: "Active",
    country: "Canada",
    joinedDate: "2023-11-05",
    lastOrder: "2026-07-08",
    lastOrderFormatted: "Jul 8",
    spent: 8720,
    spentFormatted: "$8,720",
    ordersCount: 24,
    notes: [
      { id: 1, text: "Accounts team requested consolidated monthly invoices.", date: "2026-07-05" }
    ]
  },
  {
    id: 4,
    name: "Alex Brown",
    email: "alex@company.com",
    phone: "+1 (555) 345-6789",
    company: "Google",
    status: "Inactive",
    country: "Germany",
    joinedDate: "2023-08-10",
    lastOrder: "2026-07-06",
    lastOrderFormatted: "Jul 6",
    spent: 980,
    spentFormatted: "$980",
    ordersCount: 3,
    notes: [
      { id: 1, text: "User has gone quiet. Followed up on trial expiration, no response.", date: "2026-07-06" }
    ]
  },
  {
    id: 5,
    name: "Olivia Taylor",
    email: "olivia@company.com",
    phone: "+1 (555) 456-7890",
    company: "Apple",
    status: "Active",
    country: "Australia",
    joinedDate: "2024-02-18",
    lastOrder: "2026-07-05",
    lastOrderFormatted: "Jul 5",
    spent: 6430,
    spentFormatted: "$6,430",
    ordersCount: 18,
    notes: [
      { id: 1, text: "Complained about dashboard load times; resolved after upgrading connectivity.", date: "2026-07-01" }
    ]
  },
  {
    id: 6,
    name: "James Johnson",
    email: "james@microsoft.com",
    phone: "+1 (555) 567-8901",
    company: "Microsoft",
    status: "Active",
    country: "United States",
    joinedDate: "2023-05-12",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 12500,
    spentFormatted: "$12,500",
    ordersCount: 32,
    notes: [
      { id: 1, text: "Enterprise renewal scheduled for October. Ready to expand seats.", date: "2026-07-08" }
    ]
  },
  {
    id: 7,
    name: "Sophia Martinez",
    email: "sophia@slack.com",
    phone: "+1 (555) 678-9012",
    company: "Slack",
    status: "Active",
    country: "Spain",
    joinedDate: "2024-04-01",
    lastOrder: "2026-07-09",
    lastOrderFormatted: "Jul 9",
    spent: 3400,
    spentFormatted: "$3,400",
    ordersCount: 9,
    notes: [
      { id: 1, text: "Expressed interest in API integrations for Slack notification bots.", date: "2026-07-02" }
    ]
  },
  {
    id: 8,
    name: "Liam Anderson",
    email: "liam@figma.com",
    phone: "+1 (555) 789-0123",
    company: "Figma",
    status: "Pending",
    country: "France",
    joinedDate: "2024-05-10",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 1250,
    spentFormatted: "$1,250",
    ordersCount: 4,
    notes: [
      { id: 1, text: "Setting up SSO configuration; currently blocked by IT policies.", date: "2026-07-10" }
    ]
  },
  {
    id: 9,
    name: "Isabella Thomas",
    email: "isabella@zoom.us",
    phone: "+1 (555) 890-1234",
    company: "Zoom",
    status: "Inactive",
    country: "United States",
    joinedDate: "2023-01-20",
    lastOrder: "2026-06-15",
    lastOrderFormatted: "Jun 15",
    spent: 450,
    spentFormatted: "$450",
    ordersCount: 1,
    notes: [
      { id: 1, text: "Cancelled subscription due to budget constraints.", date: "2026-06-15" }
    ]
  },
  {
    id: 10,
    name: "Mason Jackson",
    email: "mason@vercel.com",
    phone: "+1 (555) 901-2345",
    company: "Vercel",
    status: "Active",
    country: "Japan",
    joinedDate: "2023-09-09",
    lastOrder: "2026-07-11",
    lastOrderFormatted: "Today",
    spent: 15800,
    spentFormatted: "$15,800",
    ordersCount: 42,
    notes: [
      { id: 1, text: "Power user. Requested custom analytics filters. Sent feature request to product team.", date: "2026-07-11" }
    ]
  },
  {
    id: 11,
    name: "Mia White",
    email: "mia@linear.app",
    phone: "+1 (555) 012-3456",
    company: "Linear",
    status: "Active",
    country: "Sweden",
    joinedDate: "2024-01-10",
    lastOrder: "2026-07-08",
    lastOrderFormatted: "Jul 8",
    spent: 7200,
    spentFormatted: "$7,200",
    ordersCount: 20,
    notes: [
      { id: 1, text: "Integrates Linear webhooks directly to their workflow dashboard.", date: "2026-07-04" }
    ]
  },
  {
    id: 12,
    name: "Lucas Harris",
    email: "lucas@hubspot.com",
    phone: "+1 (555) 123-9876",
    company: "HubSpot",
    status: "Active",
    country: "Ireland",
    joinedDate: "2023-04-14",
    lastOrder: "2026-07-07",
    lastOrderFormatted: "Jul 7",
    spent: 5100,
    spentFormatted: "$5,100",
    ordersCount: 15,
    notes: [
      { id: 1, text: "Discussed custom CRM integration patterns with engineering team.", date: "2026-07-06" }
    ]
  },
  {
    id: 13,
    name: "Charlotte Martin",
    email: "charlotte@notion.so",
    phone: "+1 (555) 234-8765",
    company: "Notion",
    status: "Pending",
    country: "United States",
    joinedDate: "2024-06-01",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 900,
    spentFormatted: "$900",
    ordersCount: 2,
    notes: [
      { id: 1, text: "Evaluating the team plan for 50 additional collaborators.", date: "2026-07-09" }
    ]
  },
  {
    id: 14,
    name: "Ethan Garcia",
    email: "ethan@retool.com",
    phone: "+1 (555) 345-7654",
    company: "Retool",
    status: "Inactive",
    country: "Brazil",
    joinedDate: "2024-03-01",
    lastOrder: "2026-03-01",
    lastOrderFormatted: "Mar 1",
    spent: 0,
    spentFormatted: "$0",
    ordersCount: 0,
    notes: [
      { id: 1, text: "Created trial account but never activated a project or orders.", date: "2026-03-01" }
    ]
  },
  {
    id: 15,
    name: "Amelia Robinson",
    email: "amelia@webflow.com",
    phone: "+1 (555) 456-6543",
    company: "Webflow",
    status: "Active",
    country: "United States",
    joinedDate: "2023-12-15",
    lastOrder: "2026-07-06",
    lastOrderFormatted: "Jul 6",
    spent: 4200,
    spentFormatted: "$4,200",
    ordersCount: 11,
    notes: [
      { id: 1, text: "Staged multiple custom domains under single organization billing.", date: "2026-07-02" }
    ]
  },
  {
    id: 16,
    name: "Alexander Clark",
    email: "alexander@shopify.com",
    phone: "+1 (555) 567-5432",
    company: "Shopify",
    status: "Active",
    country: "Canada",
    joinedDate: "2023-06-20",
    lastOrder: "2026-07-09",
    lastOrderFormatted: "Jul 9",
    spent: 11300,
    spentFormatted: "$11,300",
    ordersCount: 29,
    notes: [
      { id: 1, text: "Promoted to partner tier account with discounted pricing rates.", date: "2026-07-07" }
    ]
  },
  {
    id: 17,
    name: "Harper Rodriguez",
    email: "harper@airbnb.com",
    phone: "+1 (555) 678-4321",
    company: "Airbnb",
    status: "Active",
    country: "United States",
    joinedDate: "2023-10-18",
    lastOrder: "2026-07-08",
    lastOrderFormatted: "Jul 8",
    spent: 9800,
    spentFormatted: "$9,800",
    ordersCount: 25,
    notes: [
      { id: 1, text: "Requested bulk API access key for listings and host reports.", date: "2026-07-03" }
    ]
  },
  {
    id: 18,
    name: "Daniel Lewis",
    email: "daniel@uber.com",
    phone: "+1 (555) 789-3210",
    company: "Uber",
    status: "Pending",
    country: "Netherlands",
    joinedDate: "2024-02-28",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 3100,
    spentFormatted: "$3,100",
    ordersCount: 8,
    notes: [
      { id: 1, text: "Verifying credit profile details before approving enterprise portal access.", date: "2026-07-09" }
    ]
  },
  {
    id: 19,
    name: "Evelyn Lee",
    email: "evelyn@lyft.com",
    phone: "+1 (555) 890-2109",
    company: "Lyft",
    status: "Active",
    country: "United States",
    joinedDate: "2023-07-05",
    lastOrder: "2026-07-05",
    lastOrderFormatted: "Jul 5",
    spent: 5600,
    spentFormatted: "$5,600",
    ordersCount: 16,
    notes: [
      { id: 1, text: "Interested in the co-marketing campaign project.", date: "2026-06-30" }
    ]
  },
  {
    id: 20,
    name: "Henry Walker",
    email: "henry@spotify.com",
    phone: "+1 (555) 901-1098",
    company: "Spotify",
    status: "Inactive",
    country: "Sweden",
    joinedDate: "2023-02-10",
    lastOrder: "2026-05-20",
    lastOrderFormatted: "May 20",
    spent: 1500,
    spentFormatted: "$1,500",
    ordersCount: 5,
    notes: [
      { id: 1, text: "No activity since account manager rotation in May. Need outreach.", date: "2026-06-01" }
    ]
  },
  {
    id: 21,
    name: "Elizabeth Hall",
    email: "elizabeth@tesla.com",
    phone: "+1 (555) 012-0987",
    company: "Tesla",
    status: "Active",
    country: "United States",
    joinedDate: "2023-03-15",
    lastOrder: "2026-07-11",
    lastOrderFormatted: "Today",
    spent: 18200,
    spentFormatted: "$18,200",
    ordersCount: 50,
    notes: [
      { id: 1, text: "Key strategic account. VIP support channel has been provisioned.", date: "2026-07-11" }
    ]
  },
  {
    id: 22,
    name: "Sebastian Allen",
    email: "sebastian@spacex.com",
    phone: "+1 (555) 123-0876",
    company: "SpaceX",
    status: "Active",
    country: "United States",
    joinedDate: "2023-02-12",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 22400,
    spentFormatted: "$22,400",
    ordersCount: 60,
    notes: [
      { id: 1, text: "Requested customized uptime SLA contracts (99.999%).", date: "2026-07-09" }
    ]
  },
  {
    id: 23,
    name: "Emily Young",
    email: "emily@discord.com",
    phone: "+1 (555) 234-0765",
    company: "Discord",
    status: "Pending",
    country: "United States",
    joinedDate: "2024-06-15",
    lastOrder: "2026-07-09",
    lastOrderFormatted: "Jul 9",
    spent: 850,
    spentFormatted: "$850",
    ordersCount: 3,
    notes: [
      { id: 1, text: "Awaiting final signoff on standard platform agreement.", date: "2026-07-08" }
    ]
  },
  {
    id: 24,
    name: "David King",
    email: "david@twitch.tv",
    phone: "+1 (555) 345-0654",
    company: "Twitch",
    status: "Active",
    country: "United States",
    joinedDate: "2023-12-01",
    lastOrder: "2026-07-07",
    lastOrderFormatted: "Jul 7",
    spent: 2900,
    spentFormatted: "$2,900",
    ordersCount: 7,
    notes: [
      { id: 1, text: "Inquired about webhook reliability limits and rate charts.", date: "2026-07-06" }
    ]
  },
  {
    id: 25,
    name: "Abigail Wright",
    email: "abigail@canva.com",
    phone: "+1 (555) 456-0543",
    company: "Canva",
    status: "Inactive",
    country: "Australia",
    joinedDate: "2023-07-10",
    lastOrder: "2026-04-10",
    lastOrderFormatted: "Apr 10",
    spent: 350,
    spentFormatted: "$350",
    ordersCount: 1,
    notes: [
      { id: 1, text: "Churned to alternative dashboard provider. Will follow up in 6 months.", date: "2026-05-01" }
    ]
  },
  {
    id: 26,
    name: "Gabriel Scott",
    email: "gabriel@adobe.com",
    phone: "+1 (555) 567-0432",
    company: "Adobe",
    status: "Active",
    country: "United States",
    joinedDate: "2023-04-20",
    lastOrder: "2026-07-10",
    lastOrderFormatted: "Jul 10",
    spent: 14100,
    spentFormatted: "$14,100",
    ordersCount: 38,
    notes: [
      { id: 1, text: "Invoiced through Adobe purchasing portal. PO is generated automatically.", date: "2026-07-09" }
    ]
  }
];

export default customersData;