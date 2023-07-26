import { useState } from "react";
import { Button, Grid, Menu, MenuItem } from "@mui/material";
import styles from "./styles";
import PageButton from "../PageButton/PageButton";
import { useMobileSmallToTablet } from "../../../../hooks/useMobileSmallToTablet";

const MenuButton = ({ pages, selectedPage, handlePageClick }) => {
  const isMobileSmallToTablet = useMobileSmallToTablet();
  const [anchorEl, setAnchorEl] = useState(null);

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

  if (isMobileSmallToTablet) {
    return (
      <Grid {...styles.mobileToTabletProps}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          {...styles.buttonProps}
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
          {pages.map((page, index) => (
            <MenuItem
              key={index + 1}
              onClick={() => handleMenuItemClick(page)}
            >
              {page}
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    );
  } else {
    return (
      <Grid {...styles.tabletToDesktopLargeProps}>
        {pages.map((page, index) => (
          <PageButton
            key={index}
            page={page}
            selectedPage={selectedPage}
            handlePageClick={handlePageClick}
          />
        ))}
      </Grid>
    );
  }
};

export default MenuButton;
