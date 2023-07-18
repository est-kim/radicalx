import "./Header.module.css";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import CurrencyButton from "./CurrencyButton/CurrencyButton";
import CurrencyButtonImage from "./CurrencyButton/CurrencyButtonImage";
import AvatarWithStatus from "../AccountAvatar/AvatarWithStatus";
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
            mobileSmall: "0px 16px 0px 16px",
            mobile: "0px 24px 0px 24px",
            tablet: "0px 24px 0px 24px",
            laptop: "0px 40px 0px 40px",
            desktop: "0px 42px 0px 40px",
            desktopLarge: "0px 40px 0px 40px",
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
              mobileSmall: "auto",
              mobile: "auto",
              tablet: "16px",
              laptop: "16px",
              desktop: "16px",
              desktopLarge: "24px",
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
              mobileSmall: "auto",
              mobile: "auto",
              tablet: "0px",
              laptop: "0px",
              desktop: "0px",
              desktopLarge: "0px",
            }, // The space you want to the right
            display: "flex",
            alignItems: "center",
            alignSelf: {
              mobileSmall: "center",
              desktopLarge: "stretch",
            },
            gap: {
              mobileSmall: "4px",
              mobile: "8px",
              tablet: "8px",
              laptop: "8px",
              desktop: "8px",
              desktopLarge: "16px",
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
