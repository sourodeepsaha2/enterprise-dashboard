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

const CustomersStats = () => {
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
              title="Total Customers"
              value="1,248"
              change="+4.2% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Active Customers"
              value="986"
              change="+8.2% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="New This Month"
              value="142"
              change="+18.0% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Customer Retention"
              value="94.6%"
              change="+0.8% from last quarter"
              positive={true}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default CustomersStats;
