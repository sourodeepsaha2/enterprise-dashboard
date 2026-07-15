import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const initialKeys = [
  { id: 1, name: "Production Key", token: "sk_live_51O...c47X", created: "2026-01-10", lastUsed: "Active today" },
  { id: 2, name: "Staging Sandbox", token: "sk_test_51O...w81Y", created: "2026-03-24", lastUsed: "Active yesterday" },
];

const ApiSettings = () => {
  const [keysList, setKeysList] = useState(initialKeys);
  const [openModal, setOpenModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [generatedKey, setGeneratedKey] = useState(null);
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return;
    const randomHex = Math.random().toString(16).substring(2, 10) + Math.random().toString(16).substring(2, 10);
    const keyToken = `sk_live_${randomHex}`;
    
    const newKey = {
      id: Date.now(),
      name: newKeyName,
      token: `${keyToken.substring(0, 10)}...${keyToken.substring(keyToken.length - 4)}`,
      created: new Date().toISOString().split("T")[0],
      lastUsed: "Never used",
    };

    setKeysList([...keysList, newKey]);
    setGeneratedKey(keyToken); // Store raw token to reveal it once
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setNewKeyName("");
    setGeneratedKey(null);
  };

  const handleCopyKey = () => {
    if (!generatedKey) return;
    navigator.clipboard.writeText(generatedKey);
    setSnackbarMessage("API Key copied to clipboard!");
    setOpenSnackbar(true);
  };

  const handleRevokeKey = (id) => {
    setKeysList(keysList.filter((k) => k.id !== id));
    setSnackbarMessage("API key has been revoked.");
    setOpenSnackbar(true);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2, mb: 3 }}>
        <Box>
          <Typography variant="h6" fontWeight={700} mb={1}>
            API Access Keys
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Generate and manage secrets key tokens to authenticate external application queries.
          </Typography>
        </Box>
        <Button
          variant="contained"
          onClick={() => setOpenModal(true)}
          sx={{
            bgcolor: "#FFFFFF",
            color: "#000000",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "10px",
            height: 40,
            px: 3,
            "&:hover": { bgcolor: "#E0E0E0" },
          }}
        >
          Create Secret Key
        </Button>
      </Box>

      {/* API Keys Table */}
      <TableContainer sx={{ bgcolor: "#141414", borderRadius: 3, border: "1px solid #2A2A2A", overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ "& th": { color: "text.secondary", fontWeight: 600, borderBottom: "1px solid #2A2A2A", bgcolor: "#1A1A1A" } }}>
              <TableCell>Key Name</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Last Active</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ "& tr:hover": { bgcolor: "#1C1C1C" }, "& td": { borderColor: "#2A2A2A", py: 2 } }}>
            {keysList.map((k) => (
              <TableRow key={k.id}>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: 600 }}>{k.name}</TableCell>
                <TableCell sx={{ fontFamily: "monospace", color: "text.secondary" }}>{k.token}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{k.created}</TableCell>
                <TableCell sx={{ color: "text.secondary" }}>{k.lastUsed}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleRevokeKey(k.id)} sx={{ color: "#EF4444", "&:hover": { bgcolor: "rgba(239, 68, 68, 0.08)" } }}>
                    <DeleteOutlineRoundedIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {keysList.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ color: "text.secondary", py: 4 }}>
                  No active API keys found. Click Create Secret Key to make one.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* CREATE MODAL */}
      <Dialog 
        open={openModal} 
        onClose={handleCloseModal}
        PaperProps={{
          sx: {
            bgcolor: "#0F0F0F",
            color: "#FFFFFF",
            border: "1px solid #2A2A2A",
            borderRadius: 4,
            width: 440,
            p: 1.5,
          }
        }}
      >
        <DialogTitle fontWeight={700} sx={{ pb: 1 }}>
          {!generatedKey ? "Create Secret Key" : "Save Your Secret Key"}
        </DialogTitle>
        <DialogContent sx={{ pb: 1 }}>
          {!generatedKey ? (
            <Stack spacing={2} sx={{ pt: 1.5 }}>
              <Typography variant="body2" color="text.secondary">
                Give your API key a friendly name to identify it in the list.
              </Typography>
              <TextField
                fullWidth
                label="Key Name"
                size="small"
                placeholder="e.g. Next.js App Client"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#141414",
                    "& fieldset": { borderColor: "#2A2A2A" }
                  }
                }}
              />
            </Stack>
          ) : (
            <Stack spacing={2.5} sx={{ pt: 1.5 }}>
              <Alert severity="warning" variant="outlined" sx={{ borderColor: "rgba(245, 158, 11, 0.3)", bgcolor: "rgba(245, 158, 11, 0.06)", color: "#F59E0B" }}>
                Make sure to copy this key now. For your security, it will not be shown again!
              </Alert>

              <Box sx={{ display: "flex", gap: 1, bgcolor: "#141414", p: 1.5, borderRadius: 2, border: "1px solid #2A2A2A", alignItems: "center" }}>
                <KeyRoundedIcon sx={{ color: "#808080" }} />
                <Typography variant="body2" sx={{ fontFamily: "monospace", flex: 1, wordBreak: "break-all" }}>
                  {generatedKey}
                </Typography>
                <IconButton onClick={handleCopyKey} sx={{ color: "#FFFFFF", "&:hover": { bgcolor: "#2A2A2A" } }}>
                  <ContentCopyOutlinedIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
            </Stack>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          {!generatedKey ? (
            <>
              <Button onClick={handleCloseModal} sx={{ color: "#B3B3B3", textTransform: "none" }}>
                Cancel
              </Button>
              <Button 
                onClick={handleCreateKey}
                variant="contained"
                sx={{ bgcolor: "#FFFFFF", color: "#000", "&:hover": { bgcolor: "#E0E0E0" }, textTransform: "none", fontWeight: 600 }}
              >
                Create Key
              </Button>
            </>
          ) : (
            <Button onClick={handleCloseModal} variant="contained" sx={{ bgcolor: "#FFFFFF", color: "#000", "&:hover": { bgcolor: "#E0E0E0" }, textTransform: "none", fontWeight: 600, px: 4 }}>
              Done
            </Button>
          )}
        </DialogActions>
      </Dialog>

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
          sx={{ bgcolor: "#181818", color: "#FFFFFF", border: "1px solid #2A2A2A", fontWeight: 600 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ApiSettings;
