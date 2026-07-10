import { Box, Typography } from "@mui/material";

const ActivityItem = ({
  title,
  subtitle,
  time,
  isLast = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 2.5,
      }}
    >
      {/* Timeline */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            bgcolor: "#FFFFFF",
            mt: "7px",
          }}
        />

        {!isLast && (
          <Box
            sx={{
              width: "2px",
              flex: 1,
              bgcolor: "#2A2A2A",
              mt: 1,
              minHeight: 55,
            }}
          />
        )}
      </Box>

      {/* Content */}

      <Box sx={{ pb: 3 }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            mt: .5,
            fontSize: 14,
          }}
        >
          {subtitle}
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#666",
            fontSize: 12,
          }}
        >
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default ActivityItem;