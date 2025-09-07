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
            ticks: { display: false },
        },
        y: {
            grid: { display: false, drawBorder: false },
            ticks: { display: false },
            beginAtZero: true,
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
                                fontSize: 12,
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
                                fontSize: "10px",
                            }}
                        >
                            Global
                        </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
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
                                fontSize: 12,
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
                                fontSize: "10px",
                            }}
                        >
                            Commercial
                        </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
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

            {/* 
            <Box
                sx={{
                    bgcolor: "transparent",
                    borderRadius: 8,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 1,
                    pt: 1,
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "#E6FFF4",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        gap: 1,
                        minWidth: "120px",
                    }}
                >
                    <Box sx={{ bgcolor: "#CFF7E3", borderRadius: "50%", p: 0.5 }}>
                        <Image src="reality_sales.svg" alt="reality" width={18} height={18} />
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#1B254B",
                                fontWeight: 500,
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 16,
                                mb: 0.2,
                            }}
                        >
                            Reality Sales
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#8898AA",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 12,
                            }}
                        >
                            Global
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "#5DE0A8",
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 18,
                            ml: 2,
                        }}
                    >
                        8.823
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        bgcolor: "#FFFCE4",
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        gap: 1,
                        minWidth: "120px",
                    }}
                >
                    <Box sx={{ bgcolor: "#FFF3BC", borderRadius: "50%", p: 0.5 }}>
                        <Image src="target_sales.svg" alt="target" width={18} height={18} />
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#1B254B",
                                fontWeight: 500,
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 16,
                                mb: 0.2,
                            }}
                        >
                            Target Sales
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#8898AA",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: 12,
                            }}
                        >
                            Commercial
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "#FFD81B",
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: 18,
                            ml: 2,
                        }}
                    >
                        12.122
                    </Typography>
                </Box>
            </Box> */}
        </Card>
    );
}
