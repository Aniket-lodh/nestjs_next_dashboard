"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({ 
    palette: {
        background: {
            default: "hsla(210, 25%, 98%, 1)", // --background
            paper: "hsla(0, 0%, 100%, 1)",    // --main-background
        },
        text: {
            heading: "hsla(231, 55%, 18%, 1)",           // --font-color-heading
            subheading: "hsla(232, 12%, 51%, 1)",        // --font-color-subheading
            cardHeading: "hsla(244, 100%, 15%, 1)",      // --font-color-card-heading
            cardTertiary: "hsla(208, 71%, 20%, 1)",      // --font-color-card-tertiary-heading
            countryDropdownHeading: "hsla(214, 23%, 28%, 1)",     // --font-color-heading-country-dropdown
            countryDropdownText: "hsla(262, 12%, 64%, 1)",        // --font-color-heading-country-dropdown-text
            cardChartY: "hsla(215, 25%, 59%, 1)",           // --font-color-card-chart-y
            cardChartX: "hsla(221, 15%, 32%, 1)",           // --font-color-card-chart-x
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
});
export default theme;