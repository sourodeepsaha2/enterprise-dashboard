import {
  Avatar,
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

import OrderStatusChip from "./OrderStatusChip";

const rows = [
  {
    customer: "John Smith",
    amount: "$420",
    status: "Paid",
    date: "Today",
  },
  {
    customer: "Sarah Wilson",
    amount: "$180",
    status: "Pending",
    date: "Yesterday",
  },
  {
    customer: "Alex Brown",
    amount: "$90",
    status: "Refunded",
    date: "Jul 8",
  },
  {
    customer: "Emma Davis",
    amount: "$650",
    status: "Paid",
    date: "Jul 7",
  },
];

const OrdersTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#7D7D7D", borderBottom: "1px solid #2A2A2A" }}>
              Customer
            </TableCell>

            <TableCell sx={{ color: "#7D7D7D", borderBottom: "1px solid #2A2A2A" }}>
              Status
            </TableCell>

            <TableCell sx={{ color: "#7D7D7D", borderBottom: "1px solid #2A2A2A" }}>
              Amount
            </TableCell>

            <TableCell sx={{ color: "#7D7D7D", borderBottom: "1px solid #2A2A2A" }}>
              Date
            </TableCell>

            <TableCell
              sx={{
                borderBottom: "1px solid #2A2A2A",
              }}
            />
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.customer}
              sx={{
                transition: "background-color .2s ease",

                "&:hover": {
                  bgcolor: "#222222",
                  cursor: "pointer",
                },

                "& td": {
                  borderColor: "#2A2A2A",
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
                      bgcolor: "#2B2B2B",
                      color: "#FFFFFF",
                      fontWeight: 600,
                    }}
                  >
                    {row.customer[0]}
                  </Avatar>

                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 17,
                    }}
                  >
                    {row.customer}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <OrderStatusChip status={row.status} />
              </TableCell>

              <TableCell>
                <Typography fontWeight={500}>
                  {row.amount}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography color="text.secondary">
                  {row.date}
                </Typography>
              </TableCell>

              <TableCell align="right">
                <IconButton
                  sx={{
                    color: "#8A8A8A",

                    "&:hover": {
                      bgcolor: "#2A2A2A",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  <MoreHorizRoundedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersTable;