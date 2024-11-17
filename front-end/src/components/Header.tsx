import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LogoIcon } from "@/svg/LogoIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const pages = ["Нүүр", "Хоолны цэс", "Хүргэлтийн бүс"];

function ResponsiveAppBar() {
  return (
    <AppBar
      sx={{
        bgcolor: "white",
        height: 57,
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        boxShadow: "none",
        width: "full",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          paddingX: 4,
          paddingY: 1,
          display: "flex",
          justifyItems: "justify-between",
          alignItems: "center",
        }}
      >
        <LogoIcon />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                // my: 2,
                color: "black",
                // display: "block",
                // text: 14,
                // fontWeight: 700,
                // lineHeight: 16,
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <PermIdentityIcon sx={{ color: "text.primary" }} />
          <Typography sx={{ textAlign: "center", color: "text.primary" }}>
            Нэвтрэх
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
