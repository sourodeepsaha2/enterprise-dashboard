import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import Logo from "../common/Logo";

const initialNotifications = [
  { id: 1, text: "Payment of $320 received from John Smith", time: "10m ago", read: false, type: "success" },
  { id: 2, text: "Inventory Warning: DB Optimizer Cloud is low in stock", time: "1h ago", read: false, type: "warning" },
  { id: 3, text: "New customer account registered: Sarah Wilson", time: "2h ago", read: false, type: "info" },
];

const Header = () => {
  const navigate = useNavigate();
  
  // Anchors for Popover Menus
  const [notifyAnchor, setNotifyAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);
  
  // Notifications State
  const [notifications, setNotifications] = useState(initialNotifications);

  const isNotifyOpen = Boolean(notifyAnchor);
  const isProfileOpen = Boolean(profileAnchor);

  const handleNotifyOpen = (event) => {
    setNotifyAnchor(event.currentTarget);
  };

  const handleNotifyClose = () => {
    setNotifyAnchor(null);
  };

  const handleProfileOpen = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleClearNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const handleSettingsNavigate = () => {
    handleProfileClose();
    navigate("/settings");
  };

  const handleLogout = () => {
    handleProfileClose();
    alert("Signing out... (Mock frontend logout sequence initiated)");
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: "#111111",
        borderBottom: "1px solid #2A2A2A",
        zIndex: (theme) => theme.zIndex.appBar,     
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
            gap: 1.5,
          }}
        >
          {/* Notification Icon button with Active badge count */}
          <IconButton
            onClick={handleNotifyOpen}
            sx={{
              color: "#FFFFFF",
              "&:hover": { bgcolor: "#1A1A1A" },
            }}
          >
            <Badge
              badgeContent={unreadCount}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "#22C55E",
                  color: "#000000",
                  fontWeight: 700,
                },
              }}
            >
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          {/* Settings Gear with Router Navigate action */}
          <IconButton
            onClick={() => navigate("/settings")}
            sx={{
              color: "#FFFFFF",
              "&:hover": { bgcolor: "#1A1A1A" },
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>

          {/* User Avatar clicking triggers Profile Details Popup */}
          <Avatar
            onClick={handleProfileOpen}
            sx={{
              width: 44,
              height: 44,
              bgcolor: "#FFFFFF",
              color: "#000000",
              fontWeight: 700,
              ml: 1,
              cursor: "pointer",
              border: "1px solid #2A2A2A",
              transition: "transform 0.15s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            S
          </Avatar>
        </Box>

        {/* NOTIFICATIONS DROPDOWN MENU */}
        <Menu
          anchorEl={notifyAnchor}
          open={isNotifyOpen}
          onClose={handleNotifyClose}
          slotProps={{
            paper: {
              sx: {
                width: 360,
                bgcolor: "#0F0F0F",
                color: "#FFFFFF",
                border: "1px solid #2A2A2A",
                borderRadius: 3.5,
                mt: 1.5,
                p: 0,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="subtitle2" fontWeight={700}>
              System Notifications
            </Typography>
            {unreadCount > 0 && (
              <Button
                variant="text"
                size="small"
                onClick={handleMarkAllRead}
                sx={{
                  color: "#22C55E",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  p: 0,
                  minWidth: 0,
                  "&:hover": { bgcolor: "transparent", color: "#10B981" },
                }}
              >
                Mark all as read
              </Button>
            )}
          </Box>
          
          <Divider sx={{ borderColor: "#2A2A2A" }} />
          
          <Box sx={{ maxHeight: 280, overflowY: "auto" }}>
            {notifications.map((n) => (
              <MenuItem
                key={n.id}
                onClick={() => handleClearNotification(n.id)}
                sx={{
                  py: 1.8,
                  px: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  bgcolor: n.read ? "transparent" : "rgba(255,255,255,0.02)",
                  borderBottom: "1px solid #1A1A1A",
                  "&:hover": { bgcolor: "#181818" },
                }}
              >
                <Box sx={{ mt: 0.5, color: n.type === "warning" ? "#F59E0B" : n.type === "success" ? "#22C55E" : "#3B82F6" }}>
                  {n.type === "warning" ? <ErrorOutlineRoundedIcon sx={{ fontSize: 18 }} /> : n.type === "info" ? <PersonAddOutlinedIcon sx={{ fontSize: 18 }} /> : <InfoOutlinedIcon sx={{ fontSize: 18 }} />}
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem", lineHeight: 1.4, fontWeight: n.read ? 400 : 600, wordBreak: "break-word" }}>
                    {n.text}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.5, fontSize: "0.72rem" }}>
                    {n.time}
                  </Typography>
                </Box>
                {!n.read && (
                  <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#22C55E", mt: 1 }} />
                )}
              </MenuItem>
            ))}
            {notifications.length === 0 && (
              <Box sx={{ py: 4, px: 2, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  No new notifications.
                </Typography>
              </Box>
            )}
          </Box>
        </Menu>

        {/* USER PROFILE DROPDOWN MENU */}
        <Menu
          anchorEl={profileAnchor}
          open={isProfileOpen}
          onClose={handleProfileClose}
          slotProps={{
            paper: {
              sx: {
                width: 240,
                bgcolor: "#0F0F0F",
                color: "#FFFFFF",
                border: "1px solid #2A2A2A",
                borderRadius: 3.5,
                mt: 1.5,
                p: 0,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {/* User profile card card header */}
          <Box sx={{ p: 2, display: "flex", gap: 1.5, alignItems: "center" }}>
            <Avatar sx={{ bgcolor: "#FFFFFF", color: "#000", fontWeight: 700 }}>
              S
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="body2" fontWeight={700} noWrap>
                John Smith
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                john@company.com
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          <MenuItem onClick={handleSettingsNavigate} sx={{ py: 1.5, "&:hover": { bgcolor: "#181818" } }}>
            <ListItemIcon sx={{ color: "#808080" }}>
              <ManageAccountsOutlinedIcon sx={{ fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText primary="Settings" primaryTypographyProps={{ fontSize: "0.88rem" }} />
          </MenuItem>

          <MenuItem onClick={handleLogout} sx={{ py: 1.5, color: "#EF4444", "&:hover": { bgcolor: "rgba(239, 68, 68, 0.06)" } }}>
            <ListItemIcon sx={{ color: "#EF4444" }}>
              <LogoutOutlinedIcon sx={{ fontSize: 20 }} />
            </ListItemIcon>
            <ListItemText primary="Log out" primaryTypographyProps={{ fontSize: "0.88rem" }} />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;