import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
const Signup = () => {
  return (
    <Box
      style={{
        margin: "40px",
        textAlign: "justify",
      }}
    >
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid xs={8}>
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
        <Grid xs={4}>
          <Typography
            style={{
              textAlign: "-webkit-center",
            }}
            item
            xs={{}}
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
          marginBottom: "50px",
        }}
      >
        <Grid className="input">
          <Typography variant="body2">
            Enter your username or email address
          </Typography>
          <TextField
            className="textfield"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid className="input" item xs={12} sm={6}>
            <Typography variant="body2">User name</Typography>
            <TextField
              className="textfield"
              name="username"
              required
              fullWidth
              id="username"
              label="Username"
              autoFocus
            />
          </Grid>
          <Grid className="input" item xs={12} sm={6}>
            <Typography variant="body2">Contact Number</Typography>
            <TextField
              className="textfield"
              type="number"
              required
              fullWidth
              id="number"
              label="Contact Number"
              name="number"
            />
          </Grid>
        </Grid>
        <Grid className="input">
          <Typography variant="body2">Enter your password</Typography>
          <TextField
            className="textfield"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="password"
            autoFocus
          />
        </Grid>

        <Button
          type="submit"
          fullWidth
          color="success"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
