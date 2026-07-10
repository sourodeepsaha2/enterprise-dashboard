import { Typography } from "@mui/material";

import SectionCard from "../../components/ui/SectionCard";
import ActivityItem from "./ActivityItem";

const activities = [
  {
    title: "John Smith",
    subtitle: "Placed a new order",
    time: "2 minutes ago",
  },
  {
    title: "Emma Davis",
    subtitle: "Payment received",
    time: "15 minutes ago",
  },
  {
    title: "Warehouse A",
    subtitle: "Inventory updated",
    time: "1 hour ago",
  },
  {
    title: "Sarah Wilson",
    subtitle: "Created a new account",
    time: "Today",
  },
];

const ActivityFeed = () => {
  return (
    <SectionCard
      sx={{
        minHeight: 430,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          mb: 3,
        }}
      >
        Activity Feed
      </Typography>

      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          {...activity}
          isLast={index === activities.length - 1}
        />
      ))}
    </SectionCard>
  );
};

export default ActivityFeed;