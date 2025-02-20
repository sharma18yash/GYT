import { Button, Typography, Box, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const HeroSection = styled(Box)(({ theme }) => ({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #1a237e, #283593)",
    color: "#fff",
    padding: "20px",
}));

const NavBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#1a237e",
}));

export default function LandingPage() {
    const handleLogin = () => {
        window.location.href = "https://gyt.fly.dev/zerodha-kite/login";
    };

    return (
        <>
            <NavBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Gyt App
                    </Typography>
                    <Button color="inherit" onClick={handleLogin}>Login</Button>
                </Toolbar>
            </NavBar>
            <HeroSection>
                <Typography variant="h2" fontWeight={600} gutterBottom>
                    Welcome to Gyt App
                </Typography>
                <Typography variant="h5" fontWeight={300} gutterBottom>
                    Trade smarter with our seamless platform
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleLogin}
                    sx={{ mt: 3, fontSize: "1.2rem", padding: "12px 30px" }}
                >
                    Login with Zerodha
                </Button>
            </HeroSection>
        </>
    );
}
