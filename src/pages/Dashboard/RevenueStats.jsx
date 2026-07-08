import { Box, Chip, Typography } from "@mui/material";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const RevenueStats = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        sx={{
          color: "text.secondary",
          fontSize: 14,
          mb: 1,
        }}
      >
        Revenue
      </Typography>

      <Typography
        sx={{
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-2px",
        }}
      >
        $124,450
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Chip
          size="small"
          icon={<TrendingUpRoundedIcon />}
          label="+12.5%"
          sx={{
            bgcolor: "rgba(34,197,94,.12)",
            color: "#22C55E",

            "& .MuiChip-icon": {
              color: "#22C55E",
            },

            "& .MuiChip-label": {
              fontWeight: 600,
            },
          }}
        />

        <Typography
          sx={{
            color: "text.secondary",
          }}
        >
          compared to last month
        </Typography>
      </Box>
    </Box>
  );
};

export default RevenueStats;