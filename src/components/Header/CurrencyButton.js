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
          mobileSmall: "1px",
          mobile: "1px",
          tablet: "1px",
          laptop: "1px",
          desktop: "1px",
          desktopLarge: "2px",
        },
        borderRadius: "40px",
        backgroundImage,
        alignItems: "center",
        justifyContent: "center",
        height: {mobileSmall: "100%",mobile: "100%"},
      }}
    >
      <Button
        sx={{
          display: "flex",
          padding: {
            mobileSmall: "2px 6px",
            mobile: "2px 8px",
            tablet: "2px 8px",
            laptop: "2px 16px",
            desktop: "2px 16px",
            desktopLarge: "2px 16px",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: {
            mobileSmall: "2px",
            mobile: "4px",
            tablet: "4px",
            laptop: "8px",
            desktop: "8px",
            desktopLarge: "8px",
          },
          alignSelf: {
            mobileSmall: "stretch",
          },
          height: {mobileSmall: "100%",mobile: "100%"},
          borderRadius: "40px",
          backgroundColor: "#181A20", // Adjust color as per requirement
          color: "#FFFFFF", // Adjust color as per requirement
          fontSize: {
            mobileSmall: "12px",
            mobile: "14px",
            tablet: "14px",
            laptop: "16px",
            desktop: "16px",
            desktopLarge: "20px",
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
