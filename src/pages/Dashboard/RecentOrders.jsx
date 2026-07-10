import { Box, Button, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import SectionCard from "../../components/ui/SectionCard";
import OrdersTable from "./OrdersTable";

const RecentOrders = () => {
  return (
    <SectionCard
      sx={{
        minHeight: 430,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 2.5,
          mb: 2.5,
          borderBottom: "1px solid #2A2A2A",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
        >
          Recent Orders
        </Typography>

        <Button
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{
            color: "#FFFFFF",
            textTransform: "none",
            fontWeight: 600,
            transition: "all .25s ease",

            "&:hover": {
              bgcolor: "transparent",
              transform: "translateX(4px)",
            },
          }}
        >
          View All
        </Button>
      </Box>

      <OrdersTable />
    </SectionCard>
  );
};

export default RecentOrders;