import "./App.css";
import { Grid, Paper } from "@mui/material";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid
        container
        component="main"
        sx={{
          alignContent: "center",
          height: "100vh",
          backgroundImage: 'url("/bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          justifyContent: "flex-end",
        }}
      >
        <Grid
          style={{
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "40px",
            margin: "40px",
            color: "black",
            opacity: "1",
          }}
          item
          xs={12}
          sm={6}
          md={4}
          elevation={6}
          component={Paper}
        >
          <Signup />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
