import { useTheme, useMediaQuery } from "@mui/material";

export function useMobileSmallToTablet() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("mobileSmall", "laptop"));
}
