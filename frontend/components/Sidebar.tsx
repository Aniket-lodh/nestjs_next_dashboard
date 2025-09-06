"use client";

import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from "@mui/material";
import Image from "next/image";

const menuItems = [
    { label: "Dashboard", icon: <Image src="dashboard_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: true },
    { label: "Leaderboard", icon: <Image src="leaderboard_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Order", icon: <Image src="orders_ion.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Products", icon: <Image src="product_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Sales Report", icon: <Image src="sales_report_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Messages", icon: <Image src="messages_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Settings", icon: <Image src="settings_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
    { label: "Sign Out", icon: <Image src="signout_icon.svg" alt="Dabang Logo" width={32} height={32} priority />, active: false },
];

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 345,
                height: "100vh",
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                paddingTop: "50px",
                justifyContent: "space-between",
            }}
        >
            {/* Brand Logo */}
            <Box sx={{
                userSelect: "none",
                cursor: "default",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                paddingLeft: "43px",
                gap: 3
            }}>
                <Box
                    sx={{
                        bgcolor: "#5F56FF",
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 24,
                    }}
                >
                    <Image src="dummy_logo.svg" alt="Dabang Logo" width={25} height={25} priority />
                </Box>
                <Typography variant="h6" component="span" sx={{ fontSize: "30px", fontWeight: "600", lineHeight: "150%", color: "text.heading" }}>
                    Dabang
                </Typography>
            </Box>

            {/* Navigation Items */}
            <List sx={{ flexGrow: 1, margin: "49px 0px 0px", padding: "0px 46px 0px" }}>
                {menuItems.map(({ label, icon, active }) => (
                    <ListItemButton
                        key={label}
                        selected={active}
                        sx={{
                            borderRadius: active ? 4 : 0,
                            bgcolor: active ? "#5D5FEF !important" : "transparent",
                            color: active ? "primary.contrastText" : "text.primary",
                            fontWeight: active ? "bold" : 400,
                            fontSize: 18,
                            lineHeight: "27px",
                            opacity: 1,
                            padding: "16px 24px",
                            boxShadow: active ? "0px 20px 50px 0px hsla(214, 23%, 28%, 0.1)" : "none",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 40,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ width: 32, height: 32 }}>
                                {icon}
                            </Box>
                        </ListItemIcon>

                        <ListItemText primary={label} slotProps={{
                            primary: {
                                sx: {
                                    marginLeft: 3,
                                    fontWeight: active ? 600 : 400,
                                    color: active ? "primary.contrastText" : "text.subheading",
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                },
                            },
                        }} />
                    </ListItemButton>
                ))}
            </List>


            {/* Dabang Pro Box */}
            <Box
                sx={{
                    bgcolor: "#5F56FF",
                    color: "white",
                    borderRadius: 3,
                    textAlign: "center",
                    backgroundImage: 'url("/bg-pattern.svg")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    p: 4,
                    mx: 3, // horizontal spacing
                    mb: 3, // bottom spacing
                }}
            >
                <Typography variant="h6" mb={1}>
                    Dabang Pro
                </Typography>
                <Typography variant="body2" mb={2}>
                    Get access to all features on tetumbas
                </Typography>
                <Button variant="contained" sx={{ bgcolor: "white", color: "#5F56FF", fontWeight: "bold" }}>
                    Get Pro
                </Button>
            </Box>
        </Box>
    );
}
