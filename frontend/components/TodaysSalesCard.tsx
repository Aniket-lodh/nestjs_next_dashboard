import { Box, Card, Typography, Button, Paper } from "@mui/material";
import Image from "next/image";

const kpiData = [
    {
        icon: "total_sales.svg",
        value: "$1k",
        label: "Total Sales",
        change: "+8% from yesterday",
        cardBg: "#FFE4EA",
        changeColor: "hsla(220, 83%, 59%, 1)",
    },
    {
        icon: "total_orders.svg",
        value: "300",
        label: "Total Order",
        change: "+5% from yesterday",
        cardBg: "#FFF4D5",
        changeColor: "hsla(220, 83%, 59%, 1)",
    },
    {
        icon: "productsold_icon.svg",
        value: "5",
        label: "Product Sold",
        change: "+1,2% from yesterday",
        cardBg: "#E3FFED",
        changeColor: "hsla(220, 83%, 59%, 1)",
    },
    {
        icon: "new_customers_icon.svg",
        value: "8",
        label: "New Customers",
        change: "0,5% from yesterday",
        cardBg: "#F3EFFF",
        changeColor: "hsla(220, 83%, 59%, 1)",
    },
];

export default function TodaysSalesCard() {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: "20px !important",
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                px: 4,
                py: 3,
                mb: 3,
                overflow: "hidden",
                flexGrow: { md: 1 },
                flexBasis: { md: 0 },
                width: { xs: "100%", md: "auto" },
                minWidth: { md: 400 },
                maxWidth: { xs: "100%", md: "70%" },
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 4,
            }}
            id="todays-sales-card"
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight={600}
                        fontFamily="'Poppins', sans-serif"
                        color="text.heading"
                        sx={{ fontSize: "20px" }}
                    >
                        Today&apos;s Sales
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.subheading"
                        fontFamily="'Poppins', sans-serif"
                        sx={{ fontWeight: 400, fontSize: "16px", lineHeight: "30px" }}
                    >
                        Sales Summery
                    </Typography>
                </Box>
                <Button
                    variant="outlined"
                    startIcon={<Image src={"export_icon.svg"} width={16} height={16} alt={"export icon"} />}
                    sx={{
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 500,
                        fontFamily: "'Poppins', sans-serif",
                        color: "hsla(208, 71%, 20%, 1)",
                        borderColor: "hsla(209, 35%, 83%, 1)"
                    }}
                >
                    Export
                </Button>
            </Box>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                mb: 3,
                width: "100%",
                flexWrap: "wrap",
            }}>
                {kpiData.map((kpi) => (
                    <Paper
                        elevation={0}
                        key={kpi.label}
                        sx={{
                            bgcolor: kpi.cardBg,
                            borderRadius: "16px",
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            height: "fit-content",
                            flexGrow: 1
                        }}
                    >
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: "white",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 2,
                            }}
                        >
                            <Image src={kpi.icon} alt={kpi.label} width={40} height={40} />
                        </Box>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 600,
                                fontSize: "24px",
                                color: "#1B254B",
                            }}
                        >
                            {kpi.value}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 500,
                                fontSize: "16px",
                                color: "hsla(215, 22%, 33%, 1)",
                                mt: 1,
                            }}
                        >
                            {kpi.label}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 500,
                                fontSize: "12px",
                                color: kpi.changeColor,
                                mt: 1,
                            }}
                        >
                            {kpi.change}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Card>
    );
}
