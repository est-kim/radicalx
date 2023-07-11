import { Box } from "@mui/material";
function CurrencyButtonImage({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: {
          xs: "18px",
          sm: "20px",
          md: "20px",
          lg: "24px",
          xl: "24px",
          xxl: "28px",
        },
        height: {
          xs: "18px",
          sm: "20px",
          md: "20px",
          lg: "24px",
          xl: "24px",
          xxl: "28px",
        },
      }}
    />
  );
}

export default CurrencyButtonImage;
