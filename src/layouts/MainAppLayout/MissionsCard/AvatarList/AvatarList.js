import { Box } from "@mui/material";

const avatarData = [
  {
    image: "/Artboard20.png",
    backgroundPosition: "0px -1.929px",
    backgroundSize: "100% 268.453%",
  },
  // {
  //   image: "<path-to-image-2>",
  //   backgroundPosition: "0px -6.412px",
  //   backgroundSize: "100% 245.517%"
  // },
  // ... add the rest of images and styles here
];

function AvatarList() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "-24px",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      {avatarData.map((avatar, index) => (
        <Box
          component="img"
          key={index}
          src={avatar.image}
          sx={{
            width: "119.905px",
            height: "110px",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
}

export default AvatarList;
