import {
  Avatar,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import customersData from "../../data/customersData";
import CustomerStatusChip from "./CustomerStatusChip";

const CustomersTable = ({ onCustomerClick }) => {
  return (
    <Table>
      <TableHead>
        <TableRow
          sx={{
            "& th": {
              color: "text.secondary",
              fontWeight: 600,
              fontSize: "0.9rem",
              borderBottom: "1px solid #2A2A2A",
              bgcolor: "#1A1A1A",
            },
          }}
        >
          <TableCell>Customer</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Last Order</TableCell>
          <TableCell>Total Spent</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {customersData.map((customer) => (
          <TableRow
            key={customer.id}
            hover
            onClick={() => onCustomerClick(customer)}
            sx={{
              cursor: "pointer",
              transition: "background-color 0.2s ease",

              "& td": {
                borderColor: "#2A2A2A",
              },

              "&:hover": {
                bgcolor: "#202020",
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
                    width: 46,
                    height: 46,
                    bgcolor: "#2A2A2A",
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  {customer.name.charAt(0)}
                </Avatar>

                <Typography fontWeight={600}>
                  {customer.name}
                </Typography>
              </Box>
            </TableCell>

            <TableCell>{customer.email}</TableCell>

            <TableCell>
              <CustomerStatusChip status={customer.status} />
            </TableCell>

            <TableCell>{customer.lastOrder}</TableCell>

            <TableCell
              sx={{
                fontWeight: 600,
              }}
            >
              {customer.spent}
            </TableCell>

            <TableCell align="right">
              <IconButton
                onClick={(e) => e.stopPropagation()}
                sx={{
                  color: "#A0A0A0",
                }}
              >
                <MoreHorizRoundedIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomersTable;