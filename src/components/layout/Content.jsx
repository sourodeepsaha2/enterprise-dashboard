import { Box } from "@mui/material";

const Content = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        ml: "240px",      // Sidebar width
        mt: "90px",       // Header height
        p: 4,
        minHeight: "100vh",
        bgcolor: "#0B0B0B",
      }}
    >
      {children}
    </Box>
  );
};

export default Content;