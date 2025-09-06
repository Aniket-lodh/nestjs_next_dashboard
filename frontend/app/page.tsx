"use client";

import { useEffect } from "react";
import { useDashboardStore } from "../store/dashboard";
import { Box, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const { metrics, revenue, satisfaction, visitors, topProducts, loadAll } =
    useDashboardStore() as any;

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  if (!metrics) return <p>Loading...</p>;

  return (
    <Box sx={{ p: 3 }}>
      {/* KPI Cards */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">${metrics.totalSales}</Typography>
              <Typography variant="body2">{metrics.changes.totalSalesPct} from yesterday</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Orders</Typography>
              <Typography variant="h4">{metrics.totalOrders}</Typography>
              <Typography variant="body2">{metrics.changes.totalOrdersPct} from yesterday</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Products Sold</Typography>
              <Typography variant="h4">{metrics.productsSold}</Typography>
              <Typography variant="body2">{metrics.changes.productsSoldPct} from yesterday</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">New Customers</Typography>
              <Typography variant="h4">{metrics.newCustomers}</Typography>
              <Typography variant="body2">{metrics.changes.newCustomersPct} from yesterday</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <Bar
                data={{
                  labels: revenue.labels,
                  datasets: [
                    {
                      label: "Online Sales",
                      data: revenue.onlineSales,
                      backgroundColor: "rgba(75,192,192,0.6)",
                    },
                    {
                      label: "Offline Sales",
                      data: revenue.offlineSales,
                      backgroundColor: "rgba(153,102,255,0.6)",
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Customer Satisfaction</Typography>
              <Line
                data={{
                  labels: satisfaction.labels,
                  datasets: [
                    {
                      label: "Last Month",
                      data: satisfaction.lastMonth,
                      borderColor: "rgba(255,99,132,1)",
                      fill: false,
                    },
                    {
                      label: "This Month",
                      data: satisfaction.thisMonth,
                      borderColor: "rgba(54,162,235,1)",
                      fill: false,
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Visitors & Products */}
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Visitor Insights</Typography>
              <Line
                data={{
                  labels: visitors.labels,
                  datasets: [
                    {
                      label: "Loyal",
                      data: visitors.loyal,
                      borderColor: "green",
                      fill: false,
                    },
                    {
                      label: "New",
                      data: visitors.new,
                      borderColor: "red",
                      fill: false,
                    },
                    {
                      label: "Unique",
                      data: visitors.unique,
                      borderColor: "purple",
                      fill: false,
                    },
                  ],
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Top Products</Typography>
              {topProducts.map((p: any) => (
                <Box key={p.rank} sx={{ mb: 2 }}>
                  <Typography variant="body1">
                    {p.rank}. {p.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={p.popularity}
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
