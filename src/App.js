import { Grid } from "@mui/material";
import "./App.css";
import Header from "./layouts/MainAppLayout/Header/Header";
import MissionCard from "./layouts/MainAppLayout/MissionsCard/MissionCard";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ paddingTop: '100px' }}>
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
      </Grid>
    </>
  );
}

export default App;
