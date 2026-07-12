import { Box, Typography } from "@mui/material";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const CustomerTimeline = ({ customer }) => {
  if (!customer) return null;

  // Let's build a timeline list of activities dynamically
  const activities = [
    {
      id: "joined",
      title: "Account Created",
      description: `Customer account was registered from ${customer.country || "unknown location"}.`,
      date: customer.joinedDate,
      icon: <PersonAddOutlinedIcon sx={{ fontSize: 18 }} />,
      color: "#3B82F6",
    },
  ];

  if (customer.ordersCount > 0) {
    activities.push({
      id: "first-order",
      title: "First Order Placed",
      description: `Placed first order for this account. Total orders: ${customer.ordersCount}.`,
      date: customer.joinedDate, // Roughly around joined
      icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 18 }} />,
      color: "#10B981",
    });
  }

  // Add notes as Note Added events
  if (customer.notes && customer.notes.length > 0) {
    customer.notes.forEach((note) => {
      activities.push({
        id: `note-${note.id}`,
        title: "Note Added by Agent",
        description: `"${note.text}"`,
        date: note.date,
        icon: <NoteAltOutlinedIcon sx={{ fontSize: 18 }} />,
        color: "#F59E0B",
      });
    });
  }

  if (customer.lastOrder) {
    activities.push({
      id: "last-order",
      title: "Recent Order Completed",
      description: `Completed last purchase of ${customer.spentFormatted || ("$" + customer.spent)}.`,
      date: customer.lastOrder,
      icon: <CheckCircleOutlinedIcon sx={{ fontSize: 18 }} />,
      color: "#10B981",
    });
  }

  // Sort activities by date descending
  activities.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Box sx={{ position: "relative", pl: 3.5, py: 1 }}>
      {/* Vertical line connector */}
      <Box
        sx={{
          position: "absolute",
          left: 13,
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "#2A2A2A",
          zIndex: 1,
        }}
      />

      {activities.map((activity, index) => (
        <Box
          key={activity.id}
          sx={{
            position: "relative",
            mb: index === activities.length - 1 ? 0 : 3.5,
          }}
        >
          {/* Bullet Point with Icon */}
          <Box
            sx={{
              position: "absolute",
              left: -38,
              top: 2,
              width: 28,
              height: 28,
              borderRadius: "50%",
              bgcolor: "#1A1A1A",
              border: `2px solid ${activity.color}`,
              color: activity.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
              boxShadow: "0 0 0 4px #121212",
            }}
          >
            {activity.icon}
          </Box>

          {/* Activity Content */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 1,
                mb: 0.5,
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="#FFFFFF"
                sx={{ fontSize: "0.95rem" }}
              >
                {activity.title}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontSize: "0.75rem" }}
              >
                {activity.date}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.5,
                wordBreak: "break-word",
              }}
            >
              {activity.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CustomerTimeline;
