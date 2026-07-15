import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Avatar,
  Alert,
  Snackbar,
} from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const ProfileSettings = () => {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john@company.com");
  const [role, setRole] = useState("Administrator");
  const [timezone, setTimezone] = useState("UTC - 05:00 (EST)");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontWeight={700} mb={3}>
        Public Profile
      </Typography>

      <Stack spacing={3}>
        {/* Avatar Upload mockup */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 1 }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#FFFFFF",
              color: "#000000",
              fontSize: 32,
              fontWeight: 700,
              border: "1px solid #2A2A2A",
            }}
          >
            J
          </Avatar>
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                borderColor: "#2A2A2A",
                color: "#FFFFFF",
                textTransform: "none",
                mr: 1.5,
                "&:hover": { borderColor: "#444444", bgcolor: "#1A1A1A" },
              }}
            >
              Upload Photo
            </Button>
            <Button
              variant="text"
              size="small"
              sx={{
                color: "#EF4444",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(239, 68, 68, 0.08)" },
              }}
            >
              Remove
            </Button>
            <Typography variant="caption" color="text.secondary" display="block" mt={1}>
              JPG, GIF or PNG. Max size of 800K.
            </Typography>
          </Box>
        </Box>

        <TextField
          fullWidth
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Role / Permission"
          value={role}
          disabled
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Local Timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <Box sx={{ pt: 1 }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              height: 46,
              px: 4,
              borderRadius: "10px",
              bgcolor: "#FFFFFF",
              color: "#000",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { bgcolor: "#E0E0E0" },
            }}
          >
            Save Profile Settings
          </Button>
        </Box>
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          sx={{ bgcolor: "#22C55E", color: "#000000", fontWeight: 600 }}
        >
          Profile settings updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProfileSettings;
