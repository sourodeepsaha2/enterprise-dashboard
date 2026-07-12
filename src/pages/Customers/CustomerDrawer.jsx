import { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import CustomerStatusChip from "./CustomerStatusChip";
import CustomerTimeline from "./CustomerTimeline";

const CustomerDrawer = ({ 
  open, 
  onClose, 
  customer, 
  onUpdateCustomer 
}) => {
  const [noteText, setNoteText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  
  // Local edit states
  const [editName, setEditName] = useState("");
  const [editCompany, setEditCompany] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editCountry, setEditCountry] = useState("");

  // Sync edit states when customer changes
  useEffect(() => {
    if (customer) {
      setEditName(customer.name || "");
      setEditCompany(customer.company || "");
      setEditEmail(customer.email || "");
      setEditPhone(customer.phone || "");
      setEditCountry(customer.country || "");
      setIsEditing(false);
      setNoteText("");
    }
  }, [customer]);

  if (!customer) return null;

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    const newNote = {
      id: Date.now(),
      text: noteText,
      date: new Date().toISOString().split("T")[0],
    };
    const updatedCustomer = {
      ...customer,
      notes: [...(customer.notes || []), newNote],
    };
    onUpdateCustomer(updatedCustomer);
    setNoteText("");
  };

  const handleSaveChanges = () => {
    if (!editName.trim()) return;
    const updatedCustomer = {
      ...customer,
      name: editName,
      company: editCompany,
      email: editEmail,
      phone: editPhone,
      country: editCountry,
    };
    onUpdateCustomer(updatedCustomer);
    setIsEditing(false);
  };

  const handleToggleStatus = () => {
    const nextStatus = customer.status === "Active" ? "Inactive" : "Active";
    const updatedCustomer = {
      ...customer,
      status: nextStatus,
    };
    onUpdateCustomer(updatedCustomer);
  };

  // Compute AOV (Average Order Value)
  const aov = customer.ordersCount > 0 
    ? Math.round(customer.spent / customer.ordersCount) 
    : 0;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 480,
            maxWidth: "100vw",
            bgcolor: "#0F0F0F",
            color: "#FFFFFF",
            borderLeft: "1px solid #2A2A2A",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
          },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid #2A2A2A",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#141414",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Customer Details
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#808080" }}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      {/* Drawer Content Body (Scrollable) */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Stack spacing={4}>
          
          {/* PROFILE / EDIT MODE */}
          {!isEditing ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Avatar
                sx={{
                  width: 72,
                  height: 72,
                  bgcolor: "#2A2A2A",
                  color: "#FFFFFF",
                  fontSize: 32,
                  fontWeight: 600,
                  border: "2px solid #3A3A3A",
                }}
              >
                {customer.name.charAt(0)}
              </Avatar>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h5" fontWeight={700} noWrap>
                  {customer.name}
                </Typography>
                <Typography color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }}>
                  <BusinessOutlinedIcon sx={{ fontSize: 16 }} />
                  {customer.company || "No Company"}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                size="small"
                startIcon={<EditOutlinedIcon />}
                onClick={() => setIsEditing(true)}
                sx={{
                  borderColor: "#2A2A2A",
                  color: "#B3B3B3",
                  "&:hover": { borderColor: "#444444", bgcolor: "#1A1A1A", color: "#FFFFFF" }
                }}
              >
                Edit
              </Button>
            </Box>
          ) : (
            <Box sx={{ bgcolor: "#141414", p: 3, borderRadius: 3, border: "1px solid #2A2A2A" }}>
              <Typography variant="subtitle2" fontWeight={700} mb={2.5}>
                Edit Profile Info
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Name"
                  size="small"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Company"
                  size="small"
                  value={editCompany}
                  onChange={(e) => setEditCompany(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  size="small"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  size="small"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Country"
                  size="small"
                  value={editCountry}
                  onChange={(e) => setEditCountry(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <Box sx={{ display: "flex", gap: 1.5, mt: 1 }}>
                  <Button variant="contained" size="small" onClick={handleSaveChanges} sx={{ bgcolor: "#FFFFFF", color: "#000", "&:hover": { bgcolor: "#E0E0E0" } }}>
                    Save
                  </Button>
                  <Button variant="outlined" size="small" onClick={() => setIsEditing(false)} sx={{ borderColor: "#2A2A2A", color: "#B3B3B3" }}>
                    Cancel
                  </Button>
                </Box>
              </Stack>
            </Box>
          )}

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* QUICK CRM ACTIONS */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              CRM Quick Actions
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              <Button
                variant="outlined"
                component="a"
                href={`mailto:${customer.email}`}
                startIcon={<SendOutlinedIcon />}
                sx={{
                  flex: 1,
                  minWidth: "120px",
                  borderColor: "#2A2A2A",
                  color: "#FFFFFF",
                  textTransform: "none",
                  borderRadius: "10px",
                  "&:hover": { borderColor: "#444444", bgcolor: "#1A1A1A" }
                }}
              >
                Send Email
              </Button>

              <Button
                variant="outlined"
                onClick={handleToggleStatus}
                startIcon={customer.status === "Active" ? <BlockOutlinedIcon /> : <CheckCircleOutlinedIcon />}
                sx={{
                  flex: 1,
                  minWidth: "120px",
                  borderColor: "#2A2A2A",
                  color: customer.status === "Active" ? "#EF4444" : "#22C55E",
                  textTransform: "none",
                  borderRadius: "10px",
                  "&:hover": { 
                    borderColor: customer.status === "Active" ? "#EF4444" : "#22C55E", 
                    bgcolor: customer.status === "Active" ? "rgba(239,68,68,0.06)" : "rgba(34,197,94,0.06)" 
                  }
                }}
              >
                {customer.status === "Active" ? "Deactivate" : "Activate"}
              </Button>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* CONTACT INFORMATION */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2.5}>
              Contact Details
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AlternateEmailOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Email Address</Typography>
                  <Typography variant="body2" fontWeight={500}>{customer.email}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocalPhoneOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Phone Number</Typography>
                  <Typography variant="body2" fontWeight={500}>{customer.phone || "Not Provided"}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PublicOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Country / Region</Typography>
                  <Typography variant="body2" fontWeight={500}>{customer.country || "Not Provided"}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CalendarTodayOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Joined Date</Typography>
                  <Typography variant="body2" fontWeight={500}>{customer.joinedDate || "Unknown"}</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* LIFETIME VALUE & STATUS */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2.5}>
              Lifecycle & Revenue
            </Typography>
            <Grid container spacing={2}>
              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Status</Typography>
                  <Box sx={{ mt: 1 }}>
                    <CustomerStatusChip status={customer.status} />
                  </Box>
                </Box>
              </Grid>

              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Total Spent</Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                    {customer.spentFormatted || ("$" + customer.spent)}
                  </Typography>
                </Box>
              </Grid>

              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Orders Count</Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                    {customer.ordersCount}
                  </Typography>
                </Box>
              </Grid>

              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Avg. Order Value (AOV)</Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                    ${aov}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* RECENT ORDERS LIST */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              Recent Orders
            </Typography>
            {customer.ordersCount > 0 ? (
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#141414", p: 1.5, borderRadius: 2, border: "1px solid #2A2A2A" }}>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>Order #1042</Typography>
                    <Typography variant="caption" color="text.secondary">Last active purchase</Typography>
                  </Box>
                  <Typography variant="body2" fontWeight={700} color="#22C55E">$320 • Paid</Typography>
                </Box>
                {customer.ordersCount > 1 && (
                  <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#141414", p: 1.5, borderRadius: 2, border: "1px solid #2A2A2A" }}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>Order #1038</Typography>
                      <Typography variant="caption" color="text.secondary">Previous purchase</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={700} color="#22C55E">$180 • Paid</Typography>
                  </Box>
                )}
              </Stack>
            ) : (
              <Typography variant="body2" color="text.secondary">No orders recorded.</Typography>
            )}
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* NOTES MANAGER */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              Agent Notes
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <TextField
                  fullWidth
                  placeholder="Type a new customer note..."
                  size="small"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      bgcolor: "#141414",
                      "& fieldset": { borderColor: "#2A2A2A" }
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  onClick={handleAddNote}
                  sx={{ bgcolor: "#FFFFFF", color: "#000", "&:hover": { bgcolor: "#E0E0E0" }, textTransform: "none", fontWeight: 600 }}
                >
                  Add
                </Button>
              </Box>

              {customer.notes && customer.notes.length > 0 ? (
                <Stack spacing={1.5}>
                  {customer.notes.map((note) => (
                    <Box 
                      key={note.id} 
                      sx={{ 
                        p: 2, 
                        borderRadius: 2.5, 
                        bgcolor: "#141414", 
                        border: "1px solid #2A2A2A", 
                        position: "relative" 
                      }}
                    >
                      <Typography variant="body2" sx={{ pr: 2, lineHeight: 1.4 }}>
                        {note.text}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1, fontSize: "0.7rem", textAlign: "right" }}>
                        {note.date}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Typography variant="body2" color="text.secondary">No notes left on this customer yet.</Typography>
              )}
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* RECENT ACTIVITY TIMELINE */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={3}>
              Activity History
            </Typography>
            <CustomerTimeline customer={customer} />
          </Box>

        </Stack>
      </Box>
    </Drawer>
  );
};

export default CustomerDrawer;