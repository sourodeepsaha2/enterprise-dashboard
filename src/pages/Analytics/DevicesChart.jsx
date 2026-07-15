import { Box, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import SectionCard from "../../components/ui/SectionCard";

const deviceData = [
  { name: "Desktop", value: 65, color: "#FFFFFF" },
  { name: "Mobile", value: 28, color: "#22C55E" },
  { name: "Tablet", value: 7, color: "#F59E0B" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: "#181818",
          border: "1px solid #2A2A2A",
          p: 1.5,
          borderRadius: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
          {payload[0].name}: {payload[0].value}%
        </Typography>
      </Box>
    );
  }
  return null;
};

const DevicesChart = () => {
  return (
    <SectionCard sx={{ p: 3, bgcolor: "#181818", height: "400px", display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
        Visits by Device Type (%)
      </Typography>

      <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={deviceData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={40}
          >
            <CartesianGrid stroke="#252525" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#808080"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#808080"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dx={-10}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {deviceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </SectionCard>
  );
};

export default DevicesChart;
