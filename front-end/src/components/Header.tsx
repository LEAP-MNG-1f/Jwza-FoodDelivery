import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { LogoIcon } from "@/svg/LogoIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const pages = ["Нүүр", "Хоолны цэс", "Хүргэлтийн бүс"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoIcon />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <PermIdentityIcon sx={{ color: "text.primary" }} />
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: "center", color: "text.primary" }}>
              Нэвтрэх
            </Typography>
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
