import { Chip } from "@mui/material";

const statusConfig = {
  Paid: {
    color: "#22C55E",
    bg: "rgba(34,197,94,.12)",
  },
  Pending: {
    color: "#F59E0B",
    bg: "rgba(245,158,11,.12)",
  },
  Refunded: {
    color: "#EF4444",
    bg: "rgba(239,68,68,.12)",
  },
};

const OrderStatusChip = ({ status }) => {
  const config = statusConfig[status];

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: config.bg,
        color: config.color,
        fontWeight: 600,
        borderRadius: "10px",
        px: 0.5,
        minWidth: 92,

        transition: "all .2s ease",

        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    />
  );
};

export default OrderStatusChip;