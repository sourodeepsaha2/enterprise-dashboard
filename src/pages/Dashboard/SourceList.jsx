import {
  Box,
  LinearProgress,
  Typography,
} from "@mui/material";

const items = [
  {
    name: "Website",
    value: 52,
    color: "#FFFFFF",
  },
  {
    name: "Mobile",
    value: 31,
    color: "#CFCFCF",
  },
  {
    name: "API",
    value: 17,
    color: "#8A8A8A",
  },
];

const SourceList = () => {
  return (
    <Box sx={{ mt: 1 }}>
      {items.map((item) => (
        <Box
          key={item.name}
          sx={{
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: item.color,
                }}
              />

              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {item.name}
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "text.secondary",
                fontWeight: 600,
              }}
            >
              {item.value}%
            </Typography>
          </Box>

          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              height: 8,
              borderRadius: 20,
              bgcolor: "#2A2A2A",

              "& .MuiLinearProgress-bar": {
                bgcolor: item.color,
                borderRadius: 20,
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default SourceList;