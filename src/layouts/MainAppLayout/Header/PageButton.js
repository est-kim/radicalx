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
      fontSize: { mobile: "16px", tablet: "16px", laptop: "16px", desktop: "18px", desktopLarge: "20px" }, // font-size
      fontStyle: "normal",
      fontFamily: "Inter", // font-family
      fontWeight: 700, // font-weight
      lineHeight: { tablet: "140%", laptop: "140%", desktop: "140%", desktopLarge: "160%" }, // line-height
      letterSpacing: { tablet: "0.2px", laptop: "0.2px", desktop: "0.2px" },
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
