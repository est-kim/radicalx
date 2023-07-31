const styles = {
  cardGridStyle: {
    sx: {
      display: "flex",
      flexDirection: "column",
      flex: "1 0 0",
    },
  },
  cardStyle: {
    sx: {
      backgroundColor: "#181A20",
      borderRadius: "20px",
      boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.08)",
      height: {
        mobileSmall: "552px",
        mobile: "704px",
        tablet: "777px",
      },
      width: {
        mobileSmall: "286px",
        tablet: "100%",
      },
      display: "flex",
      flexDirection: "column",
    },
  },
  companyInfoStyle: {
    sx: {
      direction: "row",
      alignItems: "center",
      gap: "12px",
    },
  },
  dividerStyle: {
    sx: {
      height: "1px",
      width: "100%",
      backgroundColor: "#35383F",
      marginBottom: "16px",
    },
  },
  leaderboardStyle: {
    sx: {
      width: "100%",
    },
  },
  missionTagsStyle: {
    sx: {
      gap: "8px",
      direction: "row",
    },
  },
  missionInfoStyle: {
    sx: {
      padding: {
        mobileSmall: "16px 16px 0px 16px",
        tablet: "24px 24px 0px 24px",
      },
      marginBottom: "16px",
      flexGrow: 1,
    },
  },
  timerStyle: {
    sx: {
      width: "100%",
    },
  },
};

export default styles;
