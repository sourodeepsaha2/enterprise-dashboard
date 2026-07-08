import {
  Box,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const ChartHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
      >
        Revenue Overview
      </Typography>

      <Select
        defaultValue="30"
        size="small"
        sx={{
          minWidth: 160,
          bgcolor: "#181818",
          borderRadius: 2,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#2A2A2A",
          },

          "& .MuiSvgIcon-root": {
            color: "#FFFFFF",
          },
        }}
      >
        <MenuItem value="7">Last 7 Days</MenuItem>
        <MenuItem value="30">Last 30 Days</MenuItem>
        <MenuItem value="90">Last 90 Days</MenuItem>
      </Select>
    </Box>
  );
};

export default ChartHeader;
