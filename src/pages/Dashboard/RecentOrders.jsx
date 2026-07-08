import { Typography } from "@mui/material";
import SectionCard from "../../components/ui/SectionCard";

const RecentOrders = () => {
  return (
    <SectionCard
      sx={{
        height: 340,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
      >
        Recent Orders
      </Typography>
    </SectionCard>
  );
};

export default RecentOrders;