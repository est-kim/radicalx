import "./Header.module.css";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CurrencyButton from "./CurrencyButton";
import CurrencyButtonImage from "./CurrencyButtonImage";
import AvatarWithStatus from "./AvatarWithStatus";
import PageButton from "./PageButton";
import MenuButton from "./MenuButton";

const pages = ["🚀 Missions", "🏆 Leaderboard", "💰 Rewards"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [selectedPage, setSelectedPage] = React.useState(null);
  const [avatarData, setAvatarData] = React.useState({ url: "", id: "" });

  const theme = useTheme();
  const isXsToMd = useMediaQuery(theme.breakpoints.between("xs", "lg"));
  const logo = isXsToMd
    ? "/SmallBlueLogoRadicalX.svg"
    : "/WhiteLogoRadicalX.svg";

  const handlePageClick = (pageName) => {
    setSelectedPage(pageName);
  };

  return (
    <AppBar id="app-bar" sx={{ backgroundColor: "#181A20" }}>
      <Toolbar
        id="header"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
          margin: {
            xs: "0px 16px 0px 16px",
            sm: "0px 24px 0px 24px",
            md: "0px 24px 0px 24px",
            lg: "0px 40px 0px 40px",
            xl: "0px 42px 0px 40px",
            xxl: "0px 40px 0px 40px",
          },
        }}
      >
        <Box
          component="a"
          href="/"
          id="logo"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexShrink: 0,
            marginRight: {
              xs: "8px",
              sm: "24px",
              md: "16px"
            },
            img: {
              width: {
                xs: "28px",
                sm: "36px",
                md: "36px",
                lg: "166.72px",
                xl: "166.72px",
                xxl: "166.72px",
              },
              height: {
                xs: "28px",
                sm: "36px",
                md: "36px",
                lg: "21.341px",
                xl: "21.341px",
                xxl: "21.341px",
              },
            },
          }}
        >
          <img src={logo} alt="Logo" />
        </Box>
        <Box
          id="menu-board"
          sx={{
            display: "flex",
            alignItems: "center", // Vertically align items
            justifyContent: "space-between",
            gap: {
              xs: "auto",
              sm: "auto",
              md: "16px",
              lg: "16px",
              xl: "16px",
              xxl: "24px",
            },
          }}
        >
          <MenuButton
            pages={pages}
            selectedPage={selectedPage}
            handlePageClick={handlePageClick}
          />
        </Box>

        <Box
          id="currencies"
          sx={{
            marginLeft: {
              xs: "auto",
              sm: "auto",
              md: "0px",
              lg: "0px",
              xl: "0px",
              xxl: "0px",
            }, // The space you want to the right
            display: "flex",
            // justifyContent: "space-between", // Distribute the space evenly between your buttons
            alignItems: "center",
            alignSelf: {
              xs: "center",
              xxl: "stretch"
            },
            gap: { xs: "4px", sm: "8px", md: "8px", lg: "8px", xl: "8px", xxl: "16px" },
          }}
        >
          <CurrencyButton type="Diamond">
            <CurrencyButtonImage
              component="img"
              src="/DiamondBlue.svg"
              alt="Diamond"
            />
            20,000
          </CurrencyButton>
          <CurrencyButton type="Coin">
            <CurrencyButtonImage
              component="img"
              src="/CoinGold.svg"
              alt="Coin"
            />
            11,000
          </CurrencyButton>
        <Box
          id="avatar-photo"
          sx={{
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <AvatarWithStatus avatarSrc="/ellipse.svg" />
        </Box>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default Header;
