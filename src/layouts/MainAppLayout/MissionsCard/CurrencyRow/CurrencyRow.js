import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./styles";
import CurrencyButton from "../../Header/CurrencyButton/CurrencyButton";
import CurrencyButtonImage from "../../Header/CurrencyButton/CurrencyButtonImage";

function CurrencyRow() {
  return (
    <Grid container item xs={12} {...styles.gridContainerStyle}>
      <Grid item xs={4}>
        <CurrencyButton type="Coin">
          <CurrencyButtonImage component="img" src="/CoinGold.svg" alt="Coin" />
          12,000
        </CurrencyButton>
        <Typography
          {...styles.buttonDescriptionStyle}
        >
          Prize Pool
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <CurrencyButton type="Players">
          <CurrencyButtonImage
            component="img"
            src="/RedGroupIcon.svg"
            alt="Players"
          />
          34/50
        </CurrencyButton>
        <Typography
          {...styles.buttonDescriptionStyle}
        >
          Players
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <CurrencyButton type="Diamond">
          <CurrencyButtonImage
            component="img"
            src="/DiamondBlue.svg"
            alt="Diamond"
          />
          500
        </CurrencyButton>

        <Typography
          align="body1"
          {...styles.buttonDescriptionStyle}
        >
          Entry Fee
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CurrencyRow;
