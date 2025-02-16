import React, {   useState } from 'react';
import { Button, Paper, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
 
 
 

function StudentRegistration() {
  const [firstname,setfirstname]=useState();
  const [lastname,setlastname]=useState();
  const [email,setemail]=useState();
  const navigate =useNavigate();
 
 const addData = async () =>{
  let userObj ={
      firstname,
      lastname,
      email
  }
try {
 
 const response = await addDoc(collection(db, "registerUser"), userObj);
 console.log(response)
 navigate("/dashboard/studentList")
  
} catch (error) {
  console.log(error)
  
}
}
 


  return (
    <div style={{marginTop:"60px",marginRight:"150px"}}>
      
      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          STUDENT   Registration 
        </Typography>
        <br />

        {/* First Name */}
        <TextField
          label="First name"
          fullWidth
          onChange={(e)=> setfirstname(e.target.value)}
        />
        <br />
        <br />

        {/* Last Name */}
        <TextField
          label="Last name"
          fullWidth
          onChange={(e)=> setlastname(e.target.value)}
        />
        <br />
        <br />

        {/* Email */}
        <TextField
          label="Enter email"
          fullWidth
          onChange={(e)=> setemail(e.target.value)}
        />
        <br />
        <br />

        {/* Phone Number */}
        <TextField
          label="Class"
          type="number"   
          fullWidth
         
        />
        <br />
        <br />

        {/* Gender Radio Buttons */}
        <FormControl component="fieldset">
          <Typography variant="body1">Gender</Typography>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />

        {/* Submit Button */}
        <Button
          color="success"
          fullWidth
          variant="contained"
          sx={{ marginBottom: 3 }}
          onClick={addData}
        >
        Submit
        </Button>

      </Paper>
    
    </div>
  );
}

export default StudentRegistration;
