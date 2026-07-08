import { Box, Chip, Typography } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import SectionCard from "./SectionCard";

const StatCard = ({
  title,
  value,
  change,
  positive = true,
}) => {
  return (
    <SectionCard
      sx={{
        height: 155,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        cursor: "pointer",
        transition: "all .25s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "#444",
        },
      }}
    >
      {/* Top */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          sx={{
            fontSize: 15,
            color: "text.secondary",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>

        <Chip
          size="small"
          icon={
            positive ? (
              <TrendingUpRoundedIcon />
            ) : (
              <TrendingDownRoundedIcon />
            )
          }
          label={change.replace(" from last month", "")}
          sx={{
            height: 28,

            bgcolor: positive
              ? "rgba(34,197,94,.12)"
              : "rgba(239,68,68,.12)",

            color: positive ? "#22C55E" : "#EF4444",

            borderRadius: 2,

            "& .MuiChip-label": {
              px: 1,
              fontWeight: 600,
              fontSize: 12,
            },

            "& .MuiChip-icon": {
              color: positive ? "#22C55E" : "#EF4444",
              fontSize: 16,
            },
          }}
        />
      </Box>

      {/* Value */}

      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>

      {/* Bottom */}

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 14,
        }}
      >
        vs last month
      </Typography>
    </SectionCard>
  );
};

export default StatCard;