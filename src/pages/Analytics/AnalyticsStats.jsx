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

const AnalyticsStats = () => {
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
              title="Total Visitors"
              value="45,280"
              change="+12.4% from last week"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Conversion Rate"
              value="3.42%"
              change="+1.2% from last week"
              positive={true}
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Bounce Rate"
              value="42.1%"
              change="-2.4% from last week"
              positive={true} // Bounce rate down is positive
            />
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <motion.div variants={cardVariants}>
            <StatCard
              title="Avg. Session Duration"
              value="4m 12s"
              change="+8.6% from last week"
              positive={true}
            />
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default AnalyticsStats;
