import { Grid, Box, Typography, Button, TextField } from "@mui/material";
import OtpInput from "react-otp-input";

const Otp = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "space-around",
      }}
    >
      <Box
        gap={5}
        style={{
          margin: "40px",
          textAlign: "justify",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Grid>
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
            <Typography variant="h4">OTP</Typography>
          </Grid>
        </Grid>

        <Box
          component="form"
          noValidate
          style={{
            marginTop: "40px",
            marginBottom: "50px",
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
            sx={{ mt: 1, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Otp;
