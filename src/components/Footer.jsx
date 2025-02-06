import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        mt: "auto",
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        © {new Date().getFullYear()} Recipe App
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Link
          href="/"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Home
        </Link>
        <Link
          href="/about"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          About
        </Link>
        <Link
          href="/contact"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Contact
        </Link>
        <Link
          href="/privacy"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
