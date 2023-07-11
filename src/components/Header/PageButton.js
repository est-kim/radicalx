import React from "react";
import { Button } from "@mui/material";

const PageButton = ({ page, selectedPage, handlePageClick }) => (
  <Button
    key={page}
    onClick={() => handlePageClick(page)}
    sx={{
      my: 2,
      display: "block",
      color: selectedPage === page ? "transparent" : "darkgrey", // Adjust color as per requirement
      fontSize: { sm: "16px", md: "16px", lg: "16px", xl: "18px", xxl: "20px" }, // font-size
      fontStyle: "normal",
      fontFamily: "Inter", // font-family
      fontWeight: 700, // font-weight
      lineHeight: { md: "140%", lg: "140%", xl: "140%", xxl: "160%" }, // line-height
      letterSpacing: { md: "0.2px", lg: "0.2px", xl: "0.2px" },
      textTransform: "none", // text-transform
      padding: 0,
      gap: "24px",
      backgroundImage:
        selectedPage === page
          ? "linear-gradient(to right, #00F5A0, #00D9F5)"
          : "none",
      backgroundClip: selectedPage === page ? "text" : "border-box",
      WebkitBackgroundClip: selectedPage === page ? "text" : "border-box",
      WebkitTextFillColor: selectedPage === page ? "transparent" : "darkgrey",
    }}
  >
    {page}
  </Button>
);

export default PageButton;
