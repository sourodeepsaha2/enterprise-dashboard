import { Chip } from "@mui/material";

const statusStyles = {
  active: {
    bg: "rgba(34, 197, 94, 0.12)",
    color: "#22C55E",
    border: "1px solid rgba(34, 197, 94, 0.2)",
  },
  "low stock": {
    bg: "rgba(245, 158, 11, 0.12)",
    color: "#F59E0B",
    border: "1px solid rgba(245, 158, 11, 0.2)",
  },
  "out of stock": {
    bg: "rgba(239, 68, 68, 0.12)",
    color: "#EF4444",
    border: "1px solid rgba(239, 68, 68, 0.2)",
  },
};

const ProductStatusChip = ({ status }) => {
  const normStatus = (status || "").toLowerCase();
  const style = statusStyles[normStatus] || statusStyles.active;

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: style.bg,
        color: style.color,
        border: style.border,
        fontWeight: 600,
        fontSize: "0.75rem",
        borderRadius: "6px",
        textTransform: "capitalize",
        "& .MuiChip-label": {
          px: 1.2,
        },
      }}
    />
  );
};

export default ProductStatusChip;
