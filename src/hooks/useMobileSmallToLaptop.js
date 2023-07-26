import { useTheme, useMediaQuery } from "@mui/material";

export function useMobileSmallToLaptop() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("laptop"));
}
