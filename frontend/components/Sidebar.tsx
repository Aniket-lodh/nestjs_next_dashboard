"use client";

import React from "react";
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from "@mui/material";
import Image from "next/image";

const menuItems = [
    { label: "Dashboard", icon: <Image src="dashboard_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: true },
    { label: "Leaderboard", icon: <Image src="leaderboard_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Order", icon: <Image src="orders_ion.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Products", icon: <Image src="product_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Sales Report", icon: <Image src="sales_report_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Messages", icon: <Image src="messages_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Settings", icon: <Image src="settings_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
    { label: "Sign Out", icon: <Image src="signout_icon.svg" alt="Dabang Logo" width={24} height={24} priority />, active: false },
];

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 280,
                height: "100vh",
                bgcolor: "background.paper",
                borderRadius: 3,
                boxShadow: 1,
                display: "flex",
                flexDirection: "column",
                p: 3,
                justifyContent: "space-between",
            }}
        >
            {/* Brand Logo */}
            <Box sx={{
                mb: 4, userSelect: "none",
                cursor: "default",
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
            </Box>

            {/* Navigation Items */}
            <List sx={{ flexGrow: 1 }}>
                {menuItems.map(({ label, icon, active }) => (
                    <ListItemButton
                        key={label}
                        selected={active}
                        sx={{
                            borderRadius: active ? 2 : 0,
                            mb: 1,
                            bgcolor: active ? "#5D5FEF" : "transparent",
                            color: active ? "primary.contrastText" : "text.primary",
                            fontWeight: active ? "bold" : 400,
                            fontSize: 18,
                            lineHeight: "27px",
                            opacity: 1,
                            // "&:hover": {
                            //     bgcolor: active ? "primary.dark" : "action.hover",
                            // },
                            boxShadow: active ? "0px 20px 50px 0px hsla(214, 23%, 28%, 0.1)" : "none",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: active ? "primary.contrastText" : "text.primary",
                               
                                opacity: 1,
                            }}
                        >
                            {icon}
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItemButton>
                ))}
            </List>


            {/* Dabang Pro Box */}
            <Box
                sx={{
                    bgcolor: "#5F56FF",
                    color: "white",
                    borderRadius: 3,
                    p: 3,
                    textAlign: "center",
                    boxShadow: "0 4px 10px rgba(95, 86, 255, 0.3)",
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
