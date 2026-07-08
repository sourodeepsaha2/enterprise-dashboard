import {
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const menuItems = [
  "Dashboard",
  "Analytics",
  "Customers",
  "Products",
  "Orders",
  "Settings",
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#111111",
        borderRight: "1px solid #2A2A2A",
        py: 3,
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item}
            sx={{
              mx: 2,
              mb: 1,
              borderRadius: 2,

              "&:hover": {
                bgcolor: "#181818",
              },
            }}
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                color: "white",
                fontSize: 15,
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;