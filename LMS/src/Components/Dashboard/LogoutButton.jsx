import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";  

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("uid");
    navigate("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="contained"
      sx={{
        backgroundColor: '#2196F3', // Blue color for the button
        color: 'white', // White text
        borderRadius: '8px',
        padding: '8px 20px',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#1976D2', // Darker blue for hover
        },
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
