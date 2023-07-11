import "./App.css";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // 12px
      sm: 576, // 14px
      md: 768, // 14px
      lg: 1024,  // 16px
      xl: 1280, // 16px
      xxl: 1536, // 20px
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
