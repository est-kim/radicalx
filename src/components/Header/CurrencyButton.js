import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function CurrencyButton({ children, type }) {
  // Conditional rendering of the gradient based on the type prop
  const backgroundImage =
    type === "Diamond"
      ? "linear-gradient(to right, #246BFD, #5089FD)"
      : type === "Coin"
      ? "linear-gradient(to right, #FACC15, #FFE580)"
      : null;

  return (
    <Box
      sx={{
        display: "flex",
        padding: {
          xs: "1px",
          sm: "1px",
          md: "1px",
          lg: "1px",
          xl: "1px",
          xxl: "2px",
        },
        borderRadius: "40px",
        backgroundImage,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          display: "flex",
          padding: {
            xs: "2px 6px",
            sm: "2px 8px",
            md: "2px 8px",
            lg: "2px 16px",
            xl: "2px 16px",
            xxl: "2px 16px",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: "2px",
            sm: "4px",
            md: "4px",
            lg: "8px",
            xl: "8px",
            xxl: "8px",
          },
          alignSelf: {
            xs: "stretch",
          },
          borderRadius: "40px",
          backgroundColor: "#181A20", // Adjust color as per requirement
          color: "#FFFFFF", // Adjust color as per requirement
          fontSize: {
            xs: "12px",
            sm: "14px",
            md: "14px",
            lg: "16px",
            xl: "16px",
            xxl: "20px",
          },
          fontFamily: "Inter",
          fontWeight: 700,
          fontStyle: "normal",
          lineHeight: "160%",
        }}
      >
        {children}
      </Button>
    </Box>
  );
}

export default CurrencyButton;
