const ordersData = [
  {
    id: "#ORD-1042",
    customerName: "John Smith",
    customerEmail: "john@company.com",
    amount: 320,
    amountFormatted: "$320",
    status: "Paid",
    date: "2026-07-11",
    itemsCount: 3,
    shippingAddress: "123 Main St, San Francisco, CA 94105",
    items: [
      { name: "Developer Seat Add-on", quantity: 2, price: 49 },
      { name: "API Gateway Standard Pro", quantity: 1, price: 222 }
    ]
  },
  {
    id: "#ORD-1041",
    customerName: "Sarah Wilson",
    customerEmail: "sarah@company.com",
    amount: 2150,
    amountFormatted: "$2,150",
    status: "Processing",
    date: "2026-07-10",
    itemsCount: 1,
    shippingAddress: "456 Oak Lane, London, UK SW1A 1AA",
    items: [
      { name: "Enterprise Core License", quantity: 1, price: 2150 }
    ]
  },
  {
    id: "#ORD-1040",
    customerName: "Emma Davis",
    customerEmail: "emma@company.com",
    amount: 8720,
    amountFormatted: "$8,720",
    status: "Shipped",
    date: "2026-07-08",
    itemsCount: 4,
    shippingAddress: "789 Pine Rd, Toronto, ON M5V 2N2",
    items: [
      { name: "Gold SLA Technical Support", quantity: 2, price: 3500 },
      { name: "DB Optimizer Cloud", quantity: 2, price: 860 }
    ]
  },
  {
    id: "#ORD-1039",
    customerName: "Alex Brown",
    customerEmail: "alex@company.com",
    amount: 980,
    amountFormatted: "$980",
    status: "Refunded",
    date: "2026-07-06",
    itemsCount: 1,
    shippingAddress: "101 Maple Ave, Munich, Germany 80331",
    items: [
      { name: "Analytics Core Integration", quantity: 1, price: 980 }
    ]
  },
  {
    id: "#ORD-1038",
    customerName: "John Smith",
    customerEmail: "john@company.com",
    amount: 180,
    amountFormatted: "$180",
    status: "Paid",
    date: "2026-07-05",
    itemsCount: 1,
    shippingAddress: "123 Main St, San Francisco, CA 94105",
    items: [
      { name: "Redundant Power Module", quantity: 1, price: 180 }
    ]
  },
  {
    id: "#ORD-1037",
    customerName: "Olivia Taylor",
    customerEmail: "olivia@company.com",
    amount: 6430,
    amountFormatted: "$6,430",
    status: "Paid",
    date: "2026-07-05",
    itemsCount: 2,
    shippingAddress: "202 Birch Blvd, Sydney, Australia 2000",
    items: [
      { name: "Gold SLA Technical Support", quantity: 1, price: 3500 },
      { name: "Enterprise VPN Router", quantity: 1, price: 2930 }
    ]
  },
  {
    id: "#ORD-1036",
    customerName: "James Johnson",
    customerEmail: "james@microsoft.com",
    amount: 12500,
    amountFormatted: "$12,500",
    status: "Paid",
    date: "2026-07-10",
    itemsCount: 5,
    shippingAddress: "1 Microsoft Way, Redmond, WA 98052",
    items: [
      { name: "Enterprise Core License", quantity: 10, price: 1250 }
    ]
  },
  {
    id: "#ORD-1035",
    customerName: "Sophia Martinez",
    customerEmail: "sophia@slack.com",
    amount: 3400,
    amountFormatted: "$3,400",
    status: "Paid",
    date: "2026-07-09",
    itemsCount: 2,
    shippingAddress: "500 Howard St, San Francisco, CA 94105",
    items: [
      { name: "Analytics Core Integration", quantity: 2, price: 1700 }
    ]
  },
  {
    id: "#ORD-1034",
    customerName: "John Smith",
    customerEmail: "john@company.com",
    amount: 90,
    amountFormatted: "$90",
    status: "Refunded",
    date: "2026-07-04",
    itemsCount: 1,
    shippingAddress: "123 Main St, San Francisco, CA 94105",
    items: [
      { name: "Developer Seat Add-on", quantity: 2, price: 45 }
    ]
  },
  {
    id: "#ORD-1033",
    customerName: "Liam Anderson",
    customerEmail: "liam@figma.com",
    amount: 1250,
    amountFormatted: "$1,250",
    status: "Processing",
    date: "2026-07-10",
    itemsCount: 1,
    shippingAddress: "760 Market St, San Francisco, CA 94102",
    items: [
      { name: "API Gateway Standard Pro", quantity: 1, price: 1250 }
    ]
  },
  {
    id: "#ORD-1032",
    customerName: "Isabella Thomas",
    customerEmail: "isabella@zoom.us",
    amount: 450,
    amountFormatted: "$450",
    status: "Paid",
    date: "2026-06-15",
    itemsCount: 1,
    shippingAddress: "55 Almaden Blvd, San Jose, CA 95113",
    items: [
      { name: "DB Optimizer Cloud", quantity: 1, price: 450 }
    ]
  },
  {
    id: "#ORD-1031",
    customerName: "Mason Jackson",
    customerEmail: "mason@vercel.com",
    amount: 15800,
    amountFormatted: "$15,800",
    status: "Paid",
    date: "2026-07-11",
    itemsCount: 6,
    shippingAddress: "100 California St, San Francisco, CA 94111",
    items: [
      { name: "Enterprise Core License", quantity: 10, price: 1200 },
      { name: "Dedicated Proxy Node", quantity: 10, price: 380 }
    ]
  },
  {
    id: "#ORD-1030",
    customerName: "Mia White",
    customerEmail: "mia@linear.app",
    phone: "+1 (555) 012-3456",
    amount: 7200,
    amountFormatted: "$7,200",
    status: "Paid",
    date: "2026-07-08",
    itemsCount: 2,
    shippingAddress: "Vasagatan 16, Stockholm, Sweden 111 20",
    items: [
      { name: "Kubernetes Monitor Pro", quantity: 14, price: 514 }
    ]
  },
  {
    id: "#ORD-1029",
    customerName: "Lucas Harris",
    customerEmail: "lucas@hubspot.com",
    amount: 5100,
    amountFormatted: "$5,100",
    status: "Paid",
    date: "2026-07-07",
    itemsCount: 3,
    shippingAddress: "25 First St, Cambridge, MA 02141",
    items: [
      { name: "White-Label Brand Kit", quantity: 34, price: 150 }
    ]
  },
  {
    id: "#ORD-1028",
    customerName: "Charlotte Martin",
    customerEmail: "charlotte@notion.so",
    amount: 900,
    amountFormatted: "$900",
    status: "Processing",
    date: "2026-07-10",
    itemsCount: 1,
    shippingAddress: "2300 Harrison St, San Francisco, CA 94110",
    items: [
      { name: "DB Optimizer Cloud", quantity: 2, price: 450 }
    ]
  },
  {
    id: "#ORD-1027",
    customerName: "Amelia Robinson",
    customerEmail: "amelia@webflow.com",
    amount: 4200,
    amountFormatted: "$4,200",
    status: "Paid",
    date: "2026-07-06",
    itemsCount: 2,
    shippingAddress: "398 11th St, San Francisco, CA 94103",
    items: [
      { name: "Elasticsearch Index Suite", quantity: 6, price: 700 }
    ]
  },
  {
    id: "#ORD-1026",
    customerName: "Alexander Clark",
    customerEmail: "alexander@shopify.com",
    amount: 11300,
    amountFormatted: "$11,300",
    status: "Shipped",
    date: "2026-07-09",
    itemsCount: 4,
    shippingAddress: "150 Elgin St, Ottawa, ON K2P 1L4",
    items: [
      { name: "Enterprise Core License", quantity: 9, price: 1200 },
      { name: "Developer Seat Add-on", quantity: 10, price: 50 }
    ]
  },
  {
    id: "#ORD-1025",
    customerName: "Harper Rodriguez",
    customerEmail: "harper@airbnb.com",
    amount: 9800,
    amountFormatted: "$9,800",
    status: "Paid",
    date: "2026-07-08",
    itemsCount: 3,
    shippingAddress: "888 Brannan St, San Francisco, CA 94103",
    items: [
      { name: "Gold SLA Technical Support", quantity: 2, price: 3500 },
      { name: "Data Exporter Daemon", quantity: 9, price: 311 }
    ]
  },
  {
    id: "#ORD-1024",
    customerName: "Daniel Lewis",
    customerEmail: "daniel@uber.com",
    amount: 3100,
    amountFormatted: "$3,100",
    status: "Processing",
    date: "2026-07-10",
    itemsCount: 1,
    shippingAddress: "1455 Market St, San Francisco, CA 94103",
    items: [
      { name: "API Gateway Standard Pro", quantity: 4, price: 775 }
    ]
  },
  {
    id: "#ORD-1023",
    customerName: "Evelyn Lee",
    customerEmail: "evelyn@lyft.com",
    amount: 5600,
    amountFormatted: "$5,600",
    status: "Paid",
    date: "2026-07-05",
    itemsCount: 2,
    shippingAddress: "185 Berry St, San Francisco, CA 94107",
    items: [
      { name: "Gold SLA Technical Support", quantity: 1, price: 3500 },
      { name: "DB Optimizer Cloud", quantity: 4, price: 525 }
    ]
  },
  {
    id: "#ORD-1022",
    customerName: "Elizabeth Hall",
    customerEmail: "elizabeth@tesla.com",
    amount: 18200,
    amountFormatted: "$18,200",
    status: "Paid",
    date: "2026-07-11",
    itemsCount: 8,
    shippingAddress: "3500 Deer Creek Rd, Palo Alto, CA 94304",
    items: [
      { name: "Enterprise Core License", quantity: 15, price: 1213 }
    ]
  },
  {
    id: "#ORD-1021",
    customerName: "Sebastian Allen",
    customerEmail: "sebastian@spacex.com",
    amount: 22400,
    amountFormatted: "$22,400",
    status: "Paid",
    date: "2026-07-10",
    itemsCount: 10,
    shippingAddress: "1 Rocket Rd, Hawthorne, CA 90250",
    items: [
      { name: "Gold SLA Technical Support", quantity: 6, price: 3500 },
      { name: "Edge Cache Rack Server", quantity: 3, price: 466 }
    ]
  },
  {
    id: "#ORD-1020",
    customerName: "Emily Young",
    customerEmail: "emily@discord.com",
    amount: 850,
    amountFormatted: "$850",
    status: "Processing",
    date: "2026-07-09",
    itemsCount: 1,
    shippingAddress: "444 De Haro St, San Francisco, CA 94107",
    items: [
      { name: "API Gateway Standard Pro", quantity: 1, price: 850 }
    ]
  },
  {
    id: "#ORD-1019",
    customerName: "David King",
    customerEmail: "david@twitch.tv",
    amount: 2900,
    amountFormatted: "$2,900",
    status: "Paid",
    date: "2026-07-07",
    itemsCount: 2,
    shippingAddress: "350 Bush St, San Francisco, CA 94104",
    items: [
      { name: "Kafka Stream Broker Node", quantity: 1, price: 1800 },
      { name: "Elasticsearch Index Suite", quantity: 1, price: 1100 }
    ]
  },
  {
    id: "#ORD-1018",
    customerName: "Gabriel Scott",
    customerEmail: "gabriel@adobe.com",
    amount: 14100,
    amountFormatted: "$14,100",
    status: "Paid",
    date: "2026-07-10",
    itemsCount: 5,
    shippingAddress: "345 Park Ave, San Jose, CA 95110",
    items: [
      { name: "Enterprise Core License", quantity: 10, price: 1200 },
      { name: "Developer Seat Add-on", quantity: 42, price: 50 }
    ]
  }
];

export default ordersData;
