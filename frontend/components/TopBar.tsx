import { Box, Stack, Typography, InputBase, IconButton, Avatar, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

export default function TopBar() {
    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 3,
                px: 6,
            }}
        >
            {/* Left: Dashboard Title */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 700,
                    color: "text.heading", // from theme
                    letterSpacing: 0,
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                Dashboard
            </Typography>

            {/* Center: Search Bar */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <Paper
                    component="form"
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "none",
                        bgcolor: "rgba(95,86,255,0.05)",
                        borderRadius: 3,
                        px: 2,
                        py: 1,
                        width: 300,
                        height: 48,
                    }}
                >
                    <SearchIcon sx={{ color: "#815CFF", mr: 1 }} />
                    <InputBase
                        placeholder="Search here..."
                        sx={{
                            flex: 1,
                            fontFamily: "'Poppins', sans-serif",
                            color: "text.primary",
                            fontSize: 16,
                            "&::placeholder": { color: "#9C9CB2", opacity: 1 },
                        }}
                    />
                </Paper>
            </Box>

            {/* Right: Language, Notification, Avatar, Name */}
            <Stack direction="row" alignItems="center" spacing={4}>
                {/* Language Dropdown */}
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Image
                        src="united_flag.svg" // Add US flag SVG to your /public/flags directory
                        width={24}
                        height={24}
                        alt="EN"
                        style={{ borderRadius: "50%" }}
                    />
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 500, color: "text.heading", fontSize: 16, fontFamily: "'Poppins', sans-serif" }}
                    >
                        Eng (US)
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ color: "#373F50" }} />
                </Stack>
                {/* Notification */}
                <Box
                    sx={{
                        bgcolor: "#FFF8E1",
                        borderRadius: 2,
                        p: 1,
                        position: "relative",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <NotificationsNoneIcon sx={{ color: "#FFD600", fontSize: 24 }} />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 10,
                            width: 8,
                            height: 8,
                            bgcolor: "#F14A60",
                            borderRadius: "50%",
                        }}
                    />
                </Box>
                {/* User */}
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar
                        src="user_avatar.png"
                        sx={{ width: 48, height: 48, borderRadius: 2 }}
                        alt="Musfiq"
                    />
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 600, color: "text.heading", fontFamily: "'Poppins', sans-serif" }}
                        >
                            Musfiq
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{ fontWeight: 500, color: "text.subheading", fontFamily: "'Poppins', sans-serif" }}
                        >
                            Admin
                        </Typography>
                    </Box>
                    <KeyboardArrowDownIcon sx={{ color: "#373F50" }} />
                </Stack>
            </Stack>
        </Box>
    );
}
