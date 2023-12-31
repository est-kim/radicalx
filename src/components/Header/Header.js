import "./Header.module.css";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import CurrencyButton from "./CurrencyButton";
import LoadAvatar from "../Avatar/LoadAvatar";

const pages = ["🚀 Missions", "🏆 Leaderboard", "💰 Rewards"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header({ onAvatarData }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(null);
  const [avatarData, setAvatarData] = React.useState({ url: "", id: "" });

  const handlePageClick = (pageName) => {
    handleCloseNavMenu();
    setSelectedPage(pageName);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarData = (data) => {
    setAvatarData(data);
  };

  console.log("avatarData in header", avatarData);
  return (
    <AppBar>
      {/* <Container id="header" maxWidth="false"> */}
      <Toolbar id="header" disableGutters sx={{ display: "flex" }}>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          id="logo"
          sx={{
            mx: "auto",
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#1F222A",
            textDecoration: "none",
            width: "239px",
          }}
        >
          <img src="/WhiteLogoRadicalX.svg" alt="Logo" />
        </Typography>

        {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img src="/WhiteLogoRadicalX.svg" alt="Logo" />
        </Typography>
        <Box
          id="menu-board"
          sx={{
            display: { xs: "none", md: "flex" },
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
              <Box
                component="img"
                src="/DiamondBlue.svg"
                alt="Diamond"
                sx={{ width: 28, height: 28 }}
              />
              20,000
            </CurrencyButton>
            <CurrencyButton type="Coin">
              <Box
                component="img"
                src="/CoinGold.svg"
                alt="Coin"
                sx={{ width: 28, height: 28 }}
              />
              11,000
            </CurrencyButton>
          </Box>
          <Box id="avatar-photo" sx={{ flexGrow: 0, pr: "40px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {avatarData.url ? (
                  <LoadAvatar url={avatarData.url} id={avatarData.id} />
                ) : (
                  <Box position="relative">
                    <Avatar
                      alt="avatar-photo"
                      src="/ellipse.svg"
                      sx={{ width: 45, height: 45 }}
                    />
                    <Box
                      position="absolute"
                      bottom={0}
                      right={0}
                      width={11.25}
                      height={11.25}
                      bgcolor="#12D18E"
                      borderRadius="50%"
                    ></Box>
                  </Box>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}
export default Header;
