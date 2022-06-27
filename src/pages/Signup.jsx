import { Grid, Box, Typography, TextField, Button, Paper } from "@mui/material";
import React from "react";
const Signup = () => {
  return (
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
                  Signin
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
      </Grid>
    </Grid>
  );
};

export default Signup;
