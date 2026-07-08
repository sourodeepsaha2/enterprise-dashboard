import { Box, Typography } from "@mui/material";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          letterSpacing: "-1px",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;