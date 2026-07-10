import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import {
  HEADER_HEIGHT,
  SIDEBAR_WIDTH,
} from "../../utils/layout";

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    active: true,
  },
  {
    title: "Analytics",
    icon: <QueryStatsOutlinedIcon />,
  },
  {
    title: "Customers",
    icon: <GroupOutlinedIcon />,
  },
  {
    title: "Products",
    icon: <Inventory2OutlinedIcon />,
  },
  {
    title: "Orders",
    icon: <ShoppingCartOutlinedIcon />,
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: SIDEBAR_WIDTH,
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,

        position: "sticky",
        top: 0,

        flexShrink: 0,

        bgcolor: "#111111",

        borderRight: "1px solid #2A2A2A",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        py: 3,
      }}
    >
      <Box>
        <Typography
          sx={{
            px: 3,
            mb: 2,
            color: "#707070",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1.5,
          }}
        >
          MAIN
        </Typography>

        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.title}
              sx={{
                mb: 1,
                py: 1.5,
                borderRadius: 3,

                bgcolor: item.active ? "#FFFFFF" : "transparent",

                color: item.active ? "#000000" : "#B3B3B3",

                "&:hover": {
                  bgcolor: item.active ? "#FFFFFF" : "#1C1C1C",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 42,
                  color: item.active ? "#000000" : "#B3B3B3",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: item.active ? 600 : 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Typography
          sx={{
            px: 3,
            mt: 5,
            mb: 2,
            color: "#707070",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: 1.5,
          }}
        >
          SYSTEM
        </Typography>

        <List sx={{ px: 2 }}>
          <ListItemButton
            sx={{
              py: 1.5,
              borderRadius: 3,

              color: "#B3B3B3",

              "&:hover": {
                bgcolor: "#1C1C1C",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 42,
                color: "#B3B3B3",
              }}
            >
              <SettingsOutlinedIcon />
            </ListItemIcon>

            <ListItemText
              primary="Settings"
              primaryTypographyProps={{
                fontSize: 15,
              }}
            />
          </ListItemButton>
        </List>
      </Box>

      <Typography
        sx={{
          textAlign: "center",
          color: "#666666",
          fontSize: 13,
        }}
      >
        Enterprise v1.0
      </Typography>
    </Box>
  );
};

export default Sidebar;