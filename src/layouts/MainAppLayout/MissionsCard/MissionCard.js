import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CompanyIcon from "./CompanyIcon/CompanyIcon";
import CompanyName from "./CompanyName/CompanyName";
import CurrencyRow from "./CurrencyRow/CurrencyRow";
import MissionCardImage from "./MissionCardImage/MissionCardImage";
import MissionTag from "./MissionTag/MissionTag";
import styles from "./styles";


function MissionCard() {
  return (
    <Grid
      item
      mobileSmall={12}
      mobile={6}
      desktop={4}
      {...styles.cardGridStyle}
    >
      <Card {...styles.cardStyle}>
        <MissionCardImage />
        <CardContent {...styles.missionInfoStyle}>
          <Grid container {...styles.companyInfoStyle}>
            <Grid item>
              <CompanyIcon />
            </Grid>
            <Grid item>
              <CompanyName text="Search" />
              <Grid container {...styles.missionTagsStyle}>
                <MissionTag tagText="Backend" />
                <MissionTag tagText="Beginner" />
                <MissionTag tagText="2 hrs" />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider {...styles.dividerStyle} />
        <CurrencyRow/>
      </Card>
    </Grid>
  );
}

export default MissionCard;
