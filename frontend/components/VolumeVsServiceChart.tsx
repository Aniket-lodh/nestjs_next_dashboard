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
            borderRadius: 2.5,
            stack: 'Stack 0',
            order: 1,
        },
        {
            label: "Volume",
            data: volumeData,
            backgroundColor: volumeColor,
            barPercentage: 0.55,
            categoryPercentage: 0.55,
            borderRadius: 2.5,
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
            grid: { display: false, drawBorder: false, lineWidth: 2 },
            display: false,
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
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    color: "text.heading",
                    fontSize: "20px",
                    px: 4,
                    alignSelf: "flex-start",
                }}
            >
                Volume vs Service Level
            </Typography>

            <Box sx={{
                width: "100%", height: 'stretch',
                px: 4
            }}>
                <Bar data={data} options={options} height={140} width={"100%"} />
            </Box>

            <Divider sx={{ width: "100%", my: 2 }} />

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="center" mr={2}>
                    <Box display="flex" alignItems="center">
                        <Box sx={{ width: 8, height: 8, bgcolor: volumeColor, borderRadius: 2, mr: 1 }} />
                        <Typography sx={{ color: "#96A5B8", fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16 }}>
                            Volume
                        </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 500, fontSize: 14, fontFamily: "'Poppins', sans-serif", color: "#222B45" }}>
                        1,135
                    </Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 32, bgcolor: "#E5E8EF" }} />
                <Box display="flex" flexDirection="column" alignItems="center" ml={2}>
                    <Box display="flex" alignItems="center">
                        <Box sx={{ width: 8, height: 8, bgcolor: serviceColor, borderRadius: 2, mr: 1 }} />
                        <Typography sx={{ color: "#96A5B8", fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 16 }}>
                            Services
                        </Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 500, fontSize: 14, fontFamily: "'Poppins', sans-serif", color: "#222B45" }}>
                        635
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}
