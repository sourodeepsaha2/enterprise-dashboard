import { useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import SectionCard from "../../components/ui/SectionCard";

import CustomersHeader from "./CustomersHeader";
import CustomersTable from "./CustomersTable";
import CustomerDrawer from "./CustomerDrawer";

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <MainLayout>
      <CustomersHeader />

      <SectionCard
        sx={{
          p: 0,
          overflow: "hidden",
          minHeight: 550,
        }}
      >
        <CustomersTable onCustomerClick={handleCustomerClick} />
      </SectionCard>

      <CustomerDrawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        customer={selectedCustomer}
      />
    </MainLayout>
  );
};

export default Customers;