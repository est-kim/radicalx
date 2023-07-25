import { Grid, Button } from "@mui/material";
import { gridProps, buttonProps } from "./styles";

const CHIP_BG = {
  Diamond: "linear-gradient(to right, #246BFD, #5089FD)",
  Coin: "linear-gradient(to right, #FACC15, #FFE580)"
}

function CurrencyButton({ children, type }) {
  const backgroundImage = CHIP_BG[type];

  return (
    <Grid {...gridProps(backgroundImage)}>
      <Button {...buttonProps}>{children}</Button>
    </Grid>
  );
}

export default CurrencyButton;
