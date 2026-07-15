import { Box, Typography, MenuItem, Select, FormControl } from "@mui/material";

const AnalyticsHeader = ({ dateRange, onDateRangeChange }) => {
  return (
    <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1,
          }}
        >
          Analytics
        </Typography>
        <Typography
          sx={{
            color: "text.secondary",
          }}
        >
          Monitor your platform traffic, conversions, and pages activity.
        </Typography>
      </Box>

      <FormControl size="small" sx={{ minWidth: 160 }}>
        <Select
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
          sx={{
            bgcolor: "#181818",
            borderRadius: 3,
            color: "#FFFFFF",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2A2A2A",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#444444",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FFFFFF",
            },
          }}
        >
          <MenuItem value="7d">Last 7 Days</MenuItem>
          <MenuItem value="30d">Last 30 Days</MenuItem>
          <MenuItem value="90d">Last 90 Days</MenuItem>
          <MenuItem value="ytd">Year to Date</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default AnalyticsHeader;
