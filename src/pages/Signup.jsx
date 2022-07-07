import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.username === "") {
      alert("Username is required");
      return false;
    }
    if (formData.email === "") {
      alert("Email is required");
      return false;
    }
    if (formData.number === "") {
      alert("Number is required");
      return false;
    }
    if (formData.password === "") {
      alert("password is required");
      return false;
    }
    console.log(formData);
    window.location.href = "/otp";
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

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
            <Link
              to="#"
              style={{
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "teal",
                }}
              >
                Sign in
              </span>
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Box
        onSubmit={handleSubmit}
        component="form"
        style={{
          marginTop: "40px",
          marginBottom: "50px",
        }}
      >
        <Grid className="input">
          {/* <Typography variant="body2">
            Enter your username or email address
          </Typography> */}

          <Input
            type="email"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            action={handleChange}
            value={formData.email}
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid className="input" item xs={12} sm={6}>
            {/* <Typography variant="body2">User name</Typography> */}
            <Input
              type="text"
              id="username"
              label="Username"
              name="username"
              action={handleChange}
              value={formData.username}
            />
          </Grid>
          <Grid className="input" item xs={12} sm={6}>
            {/* <Typography variant="body2">Contact Number</Typography> */}
            <Input
              type="number"
              id="number"
              label="Contact Number"
              action={handleChange}
              value={formData.number}
              name="number"
            />
          </Grid>
        </Grid>
        <Grid className="input">
          {/* <Typography variant="body2">Enter your password</Typography> */}
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
            onChange={handleChange}
            value={formData.password}
          />
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
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
