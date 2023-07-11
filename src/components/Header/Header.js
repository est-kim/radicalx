import "./Header.module.css";
import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import CurrencyButton from "./CurrencyButton";
import CurrencyButtonImage from "./CurrencyButtonImage";
import AvatarWithStatus from "./AvatarWithStatus";
import LoadAvatar from "../Avatar/LoadAvatar";

const pages = ["🚀 Missions", "🏆 Leaderboard", "💰 Rewards"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [selectedPage, setSelectedPage] = React.useState(null);
  const [avatarData, setAvatarData] = React.useState({ url: "", id: "" });

  const handlePageClick = (pageName) => {
    setSelectedPage(pageName);
  };

  return (
    <AppBar>
      <Toolbar
        id="header"
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            // display: { xs: "none", md: "flex" },
            alignItems: "center",
            // justifyContent: "center",
            // flexGrow: 1,
          }}
        >
          <Typography
            component="a"
            href="/"
            id="logo"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <img src="/WhiteLogoRadicalX.svg" alt="Logo" />
          </Typography>
        </Box>
        <Box
          id="menu-board"
          sx={{
            display: "flex",
            alignItems: "center", // Vertically align items
            gap: "16px",
            marginLeft: "140px",
            // justifyContent: "center", // Horizontally align items
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              sx={{
                my: 2,
                display: "block",
                color: selectedPage === page ? "transparent" : "darkgrey", // Adjust color as per requirement
                fontSize: "20px", // font-size
                fontFamily: "Inter", // font-family
                fontWeight: 700, // font-weight
                lineHeight: "160%", // line-height
                textTransform: "none", // text-transform
                gap: "24px",
                backgroundImage:
                  selectedPage === page
                    ? "linear-gradient(to right, #00F5A0, #00D9F5)"
                    : "none",
                backgroundClip: selectedPage === page ? "text" : "border-box",
                WebkitBackgroundClip:
                  selectedPage === page ? "text" : "border-box",
                WebkitTextFillColor:
                  selectedPage === page ? "transparent" : "darkgrey",
              }}
            >
              {page}
            </Button>
          ))}
          <Box
            id="currencies"
            sx={{
              marginLeft: "140px", // The space you want to the right
              display: "flex",
              justifyContent: "space-between", // Distribute the space evenly between your buttons
              alignItems: "center",
              gap: "16px",
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
            sx={{ display: "flex", boxSizing: "border-box" }}
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
