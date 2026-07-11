import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

const CustomerDrawer = ({ open, onClose, customer }) => {
  if (!customer) return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 460,
            maxWidth: "100vw",
            bgcolor: "#121212",
            color: "#FFFFFF",
            p: 4,
            borderLeft: "1px solid #2A2A2A",
            boxSizing: "border-box",
            overflowY: "auto",
          },
        },
      }}
    >
      <Stack spacing={4}>
        {/* Customer Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
              bgcolor: "#2A2A2A",
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {customer.name.charAt(0)}
          </Avatar>

          <Box>
            <Typography
              variant="h5"
              fontWeight={700}
            >
              {customer.name}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                wordBreak: "break-word",
              }}
            >
              {customer.email}
            </Typography>
          </Box>
        </Box>

        <Divider />

        {/* Status */}
        <Box>
          <Typography
            color="text.secondary"
            gutterBottom
          >
            Status
          </Typography>

          <Typography fontWeight={600}>
            {customer.status}
          </Typography>
        </Box>

        {/* Total Spent */}
        <Box>
          <Typography
            color="text.secondary"
            gutterBottom
          >
            Total Spent
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
          >
            {customer.spent}
          </Typography>
        </Box>

        {/* Last Order */}
        <Box>
          <Typography
            color="text.secondary"
            gutterBottom
          >
            Last Order
          </Typography>

          <Typography fontWeight={600}>
            {customer.lastOrder}
          </Typography>
        </Box>

        <Divider />

        {/* Recent Orders */}
        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            mb={3}
          >
            Recent Orders
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography fontWeight={600}>
                #1042
              </Typography>

              <Typography color="text.secondary">
                Paid • $320
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600}>
                #1038
              </Typography>

              <Typography color="text.secondary">
                Paid • $180
              </Typography>
            </Box>

            <Box>
              <Typography fontWeight={600}>
                #1034
              </Typography>

              <Typography color="text.secondary">
                Refunded • $90
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  );
};

export default CustomerDrawer;