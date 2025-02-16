 
import React, { useEffect, useState } from 'react'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography, Button, Box } from '@mui/material';


const SubjectList = () => {
  const navigate = useNavigate()
  const [data,setdata]=useState([]);
  useEffect(()=>{
    getdatafromdatabase()
  },[])

  const  getdatafromdatabase = async ()=>{
   try {
    let arr = [];
    const getdata = await getDocs(collection(db,"Subject")) 
    getdata.forEach((doc)=>{
      console.log(doc.data());
      arr.push({
       ...doc.data(),
        id:doc.id,
      })

    }) 
    setdata([...arr])
       
    
   } catch (error) {
    console.log(error)
   }
       


  } 
  console.log(data);
  return (
    
    <div style={{ display: 'flex', justifyContent: 'start',   height: '100vh', marginTop: '100px',marginRight:"200px" }}>
    <div style={{ width: '80%', maxWidth: '1200px' }}>
   
      {/* Add Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button
          onClick={() => {
            navigate("/dashboard/subjectAdd");
          }}
          startIcon={<AddRoundedIcon />}
          sx={{
            backgroundColor: '#1976D2',  
            color: 'white',
            '&:hover': { backgroundColor: '#1565C0' },
            padding: '10px 20px',
            borderRadius: '30px',
          }}
          variant="contained"
        >
          Add New Subject
        </Button>
   
      </Box>
      <h1 style={{textAlign:"center"}}>Subject List</h1>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px', }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976D2' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Subject Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>ClassName</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Group</TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((classItem) => (
                <TableRow
                  key={classItem.id}
                  sx={{
                    '&:nth-of-type(even)': {
                      backgroundColor: '#f9f9f9' 
                    },
                    '&:hover': {
                      backgroundColor: '#e0f7fa',  
                    },
                  }}
                >
                  <TableCell>{classItem.id}</TableCell>
                  <TableCell>{classItem. subjectName}</TableCell>
                  <TableCell>{classItem.className}</TableCell>
                  <TableCell>{classItem.selectedGroup}</TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

</div>
</div>

      
 



 
  )
}

export default SubjectList