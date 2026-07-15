import { Box, Chip } from "@mui/material";
import { motion } from "framer-motion";

const filters = ["All", "Active", "Low Stock", "Out of Stock"];

const chipContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const chipVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    }
  },
};

const ProductsFilters = ({ selectedFilter, onFilterChange }) => {
  return (
    <Box
      component={motion.div}
      variants={chipContainerVariants}
      initial="hidden"
      animate="show"
      sx={{
        display: "flex",
        gap: 1.5,
        mb: 3,
        flexWrap: "wrap",
      }}
    >
      {filters.map((filter) => {
        const isActive = selectedFilter === filter;
        return (
          <motion.div
            key={filter}
            variants={chipVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ display: "inline-block" }}
          >
            <Chip
              label={filter}
              onClick={() => onFilterChange(filter)}
              variant={isActive ? "filled" : "outlined"}
              sx={{
                px: 1.5,
                py: 2.2,
                borderRadius: "10px",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.15s ease",
                
                bgcolor: isActive ? "#FFFFFF" : "#141414",
                color: isActive ? "#000000" : "#A0A0A0",
                borderColor: isActive ? "#FFFFFF" : "#2A2A2A",

                "&:hover": {
                  bgcolor: isActive ? "#FFFFFF" : "#1C1C1C",
                  borderColor: isActive ? "#FFFFFF" : "#444444",
                  color: isActive ? "#000000" : "#FFFFFF",
                },

                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />
          </motion.div>
        );
      })}
    </Box>
  );
};

export default ProductsFilters;
