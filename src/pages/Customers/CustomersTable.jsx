import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
  Typography,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

import CustomerRow from "./CustomerRow";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const CustomersTable = ({
  customers,
  sortField,
  sortOrder,
  onSort,
  onCustomerClick,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  totalCount,
}) => {
  const createSortHandler = (property) => () => {
    onSort(property);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TableContainer sx={{ maxHeight: 600, flex: 1 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  borderBottom: "1px solid #2A2A2A",
                  bgcolor: "#141414",
                  zIndex: 2,
                },
              }}
            >
              {/* Sortable: Name */}
              <TableCell>
                <TableSortLabel
                  active={sortField === "name"}
                  direction={sortField === "name" ? sortOrder : "asc"}
                  onClick={createSortHandler("name")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Customer
                </TableSortLabel>
              </TableCell>

              {/* Non-sortable: Email */}
              <TableCell>Email</TableCell>

              {/* Sortable: Status */}
              <TableCell>
                <TableSortLabel
                  active={sortField === "status"}
                  direction={sortField === "status" ? sortOrder : "asc"}
                  onClick={createSortHandler("status")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Status
                </TableSortLabel>
              </TableCell>

              {/* Sortable: Last Order */}
              <TableCell>
                <TableSortLabel
                  active={sortField === "lastOrder"}
                  direction={sortField === "lastOrder" ? sortOrder : "asc"}
                  onClick={createSortHandler("lastOrder")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Last Order
                </TableSortLabel>
              </TableCell>

              {/* Sortable: Total Spent */}
              <TableCell>
                <TableSortLabel
                  active={sortField === "spent"}
                  direction={sortField === "spent" ? sortOrder : "asc"}
                  onClick={createSortHandler("spent")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Total Spent
                </TableSortLabel>
              </TableCell>

              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>

          <TableBody 
            component={motion.tbody}
            variants={listVariants}
            initial="hidden"
            animate="show"
            sx={{
              "& tr:nth-of-type(even)": {
                bgcolor: "#111111",
              },
              "& tr:nth-of-type(odd)": {
                bgcolor: "#161616",
              },
            }}
          >
            <AnimatePresence mode="popLayout">
              {customers.map((customer) => (
                <CustomerRow
                  key={customer.id}
                  customer={customer}
                  onClick={() => onCustomerClick(customer)}
                />
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Empty State */}
      {customers.length === 0 && (
        <Box
          sx={{
            py: 8,
            px: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            bgcolor: "#161616",
            borderBottom: "1px solid #2A2A2A",
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              bgcolor: "rgba(255, 255, 255, 0.03)",
              border: "1px dashed #3A3A3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              color: "#666666",
            }}
          >
            <SearchOffRoundedIcon sx={{ fontSize: 40 }} />
          </Box>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            No customers found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 1 }}>
            Try changing your filters or search query.
          </Typography>
        </Box>
      )}

      {/* Pagination Footer */}
      <TablePagination
        component="div"
        count={totalCount}
        page={page}
        onPageChange={onPageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={onRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
          bgcolor: "#141414",
          borderTop: "1px solid #2A2A2A",
          color: "text.secondary",
          "& .MuiTablePagination-selectIcon": {
            color: "text.secondary",
          },
          "& .MuiTablePagination-actions": {
            color: "#FFFFFF",
          },
        }}
      />
    </Box>
  );
};

export default CustomersTable;