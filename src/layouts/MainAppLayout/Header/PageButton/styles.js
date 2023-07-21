const styles = ({ page, selectedPage }) => ({
  buttonStyle: {
    sx: {
      my: 2,
      display: "block",
      fontSize: {
        mobile: "16px",
        desktop: "18px",
        desktopLarge: "20px",
      },
      fontStyle: "normal",
      fontFamily: "Inter",
      fontWeight: 700,
      lineHeight: {
        tablet: "140%",
        desktopLarge: "160%",
      },
      letterSpacing: { tablet: "0.2px"},
      textTransform: "none",
      padding: 0,
      gap: "24px",
      "& span": {
        color: selectedPage === page ? "transparent" : "darkgrey",
        backgroundImage:
          selectedPage === page
            ? "linear-gradient(to right, #00F5A0, #00D9F5)"
            : "none",
        backgroundClip: selectedPage === page ? "text" : "border-box",
        WebkitBackgroundClip: selectedPage === page ? "text" : "border-box",
        WebkitTextFillColor: selectedPage === page ? "transparent" : "darkgrey",
      },
    },
  },
});

export default styles;
