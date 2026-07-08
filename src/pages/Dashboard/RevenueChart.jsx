import SectionCard from "../../components/ui/SectionCard";

import ChartHeader from "./ChartHeader";
import RevenueStats from "./RevenueStats";
import RevenueLineChart from "./RevenueLineChart";

const RevenueChart = () => {
  return (
    <SectionCard
      sx={{
        height: 590,
      }}
    >
      <ChartHeader />

      <RevenueStats />

      <RevenueLineChart />
    </SectionCard>
  );
};

export default RevenueChart;