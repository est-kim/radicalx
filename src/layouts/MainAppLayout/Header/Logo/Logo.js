import * as React from "react";
import { Grid } from "@mui/material";
import styles from "./styles";
import { SMALL_BLUE_LOGO, WHITE_LOGO } from "../../../../constants/logos";
import { useMobileSmallToTablet } from "../../../../hooks/useMobileSmallToTablet";

function Logo() {
  const isMobileSmallToTablet = useMobileSmallToTablet();
  const logo = isMobileSmallToTablet ? SMALL_BLUE_LOGO : WHITE_LOGO;

  return (
    <Grid component="a" href="/" id="logo" {...styles.logoGridStyle}>
      <img src={logo} alt="Logo" />
    </Grid>
  );
}

export default Logo;
