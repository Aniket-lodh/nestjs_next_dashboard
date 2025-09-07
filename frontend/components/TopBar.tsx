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
                py: { xs: 2, sm: 2.5, md: 3 },
                px: { xs: 2, sm: 3, md: 4 },
                flexWrap: { xs: "wrap", sm: "nowrap" },
                gap: { xs: 2, sm: 0 },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    color: "text.heading",
                    letterSpacing: 0,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                }}
            >
                Dashboard
            </Typography>

            <Box
                sx={{
                    flex: { xs: "1 1 100%", sm: "1 1 auto" },
                    display: "flex",
                    justifyContent: { xs: "flex-start", sm: "center" },
                    mt: { xs: 2, sm: 0 },
                }}
            >
                <Paper
                    component="form"
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        boxShadow: "none",
                        bgcolor: "rgba(95,86,255,0.05)",
                        borderRadius: 3,
                        px: { xs: 1.5, sm: 2 },
                        py: { xs: 0.5, sm: 1 },
                        flexGrow: 1,
                        minWidth: { xs: "100%", sm: 250, md: 300 },
                        maxWidth: { xs: "100%", sm: 400, md: 450 },
                        mx: { xs: 0, sm: 3 },
                        height: { xs: 40, sm: 44, md: 48 },
                    }}
                >
                    <SearchIcon sx={{ color: "#815CFF", mr: { xs: 0.5, sm: 1 } }} />
                    <InputBase
                        placeholder="Search here..."
                        sx={{
                            flex: 1,
                            fontFamily: "'Poppins', sans-serif",
                            color: "text.primary",
                            fontSize: { xs: 14, sm: 15, md: 16 },
                            "&::placeholder": { color: "#9C9CB2", opacity: 1 },
                        }}
                    />
                </Paper>
            </Box>

            <Stack
                direction="row"
                alignItems="center"
                spacing={{ xs: 2, sm: 3, md: 4 }}
                sx={{ mt: { xs: 2, sm: 0 } }}
            >
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Image
                        src="united_flag.svg"
                        width={20}
                        height={20}
                        alt="EN"
                        style={{ borderRadius: "50%" }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 600,
                            color: "#374557",
                            fontSize: { xs: "12px", sm: "13px", md: "14px" },
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Eng (US)
                    </Typography>
                    <KeyboardArrowDownIcon
                        sx={{ color: "#374557", fontSize: { xs: "14px", sm: "15px", md: "16px" } }}
                    />
                </Stack>

                <Box
                    sx={{
                        bgcolor: "#FFF8E1",
                        borderRadius: 2,
                        p: { xs: 0.7, sm: 1 },
                        position: "relative",
                        width: { xs: 32, sm: 36, md: 40 },
                        height: { xs: 32, sm: 36, md: 40 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <NotificationsNoneIcon sx={{ color: "#FFD600", fontSize: { xs: 18, sm: 20, md: 24 } }} />
                    <Box
                        sx={{
                            position: "absolute",
                            top: 6,
                            right: 8,
                            width: { xs: 6, sm: 7, md: 8 },
                            height: { xs: 6, sm: 7, md: 8 },
                            bgcolor: "#F14A60",
                            borderRadius: "50%",
                        }}
                    />
                </Box>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src="user_avatar.png"
                        sx={{
                            width: { xs: 36, sm: 42, md: 48 },
                            height: { xs: 36, sm: 42, md: 48 },
                            borderRadius: 2,
                        }}
                        alt="Musfiq"
                    />
                    <Box>
                        <Box
                            flexDirection="row"
                            display="flex"
                            alignItems="center"
                            gap={0.5}
                            mb={0}
                            pb={0}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 500,
                                    color: "#151D48",
                                    fontSize: { xs: "13px", sm: "14px", md: "15px" },
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Musfiq
                            </Typography>
                            <KeyboardArrowDownIcon
                                sx={{ color: "#151D48", fontSize: { xs: "14px", sm: "15px", md: "16px" } }}
                            />
                        </Box>
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 400,
                                color: "#737791",
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: { xs: "11px", sm: "12px" },
                                pt: 0,
                                mt: 0,
                            }}
                        >
                            Admin
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}
