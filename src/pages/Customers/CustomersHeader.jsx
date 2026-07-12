import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const CustomersHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        Customers
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 4,
        }}
      >
        Manage your customer database.
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        <TextField
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{
            width: {
              xs: "100%",
              md: 380,
            },

            "& .MuiOutlinedInput-root": {
              height: 52,
              bgcolor: "#181818",
              borderRadius: "14px",
              transition: "all .25s ease",

              "& fieldset": {
                borderColor: "#2A2A2A",
              },

              "&:hover fieldset": {
                borderColor: "#3A3A3A",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#FFFFFF",
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{
                      color: "#808080",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          sx={{
            height: 52,
            px: 3.5,
            borderRadius: "14px",

            bgcolor: "#FFFFFF",
            color: "#000",

            fontWeight: 600,
            fontSize: "0.95rem",

            textTransform: "none",

            boxShadow: "0 8px 24px rgba(255,255,255,.08)",

            transition: "all .25s ease",

            "&:hover": {
              bgcolor: "#F2F2F2",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 28px rgba(255,255,255,.12)",
            },
          }}
        >
          Add Customer
        </Button>
      </Box>
    </Box>
  );
};

export default CustomersHeader;