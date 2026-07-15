import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.8,
        cursor: "pointer",
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 32 32"
        sx={{
          width: 32,
          height: 32,
          transition: "transform .3s ease",
          "&:hover": {
            transform: "scale(1.1) rotate(5deg)",
          },
        }}
      >
        <defs>
          <linearGradient id="logo-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8B5CF6" />
            <stop offset="100%" stop-color="#EC4899" />
          </linearGradient>
          <linearGradient id="logo-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="100%" stop-color="#06B6D4" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="16" r="9" stroke="url(#logo-grad1)" stroke-width="3.5" fill="none" opacity="0.9" />
        <circle cx="20" cy="16" r="9" stroke="url(#logo-grad2)" stroke-width="3.5" fill="none" opacity="0.9" />
      </Box>

      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: "-0.5px",
          background: "linear-gradient(90deg, #FFFFFF 0%, #E0E0E0 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Acuity
      </Typography>
    </Box>
  );
};

export default Logo;