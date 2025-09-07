import { Box, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Define country codes and colors to highlight
const HIGHLIGHT_COUNTRY_COLORS: any = {
    US: "#FFB31B",      // United States
    BR: "#FF5B6A",      // Brazil
    NG: "#5B8AFF",      // Nigeria
    SA: "#06B09A",      // Saudi Arabia
    CN: "#A323FC",      // China
    ID: "#29B97A",      // Indonesia
};

export default function CountrySalesMap() {
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                borderRadius: "24px",
                p: { xs: 2, md: 4 },
                boxShadow: "0 6px 40px 0 rgba(135, 139, 174, 0.07)",
                width: "100%",
                maxWidth: 440,
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
            <Box sx={{ width: '100%', height: 280 }}>
                <ComposableMap
                    projection="geoMercator"
                    width={800}
                    height={400}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => {
                                // Each geo properties contains country id (ISO_A2)
                                const isoCode = geo.properties.ISO_A2;
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={
                                            HIGHLIGHT_COUNTRY_COLORS[isoCode]
                                                ? HIGHLIGHT_COUNTRY_COLORS[isoCode]
                                                : "#EEEEEE"
                                        }
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
        </Box>
    );
}
