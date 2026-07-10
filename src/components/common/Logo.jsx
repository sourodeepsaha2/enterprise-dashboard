import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "4px",
          p: "6px",
          bgcolor: "background.paper",
          transition: "all .25s ease",

          "&:hover": {
            transform: "rotate(-3deg)",
            borderColor: "#FFFFFF",
          },
        }}
      >
        <Box sx={{ bgcolor: "#FFFFFF", borderRadius: "2px" }} />
        <Box sx={{ border: "1px solid #FFFFFF", borderRadius: "2px" }} />
        <Box sx={{ border: "1px solid #FFFFFF", borderRadius: "2px" }} />
        <Box sx={{ bgcolor: "#FFFFFF", borderRadius: "2px" }} />
      </Box>

      <Typography
        sx={{
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-1px",
          lineHeight: 1,
        }}
      >
        Enterprise
      </Typography>
    </Box>
  );
};

export default Logo;