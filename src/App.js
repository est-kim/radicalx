import "./App.css";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      mobileSmall: 320, // xs
      mobile: 576.5, // sm
      tablet: 767.5, // md
      laptop: 1024, // lg
      desktop: 1280, // xl
      desktopLarge: 1536, // xxl
      // xs: 0, //
      // sm: 576, //
      // md: 768, //
      // lg: 1024,  //
      // xl: 1280, //
      // xxl: 1536, //
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
