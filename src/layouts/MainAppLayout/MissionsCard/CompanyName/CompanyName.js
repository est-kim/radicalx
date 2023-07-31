import { Typography } from "@mui/material";
import styles from "./styles";

function CompanyName({ text }) {
  return <Typography {...styles.companyTextStyle}>{text}</Typography>;
}

export default CompanyName;
