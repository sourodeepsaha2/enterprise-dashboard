import { useState, useMemo } from "react";

import MainLayout from "../../components/layout/MainLayout";
import SectionCard from "../../components/ui/SectionCard";

import OrdersHeader from "./OrdersHeader";
import OrdersStats from "./OrdersStats";
import OrdersFilters from "./OrdersFilters";
import OrdersTable from "./OrdersTable";
import OrderDrawer from "./OrderDrawer";

import ordersData from "../../data/ordersData";

const Orders = () => {
  const [ordersList, setOrdersList] = useState(ordersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
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

  const handleOrderClick = (order) => {
    setSelectedOrderId(order.id);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleUpdateOrder = (updatedOrder) => {
    setOrdersList((prevList) =>
      prevList.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
    );
  };

  const selectedOrder = useMemo(() => {
    return ordersList.find((o) => o.id === selectedOrderId) || null;
  }, [ordersList, selectedOrderId]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredAndSortedOrders = useMemo(() => {
    let result = [...ordersList];

    // 1. Status Filter
    if (selectedFilter !== "All") {
      result = result.filter(
        (o) => o.status.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    // 2. Search Query (ID, Customer Name)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (o) =>
          o.id.toLowerCase().includes(query) ||
          o.customerName.toLowerCase().includes(query) ||
          o.customerEmail.toLowerCase().includes(query)
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
  }, [ordersList, selectedFilter, searchQuery, sortField, sortOrder]);

  const visibleOrders = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredAndSortedOrders.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredAndSortedOrders, page, rowsPerPage]);

  return (
    <MainLayout>
      <OrdersHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <OrdersStats />

      <OrdersFilters selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

      <SectionCard
        sx={{
          p: 0,
          overflow: "hidden",
          minHeight: 450,
          bgcolor: "#181818",
        }}
      >
        <OrdersTable
          orders={visibleOrders}
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
          onOrderClick={handleOrderClick}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalCount={filteredAndSortedOrders.length}
        />
      </SectionCard>

      <OrderDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        order={selectedOrder}
        onUpdateOrder={handleUpdateOrder}
      />
    </MainLayout>
  );
};

export default Orders;