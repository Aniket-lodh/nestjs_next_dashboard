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

const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Online Sales",
      data: [14000, 17000, 6000, 16000, 12000, 17000, 21000],
      backgroundColor: "#1890FF",
      borderRadius: 10,
      barPercentage: 0.45,
      categoryPercentage: 0.42,
    },
    {
      label: "Offline Sales",
      data: [13000, 12000, 23000, 7000, 12000, 13000, 12000],
      backgroundColor: "#35E2B4",
      borderRadius: 10,
      barPercentage: 0.45,
      categoryPercentage: 0.42,
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
        color: "#46465A",
        font: { size: 18, family: "Poppins", weight: 600 },
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
        color: "#A2A2B7",
        font: { size: 16, family: "Poppins", weight: 500 },
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

export default function TotalRevenueChart() {
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
        height: { xs: 370, sm: 420, md: 440 },
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
          fontWeight: 700,
          mb: 2,
          fontFamily: "'Poppins', sans-serif",
          color: "text.heading",
          fontSize: { xs: "20px", md: "24px" },
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
          <Typography sx={{ fontWeight: 500, color: "#23235F", fontFamily: "'Poppins', sans-serif" }}>
            Online Sales
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Box sx={{ width: 20, height: 8, bgcolor: "#35E2B4", borderRadius: 2 }}></Box>
          <Typography sx={{ fontWeight: 500, color: "#23235F", fontFamily: "'Poppins', sans-serif" }}>
            Offline Sales
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
