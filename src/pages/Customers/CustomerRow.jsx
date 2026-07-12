import {
  Avatar,
  Box,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { motion } from "framer-motion";

import CustomerStatusChip from "./CustomerStatusChip";

const rowVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
};

const CustomerRow = ({ customer, onClick }) => {
  return (
    <TableRow
      component={motion.tr}
      variants={rowVariants}
      hover
      onClick={onClick}
      sx={{
        cursor: "pointer",
        transition: "background-color 0.2s ease",

        "& td": {
          borderColor: "#2A2A2A",
          py: 2,
        },

        "&:hover": {
          bgcolor: "#1C1C1C !important",
        },
      }}
    >
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            sx={{
              width: 42,
              height: 42,
              bgcolor: "#2A2A2A",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "0.95rem",
              border: "1px solid #3A3A3A",
            }}
          >
            {customer.name.charAt(0)}
          </Avatar>

          <Box sx={{ minWidth: 0 }}>
            <Typography fontWeight={600} noWrap sx={{ fontSize: "0.95rem" }}>
              {customer.name}
            </Typography>
            {customer.company && (
              <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                {customer.company}
              </Typography>
            )}
          </Box>
        </Box>
      </TableCell>

      <TableCell sx={{ color: "text.secondary" }}>{customer.email}</TableCell>

      <TableCell>
        <CustomerStatusChip status={customer.status} />
      </TableCell>

      <TableCell sx={{ color: "text.secondary" }}>
        {customer.lastOrderFormatted || customer.lastOrder}
      </TableCell>

      <TableCell
        sx={{
          fontWeight: 600,
          color: "#FFFFFF",
        }}
      >
        {customer.spentFormatted || `$${customer.spent}`}
      </TableCell>

      <TableCell align="right">
        <IconButton
          onClick={(e) => e.stopPropagation()}
          sx={{
            color: "#808080",
            "&:hover": { color: "#FFFFFF" }
          }}
        >
          <MoreHorizRoundedIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRow;
