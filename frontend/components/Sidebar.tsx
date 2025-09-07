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
            width: { xs: "100%", sm: 240, md: 260, lg: 280, xl: 300 },
            minHeight: "100%",
            height: "fit-content",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            pt: 6,
            justifyContent: "space-between",
        }}
    >
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
                    fontSize: {
                        xs: "14px",
                        sm: "15px",
                        md: "17px",
                        lg: "18px",
                    },
                    fontWeight: 600,
                    lineHeight: "150%",
                    color: "text.heading",
                }}
            >
                Dabang
            </Typography>
        </Box>

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
                        fontSize: { xs: "14px", sm: "15px", md: "15px", lg: "16px" }, // less chunky
                        lineHeight: "22px",
                        py: { xs: 1.2, sm: 1.5, md: 1.6 }, 
                        px: { xs: 2, sm: 2.5, md: 3 },
                        mb: 0.5,
                        boxShadow: active
                            ? "0px 12px 30px 0px hsla(214, 23%, 28%, 0.08)"
                            : "none",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 36,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box sx={{ width: 28, height: 28 }}>
                            <Image
                                src={icon}
                                alt={label}
                                width={28}
                                height={28}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Box>
                    </ListItemIcon>

                    <ListItemText
                        primary={label}
                        slotProps={{
                            primary: {
                                sx: {
                                    ml: 2,
                                    fontWeight: active ? 600 : 400,
                                    color: active ? "primary.contrastText" : "text.subheading",
                                    fontSize: { xs: "14px", sm: "15px", md: "15px", lg: "16px" },
                                    lineHeight: "22px",
                                },
                            },
                        }}
                    />
                </ListItemButton>
            ))}
        </List>

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
                mt: 2,
                mx: 3,
                mb: 3,
                flexShrink: 0,
            }}
        >
            <Typography
                variant="h6"
                mb={1}
                sx={{
                    fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "19px",
                        xl: "20px",
                    },
                    fontWeight: 600,
                }}
            >
                Dabang Pro
            </Typography>
            <Typography
                variant="body2"
                mb={2}
                sx={{
                    fontSize: {
                        xs: "12px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "15px",
                    },
                }}
            >
                Get access to all features on tetumbas
            </Typography>
            <Button
                variant="contained"
                sx={{
                    bgcolor: "white",
                    color: "#5F56FF",
                    fontWeight: "bold",
                    fontSize: {
                        xs: "12px",
                        sm: "13px",
                        md: "14px",
                        lg: "14px",
                        xl: "15px",
                    },
                    "&:hover": { bgcolor: "#f5f5f5" },
                }}
            >
                Get Pro
            </Button>
        </Box>
    </Box>
);

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton
                sx={{
                    display: { xs: "block", sm: "none" },
                    position: "absolute",
                    top: 16,
                    left: 16,
                }}
                onClick={() => setOpen(true)}
            >
                <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "flex" }, height: "100vh" }}>
                <SidebarContent />
            </Box>

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
