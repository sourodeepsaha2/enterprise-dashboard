import { Paper, Typography, Chip } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const StatCard = ({
  title,
  value,
  change,
  positive = true,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#181818",
        border: "1px solid #2A2A2A",
        borderRadius: 5,
        p: 3,
        overflow: "hidden",

        transition:
          "transform .25s ease, box-shadow .25s ease, border-color .25s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "#3A3A3A",
          boxShadow: "0 16px 36px rgba(0,0,0,.45)",
        },

        "&:hover .stat-value": {
          transform: "translateY(-3px)",
        },

        "&:hover .trend-chip": {
          transform: "scale(1.05)",
        },

        "&:hover .MuiChip-icon": {
          transform: "rotate(-12deg) scale(1.1)",
        },
      }}
    >
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 15,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {change && (
        <Chip
          className="trend-chip"
          size="small"
          icon={
            positive ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )
          }
          label={change}
          sx={{
            mb: 2,

            bgcolor: positive
              ? "rgba(34,197,94,0.12)"
              : "rgba(239,68,68,0.12)",

            color: positive ? "#22C55E" : "#EF4444",

            transition: "transform .25s ease",

            "& .MuiChip-label": {
              fontWeight: 600,
            },

            "& .MuiChip-icon": {
              color: positive ? "#22C55E" : "#EF4444",
              transition: "transform .25s ease",
            },
          }}
        />
      )}

      <Typography
        className="stat-value"
        sx={{
          fontSize: 34,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-1px",
          transition: "transform .25s ease",
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        vs last month
      </Typography>
    </Paper>
  );
};

export default StatCard;