import { Typography } from "@mui/material";
import SectionCard from "../../components/ui/SectionCard";

const ActivityFeed = () => {
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
        Activity Feed
      </Typography>
    </SectionCard>
  );
};

export default ActivityFeed;