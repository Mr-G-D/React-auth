import { Grid, Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      style={{
        margin: "40px",
        textAlign: "justify",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
      }}
    >
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12}>
          <Typography
            style={{
              textAlign: "left",
            }}
            variant="h6"
          >
            Welcome to{" "}
            <span
              style={{
                color: "teal",
              }}
            >
              ICWS
            </span>
          </Typography>
          <Typography variant="h4">You are looking for</Typography>
        </Grid>
      </Grid>

      <Box
        noValidate
        style={{
          marginTop: "40px",
          marginBottom: "100px",
        }}
      >
        <Button
          size="large"
          fullWidth
          color="success"
          variant="contained"
          sx={{ mt: 5, mb: 7, float: "right" }}
        >
          Selling
        </Button>
        <hr />
        <Button
          size="large"
          fullWidth
          color="success"
          variant="contained"
          sx={{ mt: 7, mb: 2, float: "right" }}
        >
          Renting / Buying
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
