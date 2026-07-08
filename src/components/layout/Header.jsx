import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#111111",
        borderBottom: "1px solid #2A2A2A",
      }}
    >
      <Toolbar
        sx={{
          height: 80,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,
              bgcolor: "#FFFFFF",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#000000",
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              E
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: "-0.5px",
            }}
          >
            Enterprise
          </Typography>
        </Box>

        {/* Search */}
        <Box
          sx={{
            width: 320,
            height: 44,
            bgcolor: "#181818",
            border: "1px solid #2A2A2A",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            px: 2,
          }}
        >
          <SearchIcon
            sx={{
              color: "#808080",
              mr: 1,
            }}
          />

          <InputBase
            placeholder="Search..."
            sx={{
              flex: 1,
              color: "#FFFFFF",
            }}
          />
        </Box>

        {/* Right */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton sx={{ color: "#FFFFFF" }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton sx={{ color: "#FFFFFF" }}>
            <SettingsOutlinedIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#FFFFFF",
              color: "#000000",
              fontWeight: 700,
            }}
          >
            S
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;