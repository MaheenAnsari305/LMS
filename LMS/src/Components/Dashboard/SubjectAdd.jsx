import React, { useState } from 'react';
import { Button, Paper, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { addDoc, collection,  } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SubjectAdd = () => {
 
  const [subjectName, setSubjectName] = useState('');
  const [className, setClassName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const navigate =useNavigate()
 
  
  

  const handleRadioChange = (event) => {
    setSelectedGroup(event.target.value);
  };
 
  const handleSubmit = async () => {
 
    const userObj = {
      subjectName,
      className,
      selectedGroup
    };
  try {
    const response = await addDoc(collection(db,"Subject"),userObj)
    console.log(response)
    navigate("/dashboard/subjectList")
     
  } catch (error) {
   console.log(error) 
  }
   


  };

  return (
    <div style={{ marginTop: "60px", marginRight: "150px" }}>
      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Subject   Form
        </Typography>
        <br />

     
        <TextField
          label="Subject name"
          fullWidth
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
        />
        <br />
        <br />

     
        <TextField
          label="Class"
          type="number"
          fullWidth
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <br />
        <br />

       
        <FormControl component="fieldset">
          <Typography variant="body1">Select Group</Typography>
          <RadioGroup row aria-label="subject" name="subject" value={selectedGroup} onChange={handleRadioChange}>
            <FormControlLabel value="GeneralScience" control={<Radio />} label="General Science" />
            <FormControlLabel value="Pre-Engineering" control={<Radio />} label="Pre-Engineering" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />

 
        <Button
          color="success"
          fullWidth
          variant="contained"
          sx={{ marginBottom: 3 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Paper>
    </div>
  );
};

export default SubjectAdd;
