"use client";

import { useEffect } from "react";
import { useDashboardStore } from "../store/dashboard";
import TopBar from "../components/TopBar";
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
import TodaysSalesCard from "@/components/TodaysSalesCard";
import VisitorInsightsChart from "../components/VisitorInsightsChart";
import TotalRevenueChart from "@/components/TotalRevenueChart";
import CustomerSatisfactionChart from "@/components/CustomerSatisfactionChart";
import TargetVsRealityChart from "@/components/TargetVsRealityChart";
import TopProductsTable from "@/components/TopProductsTable";
import CountrySalesMap from "@/components/CountrySalesMap";
import VolumeVsServiceChart from "@/components/VolumeVsServiceChart";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { metrics, revenue, satisfaction, visitors, topProducts, loadAll } =
    useDashboardStore() as any;

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  if (!metrics) return <p>Loading...</p>;

  return (  
    <>
      <TopBar />
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <TodaysSalesCard />
          <VisitorInsightsChart />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <TotalRevenueChart />
          <CustomerSatisfactionChart />
          <TargetVsRealityChart />
        </Box>
        <Box sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}>
          <TopProductsTable />
          <CountrySalesMap />
          <VolumeVsServiceChart />
        </Box>

      </Box >
    </>
  );
}
