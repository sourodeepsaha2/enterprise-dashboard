import { Typography } from "@mui/material";
import SectionCard from "../../components/ui/SectionCard";

const RevenueSource = () => {
  return (
    <SectionCard
      sx={{
        height: 380,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
      >
        Revenue Sources
      </Typography>
    </SectionCard>
  );
};

export default RevenueSource;