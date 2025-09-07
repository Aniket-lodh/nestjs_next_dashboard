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
                px: 4,
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
                    fontWeight: 700,
                    fontFamily: "'Poppins', sans-serif",
                    color: "text.heading",
                    fontSize: "24px",
                    m: 2,
                }}
            >
                Top Products
            </Typography>
            <Table sx={{ minWidth: 600 }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: "#A0A3BD", fontWeight: 600, fontSize: 18, fontFamily: "'Poppins', sans-serif", width: 70 }}>#</TableCell>
                        <TableCell sx={{ color: "#A0A3BD", fontWeight: 600, fontSize: 18, fontFamily: "'Poppins', sans-serif" }}>Name</TableCell>
                        <TableCell sx={{ color: "#A0A3BD", fontWeight: 600, fontSize: 18, fontFamily: "'Poppins', sans-serif" }}>Popularity</TableCell>
                        <TableCell sx={{ color: "#A0A3BD", fontWeight: 600, fontSize: 18, fontFamily: "'Poppins', sans-serif", width: 80 }}>Sales</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id} sx={{ height: 70 }}>
                            <TableCell sx={{ color: "#23235F", fontWeight: 600, fontSize: 17, fontFamily: "'Poppins', sans-serif" }}>{product.id}</TableCell>
                            <TableCell sx={{ color: "#23235F", fontWeight: 500, fontSize: 18, fontFamily: "'Poppins', sans-serif" }}>{product.name}</TableCell>
                            <TableCell>
                                <Box sx={{ minWidth: 120, mr: 2 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={product.popularity}
                                        sx={{
                                            height: 8,
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
                            <TableCell align="center">
                                <Box
                                    sx={{
                                        display: "inline-block",
                                        px: 2,
                                        py: 0.5,
                                        bgcolor: product.salesBg,
                                        color: product.salesColor,
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: 17,
                                        borderRadius: 2,
                                        border: `1.5px solid ${product.salesColor}`,
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
