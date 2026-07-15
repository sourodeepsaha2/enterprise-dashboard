import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import MainLayout from "../../components/layout/MainLayout";
import SectionCard from "../../components/ui/SectionCard";
import ProfileSettings from "./ProfileSettings";
import SecuritySettings from "./SecuritySettings";
import NotificationSettings from "./NotificationSettings";
import ApiSettings from "./ApiSettings";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 4 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} mb={1}>
          Organization Settings
        </Typography>
        <Typography color="text.secondary">
          Configure profile setups, alert preferences, security rules, and active developer integrations.
        </Typography>
      </Box>

      <SectionCard sx={{ p: 4, bgcolor: "#181818" }}>
        <Box sx={{ borderBottom: "1px solid #2A2A2A" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                color: "#808080",
                fontSize: "0.95rem",
                pb: 2,
                mr: 2,
                "&.Mui-selected": {
                  color: "#FFFFFF",
                },
              },
              "& .MuiTabs-indicator": {
                bgcolor: "#FFFFFF",
                height: "3px",
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab label="Public Profile" id="settings-tab-0" />
            <Tab label="Access Security" id="settings-tab-1" />
            <Tab label="Notifications" id="settings-tab-2" />
            <Tab label="Developer API Keys" id="settings-tab-3" />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <ProfileSettings />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SecuritySettings />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <NotificationSettings />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ApiSettings />
        </CustomTabPanel>
      </SectionCard>
    </MainLayout>
  );
};

export default Settings;