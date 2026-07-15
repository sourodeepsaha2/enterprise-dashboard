import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from "@mui/material";
import SectionCard from "../../components/ui/SectionCard";

const pagesData = [
  { path: "/dashboard", views: 24500, unique: 18200, bounce: "38.2%" },
  { path: "/customers", views: 18200, unique: 12400, bounce: "42.1%" },
  { path: "/products", views: 12100, unique: 9800, bounce: "45.6%" },
  { path: "/orders", views: 9800, unique: 7600, bounce: "41.8%" },
  { path: "/settings", views: 4200, unique: 3100, bounce: "35.4%" },
];

const TopPages = () => {
  return (
    <SectionCard sx={{ p: 0, bgcolor: "#181818", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 3, borderBottom: "1px solid #2A2A2A" }}>
        <Typography variant="h6" fontWeight={700}>
          Top Performing Pages
        </Typography>
      </Box>

      <TableContainer sx={{ flex: 1 }}>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  color: "text.secondary",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  borderBottom: "1px solid #2A2A2A",
                  bgcolor: "#141414",
                },
              }}
            >
              <TableCell>Page Path</TableCell>
              <TableCell align="right">Page Views</TableCell>
              <TableCell align="right">Unique Visitors</TableCell>
              <TableCell align="right">Bounce Rate</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& tr:nth-of-type(even)": {
                bgcolor: "#111111",
              },
              "& tr:nth-of-type(odd)": {
                bgcolor: "#161616",
              },
              "& tr:hover": {
                bgcolor: "#1C1C1C !important",
              },
              "& td": {
                borderColor: "#2A2A2A",
                py: 2,
              },
            }}
          >
            {pagesData.map((page) => (
              <TableRow key={page.path}>
                <TableCell sx={{ color: "#FFFFFF", fontWeight: 500 }}>
                  {page.path}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {page.views.toLocaleString()}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {page.unique.toLocaleString()}
                </TableCell>
                <TableCell align="right" sx={{ color: "text.secondary" }}>
                  {page.bounce}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SectionCard>
  );
};

export default TopPages;
