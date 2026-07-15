import { useState, useMemo } from "react";

import MainLayout from "../../components/layout/MainLayout";
import SectionCard from "../../components/ui/SectionCard";

import ProductsHeader from "./ProductsHeader";
import ProductsStats from "./ProductsStats";
import ProductsFilters from "./ProductsFilters";
import ProductsTable from "./ProductsTable";
import ProductDrawer from "./ProductDrawer";

import productsData from "../../data/productsData";

const Products = () => {
  const [productsList, setProductsList] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setPage(0);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setPage(0);
  };

  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortField(field);
  };

  const handleProductClick = (product) => {
    setSelectedProductId(product.id);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProductsList((prevList) =>
      prevList.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const selectedProduct = useMemo(() => {
    return productsList.find((p) => p.id === selectedProductId) || null;
  }, [productsList, selectedProductId]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsList];

    // 1. Status Filter
    if (selectedFilter !== "All") {
      result = result.filter(
        (p) => p.status.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    // 2. Search Query (Name, SKU)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query)
      );
    }

    // 3. Sorting
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (typeof aVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });

    return result;
  }, [productsList, selectedFilter, searchQuery, sortField, sortOrder]);

  const visibleProducts = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredAndSortedProducts, page, rowsPerPage]);

  return (
    <MainLayout>
      <ProductsHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <ProductsStats />

      <ProductsFilters selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

      <SectionCard
        sx={{
          p: 0,
          overflow: "hidden",
          minHeight: 450,
          bgcolor: "#181818",
        }}
      >
        <ProductsTable
          products={visibleProducts}
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
          onProductClick={handleProductClick}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalCount={filteredAndSortedProducts.length}
        />
      </SectionCard>

      <ProductDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        product={selectedProduct}
        onUpdateProduct={handleUpdateProduct}
      />
    </MainLayout>
  );
};

export default Products;