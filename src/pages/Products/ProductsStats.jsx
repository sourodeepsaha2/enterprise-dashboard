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

const ProductsStats = () => {
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
              title="Total Products"
              value="20"
              change="+2 from last month"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Active Catalog"
              value="13"
              change="Stable status"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Low Stock Alerts"
              value="5"
              change="-2 from last week"
              positive={true} // Low stock down is good
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Total Stock Value"
              value="$948,200"
              change="+5.4% from last month"
              positive={true}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default ProductsStats;
