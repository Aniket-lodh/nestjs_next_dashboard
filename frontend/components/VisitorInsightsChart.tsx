import { Box, Card, Typography } from "@mui/material";
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

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sept", "Oct", "Nov", "Des"];
const loyalData = [320, 340, 300, 250, 270, 230, 300, 330, 320, 270, 260];
const newCustData = [220, 180, 160, 170, 230, 290, 370, 310, 300, 240, 210];
const uniqueData = [290, 350, 370, 340, 270, 270, 330, 310, 290, 250, 210];

const loyalColor = "#A323FC";
const newCustColor = "#FC5858";
const uniqueColor = "#37D159";

interface VisitorInsightsProps {
    visitorInsights: {
        labels: string[];
        loyal: number[];
        new: number[];
        unique: number[];
    } | null;
}

export default function VisitorInsightsChart({ visitorInsights }: VisitorInsightsProps) {
    const chartRef = useRef(null);

    if (!visitorInsights) return <p>Loading...</p>;

    const data = {
        labels: visitorInsights.labels,
        datasets: [
            {
                label: "Loyal Customers",
                data: visitorInsights.loyal,
                borderColor: loyalColor,
                borderWidth: 4,
                pointBackgroundColor: loyalColor,
                pointRadius: 0,
                tension: 0.5,
                fill: false,
            },
            {
                label: "New Customers",
                data: visitorInsights.new,
                borderColor: newCustColor,
                borderWidth: 4,
                pointBackgroundColor: newCustColor,
                pointRadius: (context: any) => (context.dataIndex === 6 ? 10 : 0),
                pointBorderWidth: (context: any) => (context.dataIndex === 6 ? 4 : 0),
                pointBorderColor: "#fff",
                tension: 0.5,
                fill: false,
                order: 2,
            },
            {
                label: "Unique Customers",
                data: visitorInsights.unique,
                borderColor: uniqueColor,
                borderWidth: 4,
                pointBackgroundColor: uniqueColor,
                pointRadius: 0,
                tension: 0.5,
                fill: false,
                order: 1,
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
                titleFont: { family: "Poppins", weight: 500, },
                bodyFont: { family: "Poppins", weight: 400, },
            },
        },
        layout: { padding: { top: 30, right: 16, left: 0, bottom: 0 } },
        scales: {
            x: {
                grid: { display: false, drawBorder: false },
                ticks: {
                    color: "#7B91B0",
                    font: { family: "Poppins", size: 12, weight: 400 },
                },
            },
            y: {
                grid: {
                    color: "#E6E8EC",
                    drawBorder: false,
                },
                ticks: {
                    color: "#7B91B0",
                    font: { family: "Poppins", size: 12, weight: 400 },
                    stepSize: 100,
                    beginAtZero: true,
                    callback: (value: any) => value,
                },
                min: 0,
                max: 400,
            },
        },
        elements: {
            line: { borderJoinStyle: 'round', capBezierPoints: true },
            point: {},
        },
    };
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
                maxWidth: 800,
                mx: "auto",
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    color: "text.heading",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "20px",
                }}
            >
                Visitor Insights
            </Typography>
            <Box sx={{ height: 340, width: "100%" }}>
                <Line
                    ref={chartRef}
                    data={data}
                    options={{
                        ...options,
                        plugins: {
                            ...options.plugins,
                            legend: { display: false },
                        },
                        elements: {
                            ...options.elements,
                            point: {
                                ...options.elements.point,
                                backgroundColor: (context: any) =>
                                    context.datasetIndex === 1 && context.dataIndex === 6
                                        ? newCustColor
                                        : context.dataset.borderColor,
                                radius: (context: any) =>
                                    context.datasetIndex === 1 && context.dataIndex === 6 ? 10 : 0,
                                borderWidth: (context: any) =>
                                    context.datasetIndex === 1 && context.dataIndex === 6 ? 4 : 0,
                                borderColor: "#fff",
                            },
                        } as any,
                    }}
                    plugins={[
                        {
                            id: "verticalLineJuly",
                            afterDatasetsDraw: (chart) => {
                                const { ctx, chartArea, scales } = chart;
                                if (!ctx || !chartArea) return;
                                const JulyIndex = 6;
                                const x = scales.x.getPixelForValue(JulyIndex);
                                ctx.save();
                                ctx.setLineDash([4, 4]);
                                ctx.beginPath();
                                ctx.moveTo(x, chartArea.top + 10);
                                ctx.lineTo(x, chartArea.bottom - 4);
                                ctx.strokeStyle = "#FC5858";
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.restore();
                            },
                        },
                    ]}
                />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={3}
                flexWrap="wrap"
            >
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: loyalColor, borderRadius: 2 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", color: "text.heading", fontFamily: "'Poppins', sans-serif" }}>
                        Loyal Customers
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: newCustColor, borderRadius: 2 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", color: "text.heading", fontFamily: "'Poppins', sans-serif" }}>
                        New Customers
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: uniqueColor, borderRadius: 2 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "12px", color: "text.heading", fontFamily: "'Poppins', sans-serif" }}>
                        Unique Customers
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}
