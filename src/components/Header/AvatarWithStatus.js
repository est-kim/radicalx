import { Avatar, Box } from "@mui/material";

function AvatarWithStatus({ avatarSrc }) {
  return (
    <Box position="relative">
      <Avatar
        alt="avatar-photo"
        src={avatarSrc}
        sx={{
          width: {
            xs: "28px",
            sm: "36px",
            md: "36px",
            lg: "36px",
            xl: "36px",
            xxl: "45px",
          },
          height: {
            xs: "28px",
            sm: "36px",
            md: "36px",
            lg: "36px",
            xl: "36px",
            xxl: "45px",
          },
        }}
      />
      <Box
        position="absolute"
        bottom={0}
        right={0}
        bgcolor="#12D18E"
        borderRadius="50%"
        sx={{
          width: {
            xs: 7,
            sm: 9,
            md: 9,
            lg: 9,
            xl: 9,
            xxl: 11.25,
          },
          height: {
            xs: 7,
            sm: 9,
            md: 9,
            lg: 9,
            xl: 9,
            xxl: 11.25,
          },
        }}
      ></Box>
    </Box>
  );
}

export default AvatarWithStatus;
