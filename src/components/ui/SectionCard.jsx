import { Paper } from "@mui/material";

const SectionCard = ({ children, sx = {} }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        p: 3,
        transition: "all 0.2s ease",

        "&:hover": {
          borderColor: "#3A3A3A",
        },

        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default SectionCard;