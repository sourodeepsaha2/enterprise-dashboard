import { Box } from "@mui/material";

import Header from "./Header";
import Sidebar from "./Sidebar";

import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_PX,
} from "../../utils/layout";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        pt: HEADER_HEIGHT_PX,
      }}
    >
      <Header />

      <Box
        sx={{
          display: "flex",
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <Sidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
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