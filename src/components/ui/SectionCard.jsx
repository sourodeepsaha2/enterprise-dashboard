import { Paper } from "@mui/material";

const SectionCard = ({
  children,
  sx = {},
  hoverable = true,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "#181818",
        border: "1px solid #2A2A2A",
        borderRadius: 6,
        p: 3,

        transition: hoverable
          ? "transform .25s ease, box-shadow .25s ease, border-color .25s ease"
          : "none",

        ...(hoverable && {
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "#3A3A3A",
            boxShadow: "0 16px 40px rgba(0,0,0,.45)",
          },
        }),

        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default SectionCard;