import { Box } from "@mui/material";
import styles from "./styles";

const avatarData = [
  {
    image: "/Artboard20.png",
    backgroundPosition: "0px -1.929px",
    backgroundSize: "100% 268.453%",
  },
];

function AvatarList() {
  return (
    <Box {...styles.outerBoxStyling}>
      {avatarData.map((avatar, index) => (
        <Box
          component="img"
          key={index}
          src={avatar.image}
          {...styles.avatarStyling}
        />
      ))}
    </Box>
  );
}

export default AvatarList;
