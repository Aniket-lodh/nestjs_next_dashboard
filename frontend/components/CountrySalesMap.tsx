import { Box, Card, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HIGHLIGHT_COUNTRIES: Record<string, string> = {
    "United States of America": "#FFB31B",
    Brazil: "#FF5B6A",
    Nigeria: "#5B8AFF",
    "Saudi Arabia": "#06B09A",
    China: "#A323FC",
    Indonesia: "#29B97A",
};

export default function CountrySalesMap() {
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
                    fontWeight: 700,
                    mb: 1,
                    fontFamily: "'Poppins', sans-serif",
                    color: "text.heading",
                    fontSize: { xs: "20px", md: "24px" },
                    alignSelf: "flex-start",
                }}
            >
                Sales Mapping by Country
            </Typography>
            <Box sx={{ width: '100%', minHeight: 280, height: 'stretch' }}>
                <ComposableMap
                    projection="geoMercator"
                    width={800}
                    height={400}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                const countryName = geo.properties["name"];
                                const color = HIGHLIGHT_COUNTRIES[countryName] || "#EEEEEE";
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={color}
                                        stroke="#fff"
                                        style={{
                                            default: { outline: "none" },
                                            hover: { fill: "#FFC107", outline: "none" },
                                            pressed: { outline: "none" },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </Box>
        </Card>
    );
}
