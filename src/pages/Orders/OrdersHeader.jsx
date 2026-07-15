import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const OrdersHeader = ({ searchQuery, onSearchChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 1,
        }}
      >
        Orders Ledger
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 4,
        }}
      >
        Track sales invoices, processing orders, shipping states, and client refunds.
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
          placeholder="Search orders by ID or customer..."
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
          variant="outlined"
          startIcon={<FileDownloadOutlinedIcon />}
          sx={{
            height: 52,
            px: 3.5,
            borderRadius: "14px",
            borderColor: "#2A2A2A",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "0.95rem",
            textTransform: "none",
            transition: "all .25s ease",
            "&:hover": {
              borderColor: "#444444",
              bgcolor: "#1A1A1A",
            },
          }}
        >
          Export Ledger
        </Button>
      </Box>
    </Box>
  );
};

export default OrdersHeader;
