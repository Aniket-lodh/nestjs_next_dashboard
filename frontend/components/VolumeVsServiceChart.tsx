import { Box, Typography, Divider, Card } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    Tooltip,
    Filler,
} from "chart.js";

ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Filler);

const labels = ["", "", "", "", "", "", ""];
const volumeData = [400, 520, 580, 490, 300, 350, 410];
const servicesData = [310, 420, 400, 320, 260, 300, 280];

const volumeColor = "#1890FF";
const serviceColor = "#35E2B4";

const data = {
    labels,
    datasets: [
        {
            label: "Services",
            data: servicesData,
            backgroundColor: serviceColor,
            barPercentage: 0.55,
            categoryPercentage: 0.55,
            borderRadius: 8,
            stack: 'Stack 0',
            order: 1,
        },
        {
            label: "Volume",
            data: volumeData,
            backgroundColor: volumeColor,
            barPercentage: 0.55,
            categoryPercentage: 0.55,
            borderRadius: 8,
            stack: 'Stack 0',
            order: 2,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            titleFont: { family: "Poppins", weight: 500 },
            bodyFont: { family: "Poppins", weight: 400 },
            callbacks: {
                label: (context: any) => `${context.dataset.label}: ${context.parsed.y}`,
            },
        },
    },
    scales: {
        x: {
            grid: { display: false },
            ticks: {
                display: false,
            },
        },
        y: {
            grid: { color: "#F0F0F7", drawBorder: false, lineWidth: 2 },
            min: 0,
            max: 1200,
            display: false,
        },
    },
};

export default function VolumeVsServiceChart() {
    return (
        <Card
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "'Poppins', sans-serif",
                    color: "text.heading",
                    fontSize: { xs: "20px", md: "22px" },
                    alignSelf: "flex-start",
                }}
            >
                Volume vs Service Level
            </Typography>

            <Box sx={{ width: "100%", height: 'stretch', mb: 2 }}>
                <Bar data={data} options={options} height={140} width={"100%"} />
            </Box>

            <Divider sx={{ width: "100%", mb: 2 }} />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    pb: 1,
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center" mb={0.5}>
                        <Box sx={{ width: 16, height: 8, bgcolor: volumeColor, borderRadius: 2, mr: 1 }} />
                        <Typography sx={{ color: "#A0A3BD", fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 17 }}>
                            Volume
                        </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 21, fontFamily: "'Poppins', sans-serif", color: "text.heading" }}>
                        1,135
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 32, bgcolor: "#E5E8EF" }} />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center" mb={0.5}>
                        <Box sx={{ width: 16, height: 8, bgcolor: serviceColor, borderRadius: 2, mr: 1 }} />
                        <Typography sx={{ color: "#A0A3BD", fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: 17 }}>
                            Services
                        </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 21, fontFamily: "'Poppins', sans-serif", color: "text.heading" }}>
                        635
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}
