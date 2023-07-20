import { Avatar, Grid } from "@mui/material";
import styles from "./styles";

function AvatarWithStatus({ avatarSrc }) {
  return (
    <Grid container position="relative">
      <Avatar alt="avatar-photo" src={avatarSrc} {...styles.avatarProps} />
      <Grid {...styles.gridProps}></Grid>
    </Grid>
  );
}

export default AvatarWithStatus;
