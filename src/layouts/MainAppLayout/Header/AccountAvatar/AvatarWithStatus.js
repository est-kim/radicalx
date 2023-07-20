import { Avatar, Grid } from "@mui/material";
import { avatarProps, gridProps } from "./styles";

function AvatarWithStatus({ avatarSrc }) {
  return (
    <Grid container position="relative">
      <Avatar alt="avatar-photo" src={avatarSrc} {...avatarProps} />
      <Grid {...gridProps}></Grid>
    </Grid>
  );
}

export default AvatarWithStatus;
