import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [enable2FA, setEnable2FA] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePasswordSave = () => {
    if (!currentPassword || !newPassword || !confirmPassword) return;
    setOpenSnackbar(true);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontWeight={700} mb={3}>
        Change Password
      </Typography>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Current Password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <TextField
          fullWidth
          label="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#141414",
              "& fieldset": { borderColor: "#2A2A2A" },
            },
          }}
        />

        <TextField
          fullWidth
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            onClick={handlePasswordSave}
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
            Update Password
          </Button>
        </Box>

        <Divider sx={{ borderColor: "#2A2A2A", my: 2 }} />

        <Typography variant="h6" fontWeight={700} mb={1}>
          Two-Factor Authentication (2FA)
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Secure your account with an additional authentication layer via a phone security key.
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={enable2FA}
              onChange={(e) => setEnable2FA(e.target.checked)}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#22C55E",
                  "& + .MuiSwitch-track": {
                    bgcolor: "#22C55E",
                  },
                },
              }}
            />
          }
          label={
            <Typography variant="body2" fontWeight={600} color={enable2FA ? "#22C55E" : "#808080"}>
              {enable2FA ? "Two-Factor Auth is ENABLED" : "Two-Factor Auth is DISABLED"}
            </Typography>
          }
        />
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
          Password updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SecuritySettings;
