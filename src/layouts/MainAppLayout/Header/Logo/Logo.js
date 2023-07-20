import * as React from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { logoGridStyle } from "./styles";
import { SMALL_BLUE_LOGO, WHITE_LOGO } from '../../../../constants/logos';

function Logo() {
  const theme = useTheme();
  const isXsToMd = useMediaQuery(
    theme.breakpoints.between("mobileSmall", "laptop")
  );
  const logo = isXsToMd ? SMALL_BLUE_LOGO : WHITE_LOGO;

  return (
    <Grid
      component="a"
      href="/"
      id="logo"
      sx={logoGridStyle}
    >
      <img src={logo} alt="Logo" />
    </Grid>
  );
}

export default Logo;
