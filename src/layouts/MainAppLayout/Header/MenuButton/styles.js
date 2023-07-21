const styles = {
  buttonProps: {
    sx: {
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
      },
      letterSpacing: {
        mobileSmall: "0.2px",
      },
      textTransform: "none",
      color: "#FFFFFF",
      position: "relative",
      backgroundColor: "#181A20",
      borderRadius: "100px",
      alignItems: "center",
    //   justifyContent: "start",
      alignSelf: "center",
      height: { mobileSmall: "100%", mobile: "36px" },
      display: "flex",
      gap: { mobileSmall: "4px", mobile: "8px" },
      padding: { mobileSmall: "8px", mobile: "6px 16px" },
    },
  },
  mobileToTabletProps: {
    sx: {
      display: "inline-flex",
      padding: {
        mobileSmall: "1px",
        mobile: "1px",
      },
      borderRadius: "100px",
      backgroundImage: "linear-gradient(to right, #00F5A0, #00D9F5)",
      alignItems: "flex-start",
      justifyContent: "center",
    //   height: { mobileSmall: "100%", mobile: "100%" },
    },
  },
  tabletToDesktopLargeProps: {
    sx: {
      display: "flex",
      gap: { tablet: "16px", desktopLarge: "24px" },
    },
  },
};

export default styles;
