import { Button, Grid } from "@mui/material";
import styles from "./styles";

function ViewLeaderboard(props) {
  return (
    <Grid {...styles.outerBoxStyle}>
      <Button {...styles.viewLeaderboardStyle} {...props}>
        {props.children}
      </Button>
    </Grid>
  );
}

export default ViewLeaderboard;
