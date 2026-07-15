import { Chip } from "@mui/material";

const statusConfig = {
  paid: {
    color: "#22C55E",
    bg: "rgba(34,197,94,.12)",
    border: "1px solid rgba(34,197,94,.2)",
  },
  processing: {
    color: "#F59E0B",
    bg: "rgba(245,158,11,.12)",
    border: "1px solid rgba(245,158,11,.2)",
  },
  shipped: {
    color: "#3B82F6",
    bg: "rgba(59,130,246,.12)",
    border: "1px solid rgba(59,130,246,.2)",
  },
  refunded: {
    color: "#EF4444",
    bg: "rgba(239,68,68,.12)",
    border: "1px solid rgba(239,68,68,.2)",
  },
};

const OrderStatusChip = ({ status }) => {
  const normStatus = (status || "").toLowerCase();
  const config = statusConfig[normStatus] || statusConfig.paid;

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: config.bg,
        color: config.color,
        border: config.border,
        fontWeight: 600,
        borderRadius: "6px",
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
