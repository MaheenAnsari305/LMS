import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Typography, Button, Box } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig'

const ClassList = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  // Fetch data from Firestore
  useEffect(() => {
    const getdatafromdatabase = async () => {
      try {
        let arr = [];
        const getdata = await getDocs(collection(db, "admission"));
        getdata.forEach((doc) => {
          arr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setdata([...arr]);
      } catch (error) {
        console.log(error);
      }
    };

    getdatafromdatabase();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'start',   height: '100vh', marginTop: '100px',marginRight:"200px" }}>
      <div style={{ width: '80%', maxWidth: '1200px' }}>
 
        {/* Add Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
          <Button
            onClick={() => {
              navigate("/dashboard/classform");
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
            Add New Class
          </Button>
        </Box>
        <h1 style={{textAlign:"center"}}>CLASS LIST</h1>

        {/* Table Heading */}
           

        {/* Table Container */}
        <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px', }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976D2' }}>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>First Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Last Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#fff' }}>Class</TableCell>
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
                  <TableCell>{classItem.firstname}</TableCell>
                  <TableCell>{classItem.lastname}</TableCell>
                  <TableCell>{classItem.email}</TableCell>
                  <TableCell>{classItem.classname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ClassList;
