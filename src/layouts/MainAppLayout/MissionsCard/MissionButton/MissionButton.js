import { Button } from "@mui/material";
import { styled } from "@mui/system";
import styles from "./styles";

const MissionButton = styled(Button)({
  ...styles.missionButtonStyle,
  background: "linear-gradient(315deg, #6335F0 31.66%, #E71DE7 100%)",
  "&.MuiButton-root": {
    background: "linear-gradient(315deg, #6335F0 31.66%, #E71DE7 100%)",
  },
});

export default MissionButton;
