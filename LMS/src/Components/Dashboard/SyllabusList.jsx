import React, { useEffect, useState } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography, Button, Box } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const SyllabusList = () => {
  const[data,setdata]=useState([])

  useEffect(()=>{
    getdatafromdatabase()
  },[])


   
const getdatafromdatabase = async ()=>{
try {
  let arr = []
  const getdata = await getDocs(collection(db,"syllabus"))
  getdata.forEach((doc)=>{
    console.log(doc.data());
    arr.push({
      ...doc.data(),
      id:doc.id,
    })
  
  });
  setdata([...arr])
  
} catch (error) {
  console.log(error);
  
  
}
console.log(data);


}

    const navigate =useNavigate()
  return (
    
<div style={{ display: 'flex', justifyContent: 'start',   height: '100vh', marginTop: '100px',marginRight:"200px" }}>
    <div style={{ width: '80%', maxWidth: '1200px' }}>
   
      {/* Add Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button
          onClick={() => {
            navigate("/dashboard/SyllabusForm");
          }}
          startIcon={<AddRoundedIcon />}
          sx={{
            backgroundColor: '#1976D2', // Blue color for button
            color: 'white',
            '&:hover': { backgroundColor: '#1565C0' },
            padding: '10px 20px',
            borderRadius: '30px',
          }}
          variant="contained"
        >
          Add New Syllabus
        </Button>
   
      </Box>
      <h1 style={{textAlign:"center"}}>Syllabus List</h1>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px', }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976D2' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Subject Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Class Name</TableCell>
                
             
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((classItem) => (
                <TableRow
                  key={classItem.id}
                  sx={{
                    '&:nth-of-type(even)': {
                      backgroundColor: '#f9f9f9', // Alternating row colors
                    },
                    '&:hover': {
                      backgroundColor: '#e0f7fa', // Hover effect for rows
                    },
                  }}
                >
                  <TableCell>{classItem.id}</TableCell>
                  <TableCell>{classItem.subjectname}</TableCell>
                  <TableCell>{classItem.classname}</TableCell>
                 
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

</div>
</div>

 

     
  )
}

export default SyllabusList