import { Box, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SectionCard from "../../components/ui/SectionCard";

// Mock traffic data for last 7 days, 30 days, and 90 days
const trafficDataMap = {
  "7d": [
    { name: "Mon", visitors: 4200, conversions: 140 },
    { name: "Tue", visitors: 4800, conversions: 165 },
    { name: "Wed", visitors: 5100, conversions: 180 },
    { name: "Thu", visitors: 4900, conversions: 155 },
    { name: "Fri", visitors: 6200, conversions: 210 },
    { name: "Sat", visitors: 7500, conversions: 290 },
    { name: "Sun", visitors: 6800, conversions: 240 },
  ],
  "30d": [
    { name: "Week 1", visitors: 22000, conversions: 780 },
    { name: "Week 2", visitors: 24500, conversions: 840 },
    { name: "Week 3", visitors: 28000, conversions: 990 },
    { name: "Week 4", visitors: 31200, conversions: 1150 },
  ],
  "90d": [
    { name: "Apr", visitors: 82000, conversions: 2800 },
    { name: "May", visitors: 94000, conversions: 3200 },
    { name: "Jun", visitors: 112000, conversions: 4100 },
  ],
  "ytd": [
    { name: "Jan", visitors: 72000, conversions: 2400 },
    { name: "Feb", visitors: 78000, conversions: 2600 },
    { name: "Mar", visitors: 81000, conversions: 2750 },
    { name: "Apr", visitors: 85000, conversions: 2900 },
    { name: "May", visitors: 91000, conversions: 3100 },
    { name: "Jun", visitors: 104000, conversions: 3700 },
    { name: "Jul", visitors: 112000, conversions: 4050 },
  ],
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          bgcolor: "#181818",
          border: "1px solid #2A2A2A",
          p: 2,
          borderRadius: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "#808080", mb: 1 }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: 600 }}>
          Visitors: {payload[0].value.toLocaleString()}
        </Typography>
        <Typography variant="body2" sx={{ color: "#22C55E", fontWeight: 600 }}>
          Conversions: {payload[1].value.toLocaleString()}
        </Typography>
      </Box>
    );
  }
  return null;
};

const TrafficChart = ({ dateRange }) => {
  const data = trafficDataMap[dateRange] || trafficDataMap["7d"];

  return (
    <SectionCard sx={{ p: 3, bgcolor: "#181818", height: "400px", display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
        Traffic & Conversions Trend
      </Typography>

      <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
              </linearGradient>
            </defs>
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
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#FFFFFF"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVisitors)"
            />
            <Area
              type="monotone"
              dataKey="conversions"
              stroke="#22C55E"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorConversions)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </SectionCard>
  );
};

export default TrafficChart;
