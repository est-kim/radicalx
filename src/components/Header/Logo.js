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
          xs: "8px",
          sm: "24px",
          md: "16px"
        },
        img: {
          width: {
            xs: "28px",
            sm: "36px",
            md: "36px",
            lg: "166.72px",
            xl: "166.72px",
            xxl: "166.72px",
          },
          height: {
            xs: "28px",
            sm: "36px",
            md: "36px",
            lg: "21.341px",
            xl: "21.341px",
            xxl: "21.341px",
          },
        },
      }}
    >
      <img src={logo} alt="Logo" />
    </Box>
  );
}

export default Logo;
