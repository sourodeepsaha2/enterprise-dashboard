import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Box } from "@mui/material";

const data = [
  { month: "Jan", revenue: 32 },
  { month: "Feb", revenue: 40 },
  { month: "Mar", revenue: 36 },
  { month: "Apr", revenue: 52 },
  { month: "May", revenue: 49 },
  { month: "Jun", revenue: 61 },
  { month: "Jul", revenue: 72 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <Box
      sx={{
        bgcolor: "#181818",
        border: "1px solid #2A2A2A",
        borderRadius: 2,
        px: 2,
        py: 1.5,
      }}
    >
      <Box
        sx={{
          color: "#8A8A8A",
          fontSize: 12,
          mb: 0.5,
        }}
      >
        {label}
      </Box>

      <Box
        sx={{
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        ${payload[0].value}k
      </Box>
    </Box>
  );
};

const RevenueLineChart = () => {
  return (
    <Box
      sx={{
        mt: 3,
        width: "100%",
        height: 280,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -25,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#FFFFFF"
                stopOpacity={0.18}
              />

              <stop
                offset="100%"
                stopColor="#FFFFFF"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#252525"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tickMargin={14}
            tick={{
              fill: "#8A8A8A",
              fontSize: 13,
            }}
          />

          <YAxis hide />

          <Tooltip
            cursor={{
              stroke: "#3A3A3A",
              strokeDasharray: "4 4",
            }}
            content={<CustomTooltip />}
          />

          <Area
            type="natural"
            dataKey="revenue"
            stroke="none"
            fill="url(#revenueGradient)"
          />

          <Line
            type="natural"
            dataKey="revenue"
            stroke="#FFFFFF"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 7,
              fill: "#FFFFFF",
              stroke: "#0B0B0B",
              strokeWidth: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default RevenueLineChart;