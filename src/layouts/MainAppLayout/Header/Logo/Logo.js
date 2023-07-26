import { Grid } from "@mui/material";
import styles from "./styles";
import { SMALL_BLUE_LOGO, WHITE_LOGO } from "../../../../constants/logos";
import { useMobileSmallToLaptop } from "../../../../hooks/useMobileSmallToLaptop";

function Logo() {
  const isMobileSmallToLaptop = useMobileSmallToLaptop();
  const logo = isMobileSmallToLaptop ? SMALL_BLUE_LOGO : WHITE_LOGO;

  return (
    <Grid component="a" href="/" id="logo" {...styles.logoGridStyle}>
      <img src={logo} alt="Logo" />
    </Grid>
  );
}

export default Logo;
