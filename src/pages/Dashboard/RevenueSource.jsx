import SectionCard from "../../components/ui/SectionCard";

import DonutChart from "./DonutChart";
import SourceList from "./SourceList";

const RevenueSource = () => {
  return (
    <SectionCard
      sx={{
        height: 640,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <DonutChart />

      <SourceList />
    </SectionCard>
  );
};

export default RevenueSource;