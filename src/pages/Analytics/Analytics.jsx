import { useState } from "react";
import { Grid } from "@mui/material";

import MainLayout from "../../components/layout/MainLayout";
import AnalyticsHeader from "./AnalyticsHeader";
import AnalyticsStats from "./AnalyticsStats";
import TrafficChart from "./TrafficChart";
import DevicesChart from "./DevicesChart";
import TopPages from "./TopPages";

const Analytics = () => {
  const [dateRange, setDateRange] = useState("7d");

  return (
    <MainLayout>
      <AnalyticsHeader dateRange={dateRange} onDateRangeChange={setDateRange} />

      <AnalyticsStats />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <TrafficChart dateRange={dateRange} />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <DevicesChart />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TopPages />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Analytics;