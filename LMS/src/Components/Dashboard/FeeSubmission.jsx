import React from 'react'
import  { useState } from 'react';
import { Button, Paper, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const FeeSubmission = () => {

  const [studentname,setstudentname]=useState();
  const [classname,setclassname]=useState();
  const[choice,setchoice]=useState();
 
  const navigate =useNavigate();

   const handleRadioChange =(event)=>{
    setchoice(event.target.value)
   }
 
 const addData = async () =>{
  let userObj ={
      studentname,
     classname,
     choice
  }
try {
 
 const response = await addDoc(collection(db, "submission"), userObj);
 console.log(response)
 navigate("/dashboard/feevoucher")
  
} catch (error) {
  console.log(error)
  
}
}


  return (
<div style={{marginTop:"60px",marginRight:"150px"}}>
      
      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          FEE SUBMISSION
        </Typography>
        <br />

        {/* First Name */}
        <TextField
          label="NAME"
          fullWidth
          onChange={(e)=> setstudentname(e.target.value)}
        />
        <br />
        <br />

        {/* Last Name */}
        <TextField
          label="Class"
          type="number"   
          fullWidth
          onChange={(e)=> setclassname(e.target.value)}
        />
        <br />
        <br />

        <FormControl component="fieldset">
          <Typography variant="body1">Gender</Typography>
          <RadioGroup row aria-label="gender" name="gender" onChange={handleRadioChange}> 
            <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
            <FormControlLabel value="yearly" control={<Radio />} label="Yearly" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />

   
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

  )
}

export default FeeSubmission