import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./styles";
import MissionButton from "../MissionButton/MissionButton";
import MissionButtonArrowIcon from "../MissionButtonArrowIcon/MissionButtonArrowIcon";

const Gradient = styled(Typography)({
  background: "linear-gradient(315deg, #FF5A5F 0%, #FF8A9B 100%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
});

function Timer() {
  return (
    <Grid {...styles.outerBoxStyle}>
      <Grid container {...styles.boxStyle}>
        <Typography {...styles.endsInStyle}>Ends In</Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item direction="column">
            <Box {...styles.timerBoxStyle}>
              <Gradient {...styles.timerNumberStyle}>00</Gradient>
            </Box>
            <Gradient {...styles.timerTextStyle}>Days</Gradient>
          </Grid>
          <Grid item>
            <Box {...styles.timerBoxStyle}>
              <Gradient {...styles.timerNumberStyle}>04</Gradient>
            </Box>
            <Gradient {...styles.timerTextStyle}>Hours</Gradient>
          </Grid>
          <Grid item>
            <Box {...styles.timerBoxStyle}>
              <Gradient {...styles.timerNumberStyle}>24</Gradient>
            </Box>
            <Gradient {...styles.timerTextStyle}>Minutes</Gradient>
          </Grid>
        </Grid>
        <MissionButton>
          Start Now
          <MissionButtonArrowIcon />
        </MissionButton>
      </Grid>
    </Grid>
  );
}

export default Timer;
