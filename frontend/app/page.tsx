"use client";

import { useEffect } from "react";
import { useDashboardStore } from "../store/dashboard";
import TopBar from "../components/TopBar";
import { Box } from "@mui/material";
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
            flexDirection: { xs: "column", md: "row" },
            flexWrap: "wrap",
            alignItems: { md: "stretch" },
            height: "fit-content",
            maxWidth: "100%",
          }}
        > 
          <TodaysSalesCard metrics={metrics} />
          <VisitorInsightsChart visitorInsights={visitors} />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <TotalRevenueChart revenue={revenue} />
          <CustomerSatisfactionChart customerSatisfaction={satisfaction} />
          <TargetVsRealityChart chartData={revenue?.targetVsReality} />
        </Box>
        <Box sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}>
          <TopProductsTable topProducts={topProducts} />
          <CountrySalesMap countrySales={metrics?.countrySales || {}} />
          <VolumeVsServiceChart volumeVsService={metrics?.volumeVsService || {}}/>
        </Box>

      </Box >
    </>
  );
}
