import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Switch,
  FormControlLabel,
  Divider,
  Alert,
  Snackbar,
} from "@mui/material";

const NotificationSettings = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [billingAlerts, setBillingAlerts] = useState(false);
  const [marketingAlerts, setMarketingAlerts] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleToggle = (setter, val) => {
    setter(val);
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography variant="h6" fontWeight={700} mb={3}>
        Platform Notifications
      </Typography>

      <Stack spacing={3}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 3 }}>
          <Box>
            <Typography variant="body2" fontWeight={600}>Email Notifications</Typography>
            <Typography variant="caption" color="text.secondary">Receive operational logs, activity reviews, and customer notes additions directly to your inbox.</Typography>
          </Box>
          <Switch
            checked={emailAlerts}
            onChange={(e) => handleToggle(setEmailAlerts, e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#22C55E",
                "& + .MuiSwitch-track": { bgcolor: "#22C55E" },
              },
            }}
          />
        </Box>

        <Divider sx={{ borderColor: "#2A2A2A" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 3 }}>
          <Box>
            <Typography variant="body2" fontWeight={600}>Critical Security Warnings</Typography>
            <Typography variant="caption" color="text.secondary">Instant email and desktop alert updates for unauthorized logins, password resets, or API key generations.</Typography>
          </Box>
          <Switch
            checked={securityAlerts}
            onChange={(e) => handleToggle(setSecurityAlerts, e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#22C55E",
                "& + .MuiSwitch-track": { bgcolor: "#22C55E" },
              },
            }}
          />
        </Box>

        <Divider sx={{ borderColor: "#2A2A2A" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 3 }}>
          <Box>
            <Typography variant="body2" fontWeight={600}>Billing Summaries</Typography>
            <Typography variant="caption" color="text.secondary">Consolidated monthly invoices, subscription renewal reminders, and payment failure notifications.</Typography>
          </Box>
          <Switch
            checked={billingAlerts}
            onChange={(e) => handleToggle(setBillingAlerts, e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#22C55E",
                "& + .MuiSwitch-track": { bgcolor: "#22C55E" },
              },
            }}
          />
        </Box>

        <Divider sx={{ borderColor: "#2A2A2A" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 3 }}>
          <Box>
            <Typography variant="body2" fontWeight={600}>Marketing & Features Newsletter</Typography>
            <Typography variant="caption" color="text.secondary">Periodic tips, product catalogs releases, and discount vouchers for third-party integrations.</Typography>
          </Box>
          <Switch
            checked={marketingAlerts}
            onChange={(e) => handleToggle(setMarketingAlerts, e.target.checked)}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#22C55E",
                "& + .MuiSwitch-track": { bgcolor: "#22C55E" },
              },
            }}
          />
        </Box>
      </Stack>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          sx={{ bgcolor: "#181818", color: "#FFFFFF", border: "1px solid #2A2A2A", fontWeight: 600 }}
        >
          Notification configuration updated!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NotificationSettings;
