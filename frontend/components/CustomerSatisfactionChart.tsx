import { Box, Typography, Divider, Card } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Filler,
} from "chart.js";
import { useRef } from "react";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler);

const months = ["", "", "", "", "", "", ""];
const thisMonthData = [64, 52, 55, 50, 57, 50, 61];
const lastMonthData = [40, 45, 38, 39, 40, 42, 48];

const lastMonthColor = "#1884F7";
const thisMonthColor = "#27CFB6";
interface CustomerSatisfactionProps {
    customerSatisfaction: {
        labels: string[];
        lastMonth: number[];
        thisMonth: number[];
        summary: {
            lastMonthTotal: number;
            thisMonthTotal: number;
        };
    } | null;
}

export default function CustomerSatisfactionChart({ customerSatisfaction }: CustomerSatisfactionProps) {
    const chartRef = useRef(null);

    if (!customerSatisfaction) return <p>Loading...</p>;

    const getGradient = (ctx: any, color1: string, color2: string) => {
        const chart = ctx.chart;
        const { ctx: canvas, chartArea } = chart;
        if (!chartArea) return null;
        const gradient = canvas.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        return gradient;
    };

    const data = {
        labels: customerSatisfaction.labels,
        datasets: [
            {
                label: "Last Month",
                data: customerSatisfaction.lastMonth,
                borderColor: lastMonthColor,
                backgroundColor: (ctx: any) =>
                    getGradient(ctx, "rgba(24,132,247,0.16)", "rgba(24,132,247,0)"),
                tension: 0.35,
                pointBackgroundColor: lastMonthColor,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBorderWidth: 2,
                fill: true,
                order: 2,
            },
            {
                label: "This Month",
                data: customerSatisfaction.thisMonth,
                borderColor: thisMonthColor,
                backgroundColor: (ctx: any) =>
                    getGradient(ctx, "rgba(39,207,182,0.16)", "rgba(39,207,182,0)"),
                tension: 0.35,
                pointBackgroundColor: thisMonthColor,
                pointRadius: 3,
                pointHoverRadius: 5,
                pointBorderWidth: 2,
                fill: true,
                order: 1,
            }

        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                backgroundColor: "#fff",
                bodyColor: "#23235F",
                borderColor: "#E0E7EF",
                borderWidth: 1,
                titleFont: { family: "Poppins", weight: 500 },
                bodyFont: { family: "Poppins", weight: 400 },
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
                min: 20,
                max: 80,
            },
        },
        elements: {
            line: { borderWidth: 3 },
            point: { borderColor: "#fff" },
        },
    };

    return (
        <Card
            sx={{
                borderRadius: "20px !important",
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                px: 4,
                py: 3,
                mb: 3,
                overflow: "hidden",
                flexGrow: 1,
                flexBasis: 0,
                maxWidth: 440,
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
                Customer Satisfaction
            </Typography>

            <Box sx={{ width: "100%", minheight: 190, flexGrow: 1, mb: 2 }}>
                <Line
                    ref={chartRef}
                    data={data}
                    options={options}
                    height={190}
                    width={"100%"}
                />
            </Box>

            <Divider sx={{ width: "100%", mb: 2 }} />

            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                    alignItems: "center",
                    pb: 1,
                }}
            >
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center" mb={0.5}>
                        <Box
                            sx={{
                                width: 26,
                                height: 4,
                                bgcolor: lastMonthColor,
                                borderRadius: 2,
                                mr: 1,
                            }}
                        />
                        <Typography
                            sx={{
                                color: "#96A5B8",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 400,
                                fontSize: 16,
                            }}
                        >
                            Last Month
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: 14,
                            fontFamily: "'Poppins', sans-serif",
                            color: "#222B45"
                        }}
                    >
                        {`$${customerSatisfaction.summary.lastMonthTotal.toLocaleString()}`}
                    </Typography>
                </Box>

                <Divider orientation="vertical" flexItem sx={{ mx: 2, height: 32, bgcolor: "#E5E8EF" }} />

                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box display="flex" alignItems="center" mb={0.5}>
                        <Box
                            sx={{
                                width: 26,
                                height: 4,
                                bgcolor: thisMonthColor,
                                borderRadius: 2,
                                mr: 1,
                            }}
                        />
                        <Typography
                            sx={{
                                color: "#96A5B8",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 400,
                                fontSize: 16,
                            }}
                        >
                            This Month
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: 14,
                            fontFamily: "'Poppins', sans-serif",
                            color: "#222B45"
                        }}
                    >
                        {`$${customerSatisfaction.summary.thisMonthTotal.toLocaleString()}`}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}
