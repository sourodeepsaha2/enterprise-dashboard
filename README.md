# 🌌 Acuity Enterprise CRM Dashboard

A sleek, dark-mode React + Vite enterprise administration platform styled with modern Material UI (MUI v6) and enhanced with fluid Framer Motion micro-animations.

This dashboard offers a comprehensive suite of CRM, inventory, order logging, and analytics interfaces designed with maximum visual fidelity and optimized layout controls.

---

## 🚀 Key Modules & Features

### 1. 📈 Analytics Performance Center
A rich traffic and engagement terminal monitoring system metrics:
* **KPI Metrics**: Real-time summaries for total visitors, conversion rate, bounce rate, and session durations.
* **Traffic Flow Charting**: Custom Recharts AreaCharts with smooth gradient overlays showing conversions and visitor volumes across granular date ranges (7d, 30d, 90d, YTD).
* **Device Traffic Splits**: BarChart breakdown logging sessions originating from Desktop, Mobile, and Tablet hardware.
* **Top Landing Pages**: In-depth landing statistics tracking entry paths, unique visitor counts, and exit bounce rates.

### 2. 👥 Customers CRM Module
A full-featured Customer Relationship Management database:
* **Customer stats row**: Staggered cards displaying Total Customers, Active status counts, monthly signup rates, and retention coefficients.
* **CRM Ledger**: Responsive table containing custom-styled status badges (Active, Inactive) with multi-column sorting (Name, Spent, Orders, status) and pagination.
* **Detailed Client Drawer**: Side-out panel featuring inline description editing, timeline activity logs, notes manager, status toggling, and quick contact cards.

### 3. 📦 Products Inventory Catalog
An interactive catalog and logistics control hub:
* **Inventory Overview**: High-level KPIs tracking catalog depth, stock value, and low-inventory warnings.
* **Filterable Catalog**: Categorized filters mapping stock parameters with support for SKU search indices, pagination, and multi-column sorting (Name, SKU, Price, Stock).
* **Product Detail Panel**: Slide-out dashboard displaying product specification grids, unit sales history charts, description modifiers, and a fully functional stock replenishment utility.

### 4. 💳 Sales Orders Ledger
A Stripe-inspired sales invoicing and logistics controller:
* **Financial metrics**: Summarizes transaction volumes, pending processing, in-transit shipments, and aggregate revenue.
* **Order History**: Paginated logs supporting multi-column sorting and filtering by order status (Paid, Processing, Shipped, Refunded).
* **Invoice drawer**: Slide-out ledger detailing itemized billing summaries, client credentials, shipping destinations, a delivery stepper tracker (Ordered -> Paid -> Shipped -> Delivered), and transaction actions (Mark Shipped, Mark Delivered, Issue Refund).

### 5. ⚙️ Organization Settings Panel
A tabbed workspace configuration hub:
* **Public Profile Form**: Modify avatars, name coordinates, email domains, timezone locales, and trigger mock update feedback alerts.
* **Access Security Card**: Manage password rotations and switch two-factor authentication (2FA) states.
* **System Notifications**: Toggles to configure alert frequencies for emails, critical security warnings, and monthly billing updates.
* **Developer API Keys**: Generate secure live/test API keys, view credentials in single-reveal popups, copy keys directly to the clipboard, and manage active token revocation tables.

---

## 🛠 Tech Stack

* **Core**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
* **Styling & UI**: [Material UI (MUI v6)](https://mui.com/)
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Charts**: [Recharts](https://recharts.org/)

---

## 💻 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* npm (v9.0.0 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sourodeepsaha2/enterprise-dashboard.git
   cd enterprise-dashboard
   ```
2. Install package dependencies:
   ```bash
   npm install
   ```

### Execution Scripts
* **Local Development Server**: Launches the dev HMR environment on `http://localhost:5173/`.
  ```bash
  npm run dev
  ```
* **Production Build**: Compiles and minifies assets into a static `dist` bundle.
  ```bash
  npm run build
  ```
* **Preview Build**: Runs a local static server to preview the production-ready build.
  ```bash
  npm run preview
  ```
