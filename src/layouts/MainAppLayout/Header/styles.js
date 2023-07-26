const styles = {
  appBarStyle: {
    sx: {
      backgroundColor: "#181A20",
    },
  },
  gridStyle: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      boxSizing: "border-box",
      margin: {
        mobileSmall: "0px 16px 0px 16px",
        mobile: "0px 24px 0px 24px",
        laptop: "0px 40px 0px 40px",
        desktop: "0px 42px 0px 40px",
        desktopLarge: "0px 40px 0px 40px",
      },
      height: {
        mobileSmall: "52px",
        mobile: "64px",
        laptop: "66px",
        desktopLarge: "85px",
      },
      backgroundColor: "#181A20",
    },
  },
  menuBoardStyle: {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: {
        mobileSmall: "auto",
        mobile: "auto",
        tablet: "16px",
        desktopLarge: "24px",
      },
    },
  },
  currenciesStyle: {
    sx: {
      marginLeft: {
        mobileSmall: "auto",
        mobile: "auto",
        tablet: "0px",
      },
      display: "flex",
      alignItems: "center",
      alignSelf: {
        mobileSmall: "center",
        desktopLarge: "stretch",
      },
      gap: {
        mobileSmall: "4px",
        mobile: "8px",
        desktopLarge: "16px",
      },
    },
  },
  avatarPhotoStyle: {
    sx: {
      display: "flex",
      boxSizing: "border-box",
    },
  },
};

export default styles;
