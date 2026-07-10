import { Box, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Website",
    value: 52,
  },
  {
    name: "Mobile",
    value: 31,
  },
  {
    name: "API",
    value: 17,
  },
];

const COLORS = [
  "#FFFFFF",
  "#CFCFCF",
  "#8A8A8A",
];

const DonutChart = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight={600}
        sx={{
          mb: 3,
        }}
      >
        Revenue Sources
      </Typography>

      <Box
        sx={{
          width: "100%",
          height: 240,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={82}
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="28"
              fontWeight="700"
            >
              $124K
            </text>

            <text
              x="50%"
              y="61%"
              textAnchor="middle"
              fill="#8A8A8A"
              fontSize="12"
            >
              Total Revenue
            </text>
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default DonutChart;