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
import Logo from "./Logo";
import MenuButton from "./MenuButton";

const pages = ["🚀 Missions", "🏆 Leaderboard", "💰 Rewards"];

function Header() {
  const [selectedPage, setSelectedPage] = React.useState(null);

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
        <Logo />
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
            alignItems: "center",
            alignSelf: {
              xs: "center",
              xxl: "stretch",
            },
            gap: {
              xs: "4px",
              sm: "8px",
              md: "8px",
              lg: "8px",
              xl: "8px",
              xxl: "16px",
            },
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
    </AppBar>
  );
}
export default Header;
