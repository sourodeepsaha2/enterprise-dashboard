import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
  Button,
  IconButton,
  Grid,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

import OrderStatusChip from "./OrderStatusChip";

const steps = ["Ordered", "Paid", "Shipped", "Delivered"];

const getActiveStep = (status) => {
  switch (status) {
    case "Processing":
      return 1;
    case "Paid":
      return 1;
    case "Shipped":
      return 2;
    case "Delivered":
      return 3;
    case "Refunded":
      return -1;
    default:
      return 0;
  }
};

const OrderDrawer = ({
  open,
  onClose,
  order,
  onUpdateOrder,
}) => {
  if (!order) return null;

  const handleUpdateStatus = (nextStatus) => {
    const updatedOrder = {
      ...order,
      status: nextStatus,
    };
    onUpdateOrder(updatedOrder);
  };

  const handleRefund = () => {
    const updatedOrder = {
      ...order,
      status: "Refunded",
    };
    onUpdateOrder(updatedOrder);
  };

  const activeStep = getActiveStep(order.status);

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
          Order Invoice
        </Typography>
        <IconButton onClick={onClose} sx={{ color: "#808080" }}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>

      {/* Body */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 4 }}>
        <Stack spacing={4}>
          
          {/* TITLE INFO */}
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
              <ReceiptOutlinedIcon sx={{ fontSize: 26 }} />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight={700} sx={{ fontFamily: "monospace" }}>
                {order.id}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Placed on {order.date}
              </Typography>
            </Box>

            <OrderStatusChip status={order.status} />
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* STEPPER STATUS TIMELINE */}
          {order.status !== "Refunded" && (
            <Box sx={{ py: 1 }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label} sx={{
                    "& .MuiStepLabel-label": { color: "#606060", fontSize: "0.75rem", mt: 0.5 },
                    "& .MuiStepLabel-label.Mui-active": { color: "#FFFFFF", fontWeight: 600 },
                    "& .MuiStepLabel-label.Mui-completed": { color: "#22C55E" },
                    "& .MuiStepIcon-root": { color: "#202020" },
                    "& .MuiStepIcon-root.Mui-active": { color: "#3B82F6" },
                    "& .MuiStepIcon-root.Mui-completed": { color: "#22C55E" },
                  }}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          )}

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* ORDER ACTIONS */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              Order Actions
            </Typography>
            <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
              {order.status === "Paid" && (
                <Button
                  variant="outlined"
                  onClick={() => handleUpdateStatus("Shipped")}
                  startIcon={<LocalShippingOutlinedIcon />}
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
                  Mark Shipped
                </Button>
              )}

              {order.status === "Shipped" && (
                <Button
                  variant="outlined"
                  onClick={() => handleUpdateStatus("Delivered")}
                  startIcon={<CheckCircleOutlinedIcon />}
                  sx={{
                    flex: 1,
                    minWidth: "120px",
                    borderColor: "#2A2A2A",
                    color: "#22C55E",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#22C55E", bgcolor: "rgba(34,197,94,0.06)" }
                  }}
                >
                  Mark Delivered
                </Button>
              )}

              {order.status !== "Refunded" && (
                <Button
                  variant="outlined"
                  onClick={handleRefund}
                  startIcon={<BlockOutlinedIcon />}
                  sx={{
                    flex: 1,
                    minWidth: "120px",
                    borderColor: "#2A2A2A",
                    color: "#EF4444",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#EF4444", bgcolor: "rgba(239,68,68,0.06)" }
                  }}
                >
                  Issue Refund
                </Button>
              )}
            </Box>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* CUSTOMER INFO */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2.5}>
              Buyer Details
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PersonOutlineRoundedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Purchaser Name</Typography>
                  <Typography variant="body2" fontWeight={600}>{order.customerName}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PaymentsOutlinedIcon sx={{ color: "#808080" }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Contact Email</Typography>
                  <Typography variant="body2" fontWeight={500}>{order.customerEmail}</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <LocalShippingOutlinedIcon sx={{ color: "#808080", mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">Shipping Address</Typography>
                  <Typography variant="body2" fontWeight={500} sx={{ lineHeight: 1.4 }}>
                    {order.shippingAddress || "No shipping address provided."}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Divider sx={{ borderColor: "#2A2A2A" }} />

          {/* ITEMS BREAKDOWN */}
          <Box>
            <Typography variant="subtitle2" color="text.secondary" mb={2}>
              Line Items
            </Typography>
            <Stack spacing={2}>
              {order.items && order.items.length > 0 ? (
                order.items.map((item, idx) => (
                  <Box key={idx} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#141414", p: 2, borderRadius: 2.5, border: "1px solid #2A2A2A" }}>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>{item.name}</Typography>
                      <Typography variant="caption" color="text.secondary">Qty: {item.quantity} • Unit: ${item.price}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight={700}>
                      ${(item.quantity * item.price).toLocaleString()}
                    </Typography>
                  </Box>
                ))
              ) : (
                <Typography variant="body2" color="text.secondary">No items details recorded.</Typography>
              )}

              <Box sx={{ display: "flex", justifyContent: "space-between", px: 1, pt: 1 }}>
                <Typography variant="body2" color="text.secondary">Grand Total</Typography>
                <Typography variant="h6" fontWeight={700} color="#FFFFFF">
                  {order.amountFormatted || `$${order.amount}`}
                </Typography>
              </Box>
            </Stack>
          </Box>

        </Stack>
      </Box>
    </Drawer>
  );
};

export default OrderDrawer;
