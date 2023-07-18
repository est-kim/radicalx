import * as React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

function Logo() {
  const theme = useTheme();
  const isXsToMd = useMediaQuery(theme.breakpoints.between("xs", "lg"));
  const logo = isXsToMd
    ? "/SmallBlueLogoRadicalX.svg"
    : "/WhiteLogoRadicalX.svg";

  return (
    <Box
      component="a"
      href="/"
      id="logo"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexShrink: 0,
        marginRight: {
          mobileSmall: "8px",
          mobile: "24px",
          tablet: "16px"
        },
        img: {
          width: {
            mobileSmall: "28px",
            mobile: "36px",
            tablet: "36px",
            laptop: "166.72px",
            desktop: "166.72px",
            desktopLarge: "166.72px",
          },
          height: {
            mobileSmall: "28px",
            mobile: "36px",
            tablet: "36px",
            laptop: "21.341px",
            desktop: "21.341px",
            desktopLarge: "21.341px",
          },
        },
      }}
    >
      <img src={logo} alt="Logo" />
    </Box>
  );
}

export default Logo;
