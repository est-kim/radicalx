import { Grid, Button } from "@mui/material";
import styles from "./styles";

const CHIP_BG = {
  Diamond: "linear-gradient(to right, #246BFD, #5089FD)",
  Coin: "linear-gradient(to right, #FACC15, #FFE580)",
  Players: "linear-gradient(to right, #FF5A5F, #FF8A9B)"
}

function CurrencyButton({ children, type }) {
  const backgroundImage = CHIP_BG[type];

  return (
    <Grid {...styles.gridProps(backgroundImage)}>
      <Button {...styles.buttonProps}>{children}</Button>
    </Grid>
  );
}

export default CurrencyButton;
