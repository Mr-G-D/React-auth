import "./App.css";
import { Grid, Paper } from "@mui/material";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Otp from "./pages/Otp";

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
            minHeight: "70vh",
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: "40px",
            margin: "40px",
            color: "black",
            opacity: "1",
            display: "flex",
            alignContent: "space-around",
            justifyContent: "space-around",
          }}
          item
          xs={12}
          sm={6}
          md={3}
          elevation={6}
          component={Paper}
        >
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Signup />} />
              <Route exact path="/otp" element={<Otp />} />
            </Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
