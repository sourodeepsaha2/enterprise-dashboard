import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import Logo from "../common/Logo";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#111111",
        borderBottom: "1px solid #2A2A2A",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 3,
          height: 90,
        }}
      >
        {/* Logo */}
        <Logo />

        {/* Search */}
        <Box
          sx={{
            width: 420,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search customers, orders..."
            variant="outlined"
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon sx={{ color: "#8A8A8A" }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: "#181818",
                borderRadius: 10,
                color: "#FFFFFF",

                "& fieldset": {
                  borderColor: "#2A2A2A",
                },

                "&:hover fieldset": {
                  borderColor: "#444444",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#FFFFFF",
                },
              },
            }}
          />
        </Box>

        {/* Actions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton
            sx={{
              color: "#FFFFFF",
            }}
          >
            <NotificationsNoneRoundedIcon />
          </IconButton>

          <IconButton
            sx={{
              color: "#FFFFFF",
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 46,
              height: 46,
              bgcolor: "#FFFFFF",
              color: "#000000",
              fontWeight: 700,
              ml: 1,
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