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
          alignItems: "center",
          boxSizing: "border-box",
          margin: {
            sm: "0px 24px 0px 24px",
            md: "0px 24px 0px 24px",
            lg: "0px 40px 0px 40px",
            xl: "0px 42px 0px 42px",
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
              }
            }
          }}
        >
            <img src={logo} alt="Logo" />

        </Box>

        <Box
          id="menu-board"
          sx={{
            display: "flex",
            alignItems: "center", // Vertically align items
            gap: { md: "16px", lg: "16px", xl: "16px", xxl: "24px" },
            // margin: { sm: "24px", md: "24px", lg: "40px", xl: "42px", xxl: "40px" },
            // justifyContent: "center", // Horizontally align items
          }}
        >
          {pages.map((page) => (
            <PageButton
              page={page}
              selectedPage={selectedPage}
              handlePageClick={handlePageClick}
            />
          ))}
          <Box
            id="currencies"
            sx={{
              marginLeft: { md: "32px", lg: "44px", xl: "160px", xxl: "140px" }, // The space you want to the right
              display: "flex",
              justifyContent: "space-between", // Distribute the space evenly between your buttons
              alignItems: "center",
              gap: { md: "8px", lg: "8px", xl: "8px", xxl: "16px" },
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
          </Box>
          <Box
            id="avatar-photo"
            sx={{
              marginLeft: { md: "0px", lg: "-4px", xl: "-4px", xxl: "-8px" },
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
