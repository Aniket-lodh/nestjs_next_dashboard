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
                px: 3,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    color: "text.heading",
                    letterSpacing: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "24px"
                }}
            >
                Dashboard
            </Typography>

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
                        flexGrow: 1,
                        minWidth: 300,
                        maxWidth: 450,
                        mx: 3,
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

            <Stack direction="row" alignItems="center" spacing={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Image
                        src="united_flag.svg"
                        width={24}
                        height={24}
                        alt="EN"
                        style={{ borderRadius: "50%" }}
                    />
                    <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#374557", fontSize: "14px", fontFamily: "'Poppins', sans-serif" }}
                    >
                        Eng (US)
                    </Typography>
                    <KeyboardArrowDownIcon sx={{ color: "#374557", fontSize: "16px" }} />
                </Stack>
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
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src="user_avatar.png"
                        sx={{ width: 48, height: 48, borderRadius: 2 }}
                        alt="Musfiq"
                    />
                    <Box>
                        <Box flexDirection="row" display="flex" alignItems="center" gap={1} mb={0} pb={0}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 500, color: "#151D48", fontFamily: "'Poppins', sans-serif" }}
                            >
                                Musfiq
                            </Typography>
                            <KeyboardArrowDownIcon sx={{ color: "#151D48", fontSize: "16px" }} />
                        </Box>
                        <Typography
                            variant="caption"
                            sx={{ fontWeight: 400, color: "#737791", fontFamily: "'Poppins', sans-serif", pt: 0, mt:0 }}
                        >
                            Admin
                        </Typography>
                    </Box>

                </Stack>
            </Stack>
        </Box >
    );
}
