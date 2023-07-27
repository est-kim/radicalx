import { CardMedia } from "@mui/material";
import styles from "./styles";

function CompanyIcon() {
  return (
    <CardMedia
      component="img"
      alt="company icon image"
      src="/CompanyIcon.svg"
      {...styles.iconStyle}
    />
  );
}

export default CompanyIcon;
