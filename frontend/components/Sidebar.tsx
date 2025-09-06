"use client";

import React, { useState } from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Drawer,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const menuItems = [
    { label: "Dashboard", icon: "dashboard_icon.svg", active: true },
    { label: "Leaderboard", icon: "leaderboard_icon.svg", active: false },
    { label: "Order", icon: "orders_ion.svg", active: false },
    { label: "Products", icon: "product_icon.svg", active: false },
    { label: "Sales Report", icon: "sales_report_icon.svg", active: false },
    { label: "Messages", icon: "messages_icon.svg", active: false },
    { label: "Settings", icon: "settings_icon.svg", active: false },
    { label: "Sign Out", icon: "signout_icon.svg", active: false },
];

const SidebarContent = () => (
    <Box
        sx={{
            width: { xs: "100%", sm: 280, md: 320, lg: 345 },
            height: "100%",
            bgcolor: "background.paper",
            borderRadius: { sm: 3, xs: 0 },
            boxShadow: { sm: 1, xs: "none" },
            display: "flex",
            flexDirection: "column",
            pt: 6,
        }}
    >
        {/* Brand Logo */}
        <Box
            sx={{
                userSelect: "none",
                cursor: "default",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                px: 5,
                gap: 3,
            }}
        >
            <Box
                sx={{
                    bgcolor: "#5F56FF",
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    src="dummy_logo.svg"
                    alt="Dabang Logo"
                    width={25}
                    height={25}
                    priority
                />
            </Box>
            <Typography
                variant="h6"
                component="span"
                sx={{
                    fontSize: "30px",
                    fontWeight: 600,
                    lineHeight: "150%",
                    color: "text.heading",
                }}
            >
                Dabang
            </Typography>
        </Box>

        {/* Navigation Items */}
        <List sx={{ flexGrow: 1, mt: 6, px: 5 }}>
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
                        py: 2,
                        px: 3,
                        mb: 1,
                        boxShadow: active
                            ? "0px 20px 50px 0px hsla(214, 23%, 28%, 0.1)"
                            : "none",
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
                            <Image
                                src={icon}
                                alt={label}
                                width={32}
                                height={32}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </ListItemIcon>

                    <ListItemText
                        primary={label}
                        slotProps={{
                            primary: {
                                sx: {
                                    ml: 3,
                                    fontWeight: active ? 600 : 400,
                                    color: active
                                        ? "primary.contrastText"
                                        : "text.subheading",
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                },
                            },
                        }}
                    />
                </ListItemButton>
            ))}
        </List>

        {/* Pro Box stays pinned at bottom */}
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
                mx: 3,
                mb: 3,
            }}
        >
            <Typography variant="h6" mb={1}>
                Dabang Pro
            </Typography>
            <Typography variant="body2" mb={2}>
                Get access to all features on tetumbas
            </Typography>
            <Button
                variant="contained"
                sx={{
                    bgcolor: "white",
                    color: "#5F56FF",
                    fontWeight: "bold",
                    "&:hover": { bgcolor: "#f5f5f5" },
                }}
            >
                Get Pro
            </Button>
        </Box>
  </Box >
);

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <IconButton
                sx={{ display: { xs: "block", sm: "none" }, position: "absolute", top: 16, left: 16 }}
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>

            {/* Permanent Sidebar for Desktop */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, height: "100vh" }}>
                <SidebarContent />
            </Box>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "block", sm: "none" } }}
            >
                <SidebarContent />
            </Drawer>
        </>
    );
}
