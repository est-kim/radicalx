import "./App.css";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, //
      sm: 576, //
      md: 768, //
      lg: 1024,  //
      xl: 1280, //
      xxl: 1536, // 
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
