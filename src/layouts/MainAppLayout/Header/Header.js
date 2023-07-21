import "./Header.module.css";
import * as React from "react";
import { AppBar, Grid } from "@mui/material";
import CurrencyButton from "./CurrencyButton/CurrencyButton";
import CurrencyButtonImage from "./CurrencyButton/CurrencyButtonImage";
import AvatarWithStatus from "./AccountAvatar/AvatarWithStatus";
import Logo from "./Logo/Logo";
import MenuButton from "./MenuButton/MenuButton";
import {
  appBarStyle,
  gridStyle,
  menuBoardStyle,
  currenciesStyle,
  avatarPhotoStyle,
} from "./styles";

const pages = ["🚀 Missions", "🏆 Leaderboard", "💰 Rewards"];

function Header() {
  const [selectedPage, setSelectedPage] = React.useState(null);

  const handlePageClick = (pageName) => {
    setSelectedPage(pageName);
  };

  return (
    <AppBar id="app-bar" sx={appBarStyle}>
      <Grid id="header" sx={gridStyle}>
        <Logo />
        <Grid
          id="menu-board"
          sx={menuBoardStyle}
        >
          <MenuButton
            pages={pages}
            selectedPage={selectedPage}
            handlePageClick={handlePageClick}
          />
        </Grid>
        <Grid
          id="currencies"
          sx={currenciesStyle}
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
          <Grid
            id="avatar-photo"
            sx={avatarPhotoStyle}
          >
            <AvatarWithStatus avatarSrc="/ellipse.svg" />
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default Header;
