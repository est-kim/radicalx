const styles = {
  gridProps: (backgroundImage) => ({
    container: true,
    sx: {
      display: "flex",
      padding: {
        mobileSmall: "1px",
        desktopLarge: "2px",
      },
      borderRadius: "40px",
      backgroundImage,
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  buttonProps: {
    sx: {
      display: "flex",
      padding: {
        mobileSmall: "2px 6px",
        mobile: "2px 8px",
        laptop: "2px 16px",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: {
        mobileSmall: "2px",
        mobile: "4px",
        laptop: "8px",
      },
      alignSelf: {
        mobileSmall: "stretch",
      },
      borderRadius: "40px",
      backgroundColor: "#181A20",
      color: "#FFFFFF",
      fontSize: {
        mobileSmall: "12px",
        mobile: "14px",
        laptop: "16px",
        desktopLarge: "20px",
      },
      position: "relative",
      fontFamily: "Inter",
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "160%",
    },
  }
}

export default styles;
