import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 80px)",
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            px: 5,
            py: 4,
            overflowY: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;