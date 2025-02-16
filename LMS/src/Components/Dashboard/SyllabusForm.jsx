import React, { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from "@mui/material";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SyllabusForm = () => {
  const [file, setFile] = useState(null);
  const[subjectname,setsubjectname]=useState();
  const[classname,setclassname]=useState();
 const navigate =useNavigate()



  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // File ko set karna
  };

  const handleSubmit = async () => {
    if (file) {
      console.log("File selected:", file.name);
 
    } else {
      console.log("No file selected");
    }

    let userObj ={
      subjectname,
      classname

    }
      try {
        const response = await addDoc(collection(db,"syllabus"),userObj)
      console.log("succesfully", response);
      navigate("/dashboard/SyllabusList")
      
      } catch (error) {
        console.log(error);
        
      }

  };

  return (
    <div style={{ marginTop: "60px", marginRight: "150px" }}>
      <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
         Sylllabus Form
        </Typography>
        <br />

    
        <TextField 
         label="Subject name" 
         type='text'
        fullWidth
        onChange={(e)=> setsubjectname(e.target.value)}
        />
        <br />
        <br />

   
        <TextField
         label="Class"
          type="number"
           fullWidth
           onChange={(e)=> setclassname(e.target.value)}
            />
        <br />
        <br />
 
        <input
          type="file"
          accept=".pdf"  
          style={{ display: "none" }}  
          id="file-upload"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button variant="outlined" fullWidth component="span" sx={{ marginBottom: 3 }}>
            Upload PDF
          </Button>
        </label>
 
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

export default SyllabusForm;
