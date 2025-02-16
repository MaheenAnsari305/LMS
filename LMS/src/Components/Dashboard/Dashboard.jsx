import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';

import StudentRegistration from './StudentRegistration';
import TeacherRegistration from './TeacherRegistration';
import TeacherList from './TeacherList';
import SubjectAdd from './SubjectAdd';
import SubjectList from './SubjectList';
import SyllabusForm from './SyllabusForm';
import SyllabusList from './SyllabusList';
import ClassList from './ClassList';
import ClassForm from './ClassForm';
import FeeStructure from './FeeStructure';
import FeeVoucher from './FeeVoucher';
import FeeSubmission from './FeeSubmission';
import StudentList from './StudentList';
import Admission from './Admission';
import ExamSchedule from './ExamSchedule';
import ExamResult from './ExamResult';

const drawerWidth = 240;

const pages = [
  {
    name: 'Students',
    children: [
      { name: 'StudentRegistration', route: 'studentRegistration' },
      { name: 'StudentList', route: 'studentList' },
    ],
  },
  {
    name: 'Teachers',
    children: [
      { name: 'TeacherRegistration', route: 'teacherRegistration' },
      { name: 'TeacherList', route: 'teacherList' },
    ],
  },
  {
    name: 'Subjects',
    children: [
      { name: 'SubjectAdd', route: 'subjectAdd' },
      { name: 'SubjectList', route: 'subjectList' },
    ],
  },
  {
    name: 'Syllabus',
    children: [
      { name: 'SyllabusForm', route: 'SyllabusForm' },
      { name: 'SyllabusList', route: 'SyllabusList' },
    ],
  },
  {
    name: 'Fees',
    children: [
      { name: 'FeeStructure', route: 'feestructure' },
      { name: 'FeeVoucher', route: 'feevoucher' },
      { name: 'FeeSubmission', route: 'feesubmission' },
    ],
  },
  {
    name: 'Admission',
    children: [{ name: 'Admission Form', route: 'admission' }],
  },
  {
    name: 'Exam',
    children: [
      { name: 'ExamSchedule', route: 'examSchedule' },
      { name: 'ExamResult', route: 'examresult' },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = React.useState({});

  const handleDropdownToggle = (section) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#388E3C' }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <h5>LEARNING MANAGEMENT SYSTEM</h5>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {pages.map((obj, index) => (
            <React.Fragment key={index}>
              <ListItemButton onClick={() => handleDropdownToggle(obj.name.toLowerCase())} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <EmailIcon sx={{ color: '#388E3C' }} />
                </ListItemIcon>
                <ListItemText primary={obj.name} sx={{ fontWeight: 'bold', color: '#388E3C' }} />
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  {openDropdown[obj.name.toLowerCase()] ? <ExpandLessIcon sx={{ color: '#388E3C' }} /> : <ExpandMoreIcon sx={{ color: '#388E3C' }} />}
                </ListItemIcon>
              </ListItemButton>

              {openDropdown[obj.name.toLowerCase()] && (
                <div>
                  {obj.children.map((child, childIndex) => (
                    <ListItem key={childIndex} disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(`/dashboard/${child.route}`)}>
                        <ListItemText primary={child.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}>
        <Routes>
          <Route path="studentRegistration" element={<StudentRegistration />} />
          <Route path="studentList" element={<StudentList />} />
          <Route path="teacherRegistration" element={<TeacherRegistration />} />
          <Route path="teacherList" element={<TeacherList />} />
          <Route path="subjectAdd" element={<SubjectAdd />} />
          <Route path="subjectList" element={<SubjectList />} />
          <Route path="SyllabusForm" element={<SyllabusForm />} />
          <Route path="SyllabusList" element={<SyllabusList />} />
          <Route path="classForm" element={<ClassForm />} />
          <Route path="classList" element={<ClassList />} />
          <Route path="feestructure" element={<FeeStructure />} />
          <Route path="feevoucher" element={<FeeVoucher />} />
          <Route path="feesubmission" element={<FeeSubmission />} />
          <Route path="admission" element={<Admission />} />
          <Route path="examSchedule" element={<ExamSchedule />} />
          <Route path="examresult" element={<ExamResult />} />
        </Routes>
      </Box>
    </Box>
  );
}
