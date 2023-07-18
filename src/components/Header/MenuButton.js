import React from "react";
import PageButton from "./PageButton";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const MenuButton = ({ pages, selectedPage, handlePageClick }) => {
  const theme = useTheme();
  const isXsToMd = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const backgroundImage = "linear-gradient(to right, #00F5A0, #00D9F5)";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (page) => {
    handlePageClick(page);
    handleClose();
  };

  if (isXsToMd) {
    return (
      <Box
        sx={{
          display: "inline-flex",
          padding: {
            mobileSmall: "1px",
            mobile: "1px",
          },
          borderRadius: "100px",
          backgroundImage,
          alignItems: "flex-start",
          justifyContent: "center",
          height: {mobileSmall: "100%",mobile: "100%"},
        }}
      >
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "normal",
            textAlign: "center",
            fontSize: {
              mobileSmall: "12px",
              mobile: "14px",
            },
            lineHeight: {
              mobileSmall: "140%",
              mobile: "140%",
            },
            letterSpacing: {
              mobileSmall: "0.2px",
              mobile: "0.2px",
            },
            textTransform: "none",
            color: "#FFFFFF",
            position: "relative",
            backgroundColor: "#181A20",
            borderRadius: "100px",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            height: {mobileSmall: "100%",mobile: "36px"},
            display: "flex",
            gap: { mobileSmall: "4px", mobile: "8px" },
            padding: {mobileSmall: "8px", mobile: "6px 16px"},
          }}
        >
          {selectedPage || "🚀 Missions"}{" "}
          <img src="/ArrowDown.svg" alt="dropdown" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pages.map((page) => (
            <MenuItem
              onClick={() => handleMenuItemClick(page)}
              sx={
                {
                  // Your MenuItem styles here
                }
              }
            >
              {page}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          gap: { tablet: "16px", laptop: "16px", desktop: "16px", desktopLarge: "24px" },
        }}
      >
        {pages.map((page) => (
          <PageButton
            key={page}
            page={page}
            selectedPage={selectedPage}
            handlePageClick={handlePageClick}
          />
        ))}
      </Box>
    );
  }
};

export default MenuButton;
