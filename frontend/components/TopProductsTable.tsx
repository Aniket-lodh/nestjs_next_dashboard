import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, LinearProgress, Card } from "@mui/material";

const products = [
    {
        id: "01",
        name: "Home Decor Range",
        popularity: 45,
        popularityColor: "#1890FF",
        sales: "45%",
        salesBg: "#E3F4FF",
        salesColor: "#1890FF",
    },
    {
        id: "02",
        name: "Disney Princess Pink Bag 18'",
        popularity: 29,
        popularityColor: "#35E2B4",
        sales: "29%",
        salesBg: "#E2FFF3",
        salesColor: "#37D159",
    },
    {
        id: "03",
        name: "Bathroom Essentials",
        popularity: 18,
        popularityColor: "#A323FC",
        sales: "18%",
        salesBg: "#F3E6FC",
        salesColor: "#A323FC",
    },
    {
        id: "04",
        name: "Apple Smartwatches",
        popularity: 25,
        popularityColor: "#FF9900",
        sales: "25%",
        salesBg: "#FFF4D5",
        salesColor: "#FF9900",
    },
];

export default function TopProductsTable() {
    return (
        <TableContainer
            component={Card}
            elevation={0}
            sx={{
                borderRadius: "20px !important",
                overflow: "hidden",
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                py: 3,
                mb: 3,
                flexGrow: 1,
                flexBasis: 0,
                minWidth: 500,
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
                }}
            >
                Top Products
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: "#96A5B8", fontWeight: 400, fontSize: 13, fontFamily: "'Poppins', sans-serif", pl: 4 }}>#</TableCell>
                        <TableCell sx={{ color: "#96A5B8", fontWeight: 400, fontSize: 13, fontFamily: "'Poppins', sans-serif" }}>Name</TableCell>
                        <TableCell sx={{ color: "#96A5B8", fontWeight: 400, fontSize: 13, fontFamily: "'Poppins', sans-serif" }}>Popularity</TableCell>
                        <TableCell sx={{ color: "#96A5B8", fontWeight: 400, fontSize: 13, fontFamily: "'Poppins', sans-serif", pr: 4 }}>Sales</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id} sx={{ height: 60 }}>
                            <TableCell sx={{ color: "#444A6D", fontWeight: 400, fontSize: 14, fontFamily: "'Poppins', sans-serif", pl: 4 }}>{product.id}</TableCell>
                            <TableCell sx={{ color: "#444A6D", fontWeight: 400, fontSize: 14, fontFamily: "'Poppins', sans-serif" }}>{product.name}</TableCell>
                            <TableCell>
                                <Box sx={{ minWidth: 80 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={product.popularity}
                                        sx={{
                                            height: 6,
                                            borderRadius: 4,
                                            backgroundColor: "#F3F4F8",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: product.popularityColor,
                                                borderRadius: 4,
                                            },
                                        }}
                                    />
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ pr: 4 }}>
                                <Box
                                    sx={{
                                        display: "inline-block",
                                        px: 2,
                                        py: 0.5,
                                        bgcolor: product.salesBg,
                                        color: product.salesColor,
                                        fontWeight: 400,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 13,
                                        borderRadius: "8px",
                                        border: `1px solid ${product.salesColor}`,
                                    }}
                                >
                                    {product.sales}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
