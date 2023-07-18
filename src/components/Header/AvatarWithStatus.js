import { Avatar, Box } from "@mui/material";

function AvatarWithStatus({ avatarSrc }) {
  return (
    <Box position="relative">
      <Avatar
        alt="avatar-photo"
        src={avatarSrc}
        sx={{
          width: {
            mobileSmall: "28px",
            mobile: "36px",
            tablet: "36px",
            laptop: "36px",
            desktop: "36px",
            desktopLarge: "45px",
          },
          height: {
            mobileSmall: "28px",
            mobile: "36px",
            tablet: "36px",
            laptop: "36px",
            desktop: "36px",
            desktopLarge: "45px",
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
            mobileSmall: 7,
            mobile: 9,
            tablet: 9,
            laptop: 9,
            desktop: 9,
            desktopLarge: 11.25,
          },
          height: {
            mobileSmall: 7,
            mobile: 9,
            tablet: 9,
            laptop: 9,
            desktop: 9,
            desktopLarge: 11.25,
          },
        }}
      ></Box>
    </Box>
  );
}

export default AvatarWithStatus;
