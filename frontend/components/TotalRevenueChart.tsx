import { Box, Card, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend);
interface TotalRevenueChartProps {
  revenue: {
    labels: string[];
    onlineSales: number[];
    offlineSales: number[];
  } | null;
}


export default function TotalRevenueChart({ revenue }: TotalRevenueChartProps) {
  if (!revenue) return <p>Loading...</p>;

  const data = {
    labels: revenue.labels,
    datasets: [
      {
        label: "Online Sales",
        data: revenue.onlineSales,
        backgroundColor: "#1890FF",
        borderRadius: 2.5,
        barPercentage: 0.8,
        categoryPercentage: 0.7
      },
      {
        label: "Offline Sales",
        data: revenue.offlineSales,
        backgroundColor: "#35E2B4",
        borderRadius: 2.5,
        barPercentage: 0.8,
        categoryPercentage: 0.7
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 16,
            family: "Poppins",
            weight: 400,
          },
          color: "#23235F",
          usePointStyle: true,
          padding: 30,
        },
        position: "bottom" as const,
      },
      tooltip: {
        enabled: true,
        titleFont: { family: "Poppins", weight: 500 },
        bodyFont: { family: "Poppins", weight: 400 },
      },
    },
    layout: { padding: { left: 5, right: 5, top: 20, bottom: 5 } },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: {
          color: "#7B91B0",
          font: {
            size: 12,
            family: "Poppins",
            weight: 400,
          },
        },
      },
      y: {
        grid: {
          color: "#F0F0F7",
          drawBorder: false,
          lineWidth: 2,
        },
        min: 0,
        max: 25000,
        ticks: {
          color: "#7B91B0",
          font: { size: 14, family: "Poppins", weight: 400 },
          callback: (tickValue: string | number) => {
            if (typeof tickValue === "number") {
              return `${tickValue / 1000}k`;
            }
            return tickValue;
          },
        },
      },
    },
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "20px !important",
        px: 4,
        py: 3,
        mb: 3,
        overflow: "hidden",
        boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
        flexGrow: 1,
        flexBasis: 0,
        minWidth: 300,
        maxWidth: 550,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontFamily: "'Poppins', sans-serif",
          color: "text.heading",
          fontSize: "20px",
          lineHeight: "32px"
        }}
      >
        Total Revenue
      </Typography>
      <Box sx={{ flex: 1, minHeight: 260 }}>
        <Bar data={data} options={options} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box sx={{ width: 20, height: 8, bgcolor: "#1890FF", borderRadius: 2 }}></Box>
          <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#23235F", fontFamily: "'Poppins', sans-serif" }}>
            Online Sales
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Box sx={{ width: 20, height: 8, bgcolor: "#35E2B4", borderRadius: 2 }}></Box>
          <Typography sx={{ fontWeight: 400, fontSize: "14px", color: "#23235F", fontFamily: "'Poppins', sans-serif" }}>
            Offline Sales
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
