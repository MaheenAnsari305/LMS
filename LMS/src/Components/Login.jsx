import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const LoginContainer = styled(Stack)(({ theme }) => ({
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

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const navigate = useNavigate();

  const validateInputs = () => {
    console.log(email, password);
  };

  

const handleSubmit = (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!" , userCredential);
      navigate("/dashboard"); // Navigate to dashboard after successful login
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};


  return (
    <LoginContainer direction="column" justifyContent="center" alignItems="center">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontSize: "clamp(2rem, 10vw, 2.15rem)",
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={validateInputs}
          >
            Login
          </Button>

          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Button color="primary" onClick={() => navigate("/signup")}>
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Card>
    </LoginContainer>
  );
}
