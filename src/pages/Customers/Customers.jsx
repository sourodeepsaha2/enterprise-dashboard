import { useState, useMemo } from "react";

import MainLayout from "../../components/layout/MainLayout";
import SectionCard from "../../components/ui/SectionCard";

import CustomersHeader from "./CustomersHeader";
import CustomersStats from "./CustomersStats";
import CustomersFilters from "./CustomersFilters";
import CustomersTable from "./CustomersTable";
import CustomerDrawer from "./CustomerDrawer";

import customersData from "../../data/customersData";

const Customers = () => {
  // Local state initialized with mock customer database
  const [customersList, setCustomersList] = useState(customersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handle Search Input
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setPage(0); // Reset to page 1 on new search
  };

  // Handle Filter Change
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setPage(0); // Reset to page 1 on new filter
  };

  // Handle Sorting Column
  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortOrder(isAsc ? "desc" : "asc");
    setSortField(field);
  };

  // Handle Row Click
  const handleCustomerClick = (customer) => {
    setSelectedCustomerId(customer.id);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  // Handle Live Customer Updates (Edit details, add notes, deactivate status)
  const handleUpdateCustomer = (updatedCustomer) => {
    setCustomersList((prevList) =>
      prevList.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
    );
  };

  // Find currently selected customer details from state
  const selectedCustomer = useMemo(() => {
    return customersList.find((c) => c.id === selectedCustomerId) || null;
  }, [customersList, selectedCustomerId]);

  // Handle Pagination
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and Sort dataset memoized
  const filteredAndSortedCustomers = useMemo(() => {
    let result = [...customersList];

    // 1. Filter by Status chip
    if (selectedFilter !== "All") {
      result = result.filter(
        (c) => c.status.toLowerCase() === selectedFilter.toLowerCase()
      );
    }

    // 2. Filter by Search Query (Name, Email, Status)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query) ||
          c.status.toLowerCase().includes(query)
      );
    }

    // 3. Sort logic
    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      // Handle String comparisons
      if (typeof aVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      // Handle Numeric comparisons
      if (typeof aVal === "number") {
        return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
      }

      // Fallback
      return 0;
    });

    return result;
  }, [customersList, selectedFilter, searchQuery, sortField, sortOrder]);

  // Paginate list
  const visibleCustomers = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return filteredAndSortedCustomers.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredAndSortedCustomers, page, rowsPerPage]);

  return (
    <MainLayout>
      {/* Search connection */}
      <CustomersHeader searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      {/* KPI Stats cards */}
      <CustomersStats />

      {/* Status filter chips */}
      <CustomersFilters selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

      {/* Customer table card */}
      <SectionCard
        sx={{
          p: 0,
          overflow: "hidden",
          minHeight: 450,
          bgcolor: "#181818",
        }}
      >
        <CustomersTable
          customers={visibleCustomers}
          sortField={sortField}
          sortOrder={sortOrder}
          onSort={handleSort}
          onCustomerClick={handleCustomerClick}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          totalCount={filteredAndSortedCustomers.length}
        />
      </SectionCard>

      {/* Slide-out HubSpot details drawer */}
      <CustomerDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        customer={selectedCustomer}
        onUpdateCustomer={handleUpdateCustomer}
      />
    </MainLayout>
  );
};

export default Customers;