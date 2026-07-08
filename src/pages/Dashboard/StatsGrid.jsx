import { Grid } from "@mui/material";
import StatCard from "../../components/ui/StatCard";

const StatsGrid = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Revenue"
          value="$124,450"
          change="+12.5% from last month"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Orders"
          value="2,314"
          change="+4.3% from last month"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Customers"
          value="18,420"
          change="+2.8% from last month"
        />
      </Grid>

      <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
        <StatCard
          title="Profit"
          value="18.2%"
          change="-1.4% from last month"
          positive={false}
        />
      </Grid>
    </Grid>
  );
};

export default StatsGrid;