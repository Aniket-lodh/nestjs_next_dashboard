import { Box, Card, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface CountrySalesMapProps {
    countrySales: Record<string, number>;
}

export default function CountrySalesMap({ countrySales }: CountrySalesMapProps) {
    const baseColors: Record<string, string> = {
        "United States of America": "rgba(255, 179, 27, 1)",
        Brazil: "rgba(255, 91, 106, 1)",
        Nigeria: "rgba(88, 138, 255, 1)",
        "Saudi Arabia": "rgba(6, 176, 154, 1)",
        China: "rgba(163, 35, 252, 1)",
        Indonesia: "rgba(41, 185, 122, 1)",
    };

    const fallbackColor = "rgba(238, 238, 238, 1)";

    const getColor = (countryName: string) => {
        const base = baseColors[countryName] || fallbackColor;
        if (!countrySales || !countrySales[countryName]) return base;

        const opacity = 0.4 + 0.6 * (countrySales[countryName] / maxSales);

        return base.replace(/rgba\((\d+), (\d+), (\d+), ([^)]+)\)/, `rgba($1, $2, $3, ${opacity})`);
    };


    const maxSales = Math.max(...Object.values(countrySales || {}), 1);

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
                maxWidth: 500,
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
                Sales Mapping by Country
            </Typography>
            <Box sx={{ width: "100%", minHeight: 280, height: "stretch", mt: 1 }}>
                <ComposableMap projection="geoMercator" style={{ width: "100%", height: "100%" }}>
                    <ZoomableGroup zoom={1.2}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => {
                                    const countryName = geo.properties["name"];
                                    const fillColor = getColor(countryName);
                                    return (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            fill={fillColor}
                                            stroke="#fff"
                                            style={{
                                                default: { outline: "none" },
                                                hover: { outline: "none" },
                                                pressed: { outline: "none" },
                                            }}
                                        />
                                    );
                                })
                            }
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </Box>
        </Card>
    );
}
