import { Box, Typography } from "@mui/material";
import styles from "./styles";

const MissionTag = ({ tagText }) => {
  return (
    <Box {...styles.boxStyle}>
      <Typography {...styles.textStyle}>{tagText}</Typography>
    </Box>
  );
};

export default MissionTag;
