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
import Image from "next/image";

ChartJS.register(LinearScale, CategoryScale, BarElement, Tooltip, Legend);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
const data = {
    labels,
    datasets: [
        {
            label: "Reality Sales",
            data: [6.2, 7.3, 5.8, 8.1, 7.6, 8.4, 7.9],
            backgroundColor: "#5DE0A8",
            borderRadius: 2.5,
            barPercentage: 0.8,
            categoryPercentage: 0.5,
        },
        {
            label: "Target Sales",
            data: [8.0, 9.2, 8.3, 9.8, 12.1, 12.5, 12.0],
            backgroundColor: "#FFD81B",
            borderRadius: 2.5,
            barPercentage: 0.8,
            categoryPercentage: 0.5,
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
            grid: { display: false, drawBorder: false },
            ticks: {
                color: "#2A3356",
                font: { family: "Poppins", size: 12, weight: 400 },
            },
        },
        y: {
            grid: { display: false, drawBorder: false },
            ticks: { display: false },
            beginAtZero: true,
            display: false,
        },
    },
};
export default function TargetVsRealityChart() {
    return (
        <Card
            sx={{
                borderRadius: "20px !important",
                px: 4,
                py: 3,
                mb: 3,
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                overflow: "hidden",
                flexGrow: 1,
                flexBasis: 0,
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
                    alignSelf: "flex-start",
                }}
            >
                Target vs Reality
            </Typography>

            <Box sx={{ width: "100%", minHeight: 150, height: "stretch", mb: 1 }}>
                <Bar data={data} options={options} height={150} width={"100%"} />
            </Box>
            <Box
                sx={{
                    bgcolor: "transparent",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    flexDirection: "column",
                    gap: 2
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "transparent",
                        p: 0,
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#DDFDF1",
                            borderRadius: 2,
                            p: 1.2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="reality_sales.svg"
                            alt="Reality"
                            width={28}
                            height={28}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontFamily: "'Poppins', sans-serif",
                                color: "text.heading",
                                fontSize: 14,
                                lineHeight: "16px",
                            }}
                        >
                            Reality Sales
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontFamily: "'Poppins', sans-serif",
                                color: "#737791",
                                fontSize: "12px",
                            }}
                        >
                            Global
                        </Typography>
                    </Box>
                    <Box sx={{ ml: "1.5rem" }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontFamily: "'Poppins', sans-serif",
                                color: "#27AE60",
                                fontSize: "14px",
                            }}
                        >
                            8.823
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "transparent",
                        p: 0,
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#FFF3BC",
                            borderRadius: 2,
                            p: 1.2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="target_sales.svg"
                            alt="Reality"
                            width={28}
                            height={28}
                        />
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontFamily: "'Poppins', sans-serif",
                                color: "text.heading",
                                fontSize: 14,
                                lineHeight: "16px",
                            }}
                        >
                            Target Sales
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontFamily: "'Poppins', sans-serif",
                                color: "#737791",
                                fontSize: "12px",
                            }}
                        >
                            Commercial
                        </Typography>
                    </Box>
                    <Box sx={{ ml: "1.5rem" }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontFamily: "'Poppins', sans-serif",
                                color: "#FFA412",
                                fontSize: "14px",
                            }}
                        >
                            12.122
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}
