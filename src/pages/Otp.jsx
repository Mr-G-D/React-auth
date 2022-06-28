import { Grid, Box, Typography, Button, TextField } from "@mui/material";

const Otp = () => {
  return (
    <Box
      style={{
        margin: "40px",
        textAlign: "justify",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={8}>
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
          <Typography variant="h4">Sign up</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            style={{
              textAlign: "-webkit-center",
            }}
            variant="subtitle2"
          >
            Have an Account ?{" "}
            <span
              style={{
                color: "teal",
              }}
            >
              Sign in
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Box
        component="form"
        noValidate
        style={{
          marginTop: "40px",
          marginBottom: "100px",
        }}
      >
        <Grid className="input">
          <Typography variant="body2">
            Please enter the provided otp here
          </Typography>
          <TextField
            className="textfield"
            margin="normal"
            required
            fullWidth
            id="otp"
            type="number"
            name="otp"
            placeholder="0 0 0 0 0 0"
            autoComplete="otp"
            autoFocus
          />
          {/* <OtpInput
              className="textfield"
              numInputs={6}
              onChange={(e) => console.log(e)}
              inputStyle={{
                color: "black",
                width: "60%",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            /> */}
        </Grid>
        <Button
          type="submit"
          fullWidth
          color="success"
          variant="contained"
          style={{
            width: "50%",
          }}
          sx={{ mt: 3, mb: 2, float: "right" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Otp;
