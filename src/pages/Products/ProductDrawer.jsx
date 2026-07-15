import { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
  Grid,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ProductStatusChip from "./ProductStatusChip";

const ProductDrawer = ({
  open,
  onClose,
  product,
  onUpdateProduct,
}) => {
  const [stockAdjustment, setStockAdjustment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Local edit states
  const [editName, setEditName] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    if (product) {
      setEditName(product.name || "");
      setEditCategory(product.category || "");
      setEditPrice(product.price || "");
      setEditDescription(product.description || "");
      setIsEditing(false);
      setStockAdjustment("");
    }
  }, [product]);

  if (!product) return null;

  const handleReplenishStock = () => {
    const qty = parseInt(stockAdjustment, 10);
    if (isNaN(qty) || qty <= 0) return;
    
    const newStock = product.stock + qty;
    let nextStatus = "Active";
    if (newStock === 0) nextStatus = "Out of Stock";
    else if (newStock <= 10) nextStatus = "Low Stock";

    const updatedProduct = {
      ...product,
      stock: newStock,
      status: nextStatus,
    };
    onUpdateProduct(updatedProduct);
    setStockAdjustment("");
  };

  const handleSaveChanges = () => {
    if (!editName.trim()) return;
    const priceNum = parseFloat(editPrice);
    const updatedProduct = {
      ...product,
      name: editName,
      category: editCategory,
      price: isNaN(priceNum) ? product.price : priceNum,
      priceFormatted: isNaN(priceNum) ? product.priceFormatted : `$${priceNum.toLocaleString()}`,
      description: editDescription,
    };
    onUpdateProduct(updatedProduct);
    setIsEditing(false);
  };

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
          Product Specifications
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#808080" }}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      {/* Body */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Stack spacing={4}>
          
          {/* PROFILE / EDIT MODE */}
          {!isEditing ? (
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
              <Box
                sx={{
                  width: 54,
                  height: 54,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.03)",
                  border: "1px solid #2A2A2A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                <Inventory2OutlinedIcon sx={{ fontSize: 26 }} />
              </Box>

              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.3 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {product.description || "No description provided."}
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
                Edit Catalog Details
              </Typography>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Product Name"
                  size="small"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Category"
                  size="small"
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Price ($)"
                  size="small"
                  type="number"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  slotProps={{ inputLabel: { shrink: true } }}
                />
                <TextField
                  fullWidth
                  label="Description"
                  size="small"
                  multiline
                  rows={3}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
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

          {/* QUICK REPLENISH ACTION */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              Replenish Inventory
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <TextField
                placeholder="Enter stock quantity..."
                size="small"
                type="number"
                value={stockAdjustment}
                onChange={(e) => setStockAdjustment(e.target.value)}
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#141414",
                    "& fieldset": { borderColor: "#2A2A2A" }
                  }
                }}
              />
              <Button
                variant="outlined"
                onClick={handleReplenishStock}
                startIcon={<AddCircleOutlineOutlinedIcon />}
                sx={{
                  borderColor: "#2A2A2A",
                  color: "#FFFFFF",
                  textTransform: "none",
                  borderRadius: "10px",
                  px: 3,
                  "&:hover": { borderColor: "#444444", bgcolor: "#1A1A1A" }
                }}
              >
                Add Stock
              </Button>
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* SPECIFICATION LIST */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2.5}>
              Catalog Specifications
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TagOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">SKU ID Number</Typography>
                  <Typography variant="body2" fontWeight={600} sx={{ fontFamily: "monospace" }}>{product.sku}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <CategoryOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Department Category</Typography>
                  <Typography variant="body2" fontWeight={500}>{product.category}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <SellOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Unit Retail Price</Typography>
                  <Typography variant="body2" fontWeight={600} color="#FFFFFF">
                    {product.priceFormatted || `$${product.price}`}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* STOCK METRICS */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2.5}>
              Inventory Tracking
            </Typography>
            <Grid container spacing={2}>
              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Stock Availability</Typography>
                  <Box sx={{ mt: 1 }}>
                    <ProductStatusChip status={product.status} />
                  </Box>
                </Box>
              </Grid>

              <Grid item="true" size={6}>
                <Box sx={{ bgcolor: "#141414", p: 2, borderRadius: 3, border: "1px solid #2A2A2A" }}>
                  <Typography variant="caption" color="text.secondary">Items Count</Typography>
                  <Typography variant="h6" fontWeight={700} sx={{ mt: 0.5 }}>
                    {product.stock.toLocaleString()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* SALES PERFORMANCE GRAPH */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={3}>
              Sales Performance (Units Sold)
            </Typography>
            <Box sx={{ height: 160, width: "100%" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={product.salesHistory || []} margin={{ top: 5, right: 10, left: -25, bottom: 5 }}>
                  <CartesianGrid stroke="#202020" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" stroke="#606060" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#606060" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ bgcolor: "#181818", borderColor: "#2A2A2A", borderRadius: "8px" }}
                    itemStyle={{ color: "#FFFFFF" }}
                    labelStyle={{ color: "#808080" }}
                  />
                  <Line type="monotone" dataKey="sales" stroke="#22C55E" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>

        </Stack>
      </Box>
    </Drawer>
  );
};

export default ProductDrawer;
