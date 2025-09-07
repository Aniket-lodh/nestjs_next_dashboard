import { Box, Card, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sept", "Oct", "Nov", "Des"
];

const data = {
    labels: months,
    datasets: [
        {
            label: "Loyal Customers",
            data: [300, 350, 310, 270, 250, 260, 310, 320, 300, 260, 230, 200],
            borderColor: "#A323FC",
            pointBackgroundColor: "#A323FC",
            borderWidth: 4,
            tension: 0.5,
            pointRadius: 0,
            fill: false,
        },
        {
            label: "New Customers",
            data: [220, 200, 180, 190, 230, 260, 360, 350, 330, 300, 270, 220],
            borderColor: "#FC5858",
            pointBackgroundColor: "#FC5858",
            borderWidth: 4,
            tension: 0.5,
            pointRadius: 0,
            fill: false,
            segment: {
                borderDash: (ctx: { p0DataIndex: number; }) => ctx.p0DataIndex === 6 ? [4, 4] : undefined,
            },
        },
        {
            label: "Unique Customers",
            data: [280, 340, 360, 330, 300, 290, 320, 330, 310, 290, 250, 210],
            borderColor: "#37D159",
            pointBackgroundColor: "#37D159",
            borderWidth: 4,
            tension: 0.5,
            pointRadius: 0,
            fill: false,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            titleFont: { family: "Poppins", weight: 600 },
            bodyFont: { family: "Poppins", weight: 400, },
        }
    },
    layout: { padding: { top: 30, right: 16, left: 0, bottom: 0 } },
    scales: {
        x: {
            grid: { display: false, drawBorder: false },
            ticks: {
                color: "#2A3356",
                font: { family: "Poppins", size: 15, weight: 500 },
                padding: 12,
            },
        },
        y: {
            grid: {
                color: "#E6E8EC",
                drawBorder: false,
                lineWidth: 2,
            },
            ticks: {
                color: "#B2B7C6",
                font: { family: "Poppins", size: 15, weight: 500 },
                padding: 12,
                stepSize: 100,
                beginAtZero: true,
            },
            min: 0,
            max: 400,
        },
    },
    elements: {
        point: {
            radius: 0
        }
    },
    pluginsCustom: true,
};

function VisitorInsightsChart() {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "20px !important",
                px: 4,
                py: 3,
                mb: 3,
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                flexShrink: 0,
                minWidth: 280,
                overflow: "hidden",

            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "text.heading", lineHeight: "32px", fontFamily: "'Poppins', sans-serif", fontSize: "20px" }}
            >
                Visitor Insights
            </Typography>

            <Box sx={{ minHeight: 200, height: "fit-content", width: "100%" }}>
                <Line
                    data={data}
                    options={{
                        ...options,
                        elements: {
                            ...options.elements,
                            point: {
                                ...options.elements.point,
                                backgroundColor: (context) => {
                                    const { datasetIndex, dataIndex } = context;
                                    if (datasetIndex === 1 && dataIndex === 6) return "#FC5858";

                                    const color = context.dataset.borderColor;
                                    return typeof color === "function" ? color(context, {}) : (color as string);
                                },
                                radius: (context) => (context.datasetIndex === 1 && context.dataIndex === 6 ? 10 : 0),
                                borderWidth: (context) => (context.datasetIndex === 1 && context.dataIndex === 6 ? 4 : 0),
                                borderColor: "#fff",
                            },
                        },
                    }}
                    plugins={[
                        {
                            id: "customLine",
                            afterDatasetsDraw: (chart) => {
                                const { ctx, chartArea, scales } = chart;
                                if (!ctx || !chartArea) return;
                                const JulyIndex = 6;
                                const x = scales.x.getPixelForValue(parseInt(months[JulyIndex]));
                                ctx.save();
                                ctx.beginPath();
                                ctx.setLineDash([4, 4]);
                                ctx.moveTo(x, chartArea.top + 10);
                                ctx.lineTo(x, chartArea.bottom - 4);
                                ctx.strokeStyle = "#FC5858";
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.restore();
                            },
                        }
                    ]}
                />
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" gap={5}>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#A323FC", borderRadius: .5 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "hsla(221, 15%, 32%, 1)", fontFamily: "'Poppins', sans-serif" }}>
                        Loyal Customers
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#FC5858", borderRadius: .5 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "hsla(221, 15%, 32%, 1)", fontFamily: "'Poppins', sans-serif" }}>
                        New Customers
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                    <Box sx={{ width: 8, height: 8, bgcolor: "#37D159", borderRadius: .5 }} />
                    <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "hsla(221, 15%, 32%, 1)", fontFamily: "'Poppins', sans-serif" }}>
                        Unique Customers
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}

export default VisitorInsightsChart;
