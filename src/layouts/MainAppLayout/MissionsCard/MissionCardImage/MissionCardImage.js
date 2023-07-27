import { CardMedia } from "@mui/material";
import styles from "./styles";

function MissionCardImage(){
    return (
        <CardMedia
          component="img"
          alt="missions card image"
          src="/MissionsCardImage.svg"
          {...styles.missionCardImageStyle}
        />
    )
}

export default MissionCardImage;
