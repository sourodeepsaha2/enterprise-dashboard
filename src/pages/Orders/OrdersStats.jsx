import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import StatCard from "../../components/ui/StatCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { y: 15, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.2,
    }
  },
};

const OrdersStats = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Total Orders"
              value="2,314"
              change="+14.2% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Pending Processing"
              value="145"
              change="+4.2% from last week"
              positive={false} // Pending up is usually bad for operations
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Shipped / In Transit"
              value="82"
              change="+12.4% from last week"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Sales Revenue"
              value="$148,200"
              change="+18.7% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default OrdersStats;
