import { Grid } from "@mui/material";

function CurrencyButtonImage({ src, alt }) {
  return (
    <Grid
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: {
          mobileSmall: "18px",
          mobile: "20px",
          desktop: "24px",
          desktopLarge: "28px",
        },
        height: {
          mobileSmall: "18px",
          mobile: "20px",
          desktop: "24px",
          desktopLarge: "28px",
        },
      }}
    />
  );
}

export default CurrencyButtonImage;
