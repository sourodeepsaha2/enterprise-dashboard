import { Grid } from "@mui/material";

import MainLayout from "../../components/layout/MainLayout";

import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import RevenueChart from "./RevenueChart";
import RevenueSource from "./RevenueSource";
import RecentOrders from "./RecentOrders";
import ActivityFeed from "./ActivityFeed";

const Dashboard = () => {
  return (
    <MainLayout>
      <DashboardHeader />

      <StatsGrid />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <RevenueChart />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <RevenueSource />
        </Grid>

        <Grid size={{ xs: 12, lg: 8 }}>
          <RecentOrders />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <ActivityFeed />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;