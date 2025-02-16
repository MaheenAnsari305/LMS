import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "100vh",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
  },
}));

export default function SignUp(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    console.log(email, password, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Successfully created account", userCredential);
          navigate("/login");
        })
        .catch((error) => {
          alert("Error:", error.message);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <SignUpContainer direction="column" justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "center",
          }}
        >
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <TextField
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
          />

          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            required
            fullWidth
            id="email"
            placeholder="your@email.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            required
            fullWidth
            type="password"
            id="password"
            placeholder="••••••"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />

          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive updates via email."
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Button color="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Typography>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
