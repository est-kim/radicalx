import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function CurrencyButton({ children, type }) {
  // Conditional rendering of the gradient based on the type prop
  const backgroundImage = type === 'Diamond'
    ? 'linear-gradient(to right, #246BFD, #5089FD)'
    : type === 'Coin'
    ? 'linear-gradient(to right, #FACC15, #FFE580)'
    : null;

  return (
    <Box
      sx={{
        display: "flex",
        padding: "2px",
        borderRadius: "40px",
        backgroundImage,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          display: "flex",
          padding: "2px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "40px",
          backgroundColor: "#181A20", // Adjust color as per requirement
          color: "#FFFFFF", // Adjust color as per requirement
          fontSize: "20px", // font-size
          fontFamily: "Inter", // font-family
          fontWeight: 700, // font-weight
          fontStyle: "normal",
          lineHeight: "160%", // line-height
        }}
      >
        {children}
      </Button>
    </Box>
  );
}

export default CurrencyButton;
