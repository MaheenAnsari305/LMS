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
      color="secondary" 
      sx={{
        borderRadius: '8px', 
        padding: '8px 20px',  
        fontWeight: 'bold',  
        '&:hover': {
          backgroundColor: '#4CAF50', 
        },
      }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
