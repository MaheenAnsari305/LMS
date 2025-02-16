import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from "@mui/material";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const ClassForm = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [classname, setclassname] = useState('');
  const navigate = useNavigate(); // for navigation

  const addData = async () => {
    let userobj = {
      firstname,
      lastname,
      email,
      classname,
    };

    try {
      await addDoc(collection(db, "admission"), userobj);
      console.log("Data added successfully");
      navigate('/dashboard/classlist'); // After adding data, redirect to the ClassList page
    } catch (error) {
      console.log("Error adding data:", error);
    }
  };

  return (
    <div style={{ marginTop: "60px", marginRight: "150px" }}>
      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          ADMISSION FORM
        </Typography>
        <br />

        <TextField
          label="First name"
          fullWidth
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <br /><br />

        <TextField
          label="Last name"
          fullWidth
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <br /><br />

        <TextField
          label="Enter email"
          fullWidth
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <br /><br />

        <TextField
          label="Class"
          type="number"
          fullWidth
          value={classname}
          onChange={(e) => setclassname(e.target.value)}
        />
        <br /><br />

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
};

export default ClassForm;
