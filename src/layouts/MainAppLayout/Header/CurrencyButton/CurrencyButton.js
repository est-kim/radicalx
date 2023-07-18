import * as React from "react";
import { Grid, Button } from "@mui/material";
import { gridProps, buttonProps } from "./styles";

function CurrencyButton({ children, type }) {
  // Conditional rendering of the gradient based on the type prop
  const backgroundImage =
    type === "Diamond"
      ? "linear-gradient(to right, #246BFD, #5089FD)"
      : type === "Coin"
      ? "linear-gradient(to right, #FACC15, #FFE580)"
      : null;

  return (
    <Grid {...gridProps(backgroundImage)}>
      <Button {...buttonProps}>{children}</Button>
    </Grid>
  );
}

export default CurrencyButton;
