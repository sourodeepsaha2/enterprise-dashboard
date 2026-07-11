import Chip from "@mui/material/Chip";

const colors = {
  Active: {
    bg: "#123A23",
    color: "#36D26B",
  },
  Pending: {
    bg: "#3A2A12",
    color: "#FFB020",
  },
  Inactive: {
    bg: "#3A1717",
    color: "#FF5A5A",
  },
};

const CustomerStatusChip = ({ status }) => {
  const style = colors[status];

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: style.bg,
        color: style.color,
        fontWeight: 600,
        borderRadius: "999px",
        px: 1,
      }}
    />
  );
};

export default CustomerStatusChip;