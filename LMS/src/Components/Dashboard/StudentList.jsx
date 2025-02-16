import React, { useEffect, useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Button, Box } from '@mui/material';


 const StudentList = () => {
 
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getDataFromDatabase();
  }, []);

  const getDataFromDatabase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db,"registerUser"));
      getData.forEach((doc) => {
        console.log(doc.data());
        arr.push({
          ...doc.data(),
          id: doc.id,
        
        });
 
      });

      setUserData([...arr]);
    } catch (error) {
      console.log(error);
    }
   
  };
 
  console.log(userData);
  const navigate=useNavigate()
  return (
    <div style={{ display: 'flex', justifyContent: 'start',   height: '100vh', marginTop: '100px',marginRight:"200px" }}>
    <div style={{ width: '80%', maxWidth: '1200px' }}>
   
    
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
        <Button
          onClick={() => {
            navigate("/dashboard/studentRegistration");
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
          Add New Class
        </Button>
   
      </Box>
      <h1 style={{textAlign:"center"}}>Student List</h1>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px', }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976D2' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>First Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Last Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Email</TableCell>
             
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((classItem) => (
                <TableRow
                  key={classItem.id}
                  sx={{
                    '&:nth-of-type(even)': {
                      backgroundColor: '#f9f9f9',  
                    },
                    '&:hover': {
                      backgroundColor: '#e0f7fa',  
                    },
                  }}
                >
                  <TableCell>{classItem.id}</TableCell>
                  <TableCell>{classItem.firstname}</TableCell>
                  <TableCell>{classItem.lastname}</TableCell>
                  <TableCell>{classItem.email}</TableCell>
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

</div>
</div>

      
 
  )
}

export default StudentList
