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
  IconButton,
  Typography,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
import { motion, AnimatePresence } from "framer-motion";

import ProductStatusChip from "./ProductStatusChip";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

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

const ProductsTable = ({
  products,
  sortField,
  sortOrder,
  onSort,
  onProductClick,
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
                  Product Name
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortField === "sku"}
                  direction={sortField === "sku" ? sortOrder : "asc"}
                  onClick={createSortHandler("sku")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  SKU
                </TableSortLabel>
              </TableCell>

              <TableCell>Category</TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortField === "price"}
                  direction={sortField === "price" ? sortOrder : "asc"}
                  onClick={createSortHandler("price")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Price
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortField === "stock"}
                  direction={sortField === "stock" ? sortOrder : "asc"}
                  onClick={createSortHandler("stock")}
                  sx={{
                    "&.MuiTableSortLabel-active": { color: "#FFFFFF" },
                    "&.MuiTableSortLabel-active .MuiTableSortLabel-icon": { color: "#FFFFFF !important" },
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  In Stock
                </TableSortLabel>
              </TableCell>

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
              "& td": {
                borderColor: "#2A2A2A",
                py: 2,
              },
            }}
          >
            <AnimatePresence mode="popLayout">
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  component={motion.tr}
                  variants={rowVariants}
                  hover
                  onClick={() => onProductClick(product)}
                  sx={{
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                    "&:hover": {
                      bgcolor: "#1C1C1C !important",
                    },
                  }}
                >
                  <TableCell sx={{ color: "#FFFFFF", fontWeight: 600 }}>
                    {product.name}
                  </TableCell>
                  
                  <TableCell sx={{ color: "text.secondary", fontFamily: "monospace" }}>
                    {product.sku}
                  </TableCell>

                  <TableCell sx={{ color: "text.secondary" }}>
                    {product.category}
                  </TableCell>

                  <TableCell sx={{ color: "#FFFFFF", fontWeight: 600 }}>
                    {product.priceFormatted || `$${product.price}`}
                  </TableCell>

                  <TableCell sx={{ color: "text.secondary" }}>
                    {product.stock.toLocaleString()}
                  </TableCell>

                  <TableCell>
                    <ProductStatusChip status={product.status} />
                  </TableCell>

                  <TableCell align="right">
                    <IconButton
                      onClick={(e) => e.stopPropagation()}
                      sx={{ color: "#808080", "&:hover": { color: "#FFFFFF" } }}
                    >
                      <MoreHorizRoundedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Empty State */}
      {products.length === 0 && (
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
            No products found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 1 }}>
            Try changing your filters or search query.
          </Typography>
        </Box>
      )}

      {/* Pagination */}
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

export default ProductsTable;
