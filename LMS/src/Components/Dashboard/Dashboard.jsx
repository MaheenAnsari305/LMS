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

// Material Icons
import PeopleIcon from '@mui/icons-material/People'; // For Students and Teachers
import SchoolIcon from '@mui/icons-material/School'; // For School
import SubjectIcon from '@mui/icons-material/Subject'; // For Subjects
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'; // For Syllabus
import ClassIcon from '@mui/icons-material/Class'; // For Classes
import PaidIcon from '@mui/icons-material/Paid'; // For Fees
import BusinessIcon from '@mui/icons-material/Business'; // For Admission
import EventIcon from '@mui/icons-material/Event'; // For Exam

import StudentRegistration from './StudentRegistration';
import StudentList from './StudentList';
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
import Admission from './Admission';
import ExamSchedule from './ExamSchedule';
import ExamResult from './ExamResult';
import LogoutButton from './LogoutButton';

const drawerWidth = 240;

const pages = [
  {
    name: 'Students',
    route: 'Student',
    icon: <PeopleIcon />, // People icon for students
    children: [
      { name: 'StudentRegistration', route: 'studentRegistration' },
      { name: 'StudentList', route: 'studentList' },
    ],
  },
  {
    name: 'Teachers',
    route: 'Teacher',
    icon: <PeopleIcon />, // People icon for teachers
    children: [
      { name: 'TeacherRegistration', route: 'teacherRegistration' },
      { name: 'TeacherList', route: 'teacherList' },
    ],
  },
  {
    name: 'Subjects',
    route: 'Subjects',
    icon: <SubjectIcon />, // Subject icon for subjects
    children: [
      { name: 'SubjectAdd', route: 'subjectAdd' },
      { name: 'SubjectList', route: 'subjectList' },
    ],
  },
  {
    name: 'Syllabus',
    route: 'Syllabus',
    icon: <LibraryBooksIcon />, // LibraryBooks icon for syllabus
    children: [
      { name: 'SyllabusForm', route: 'SyllabusForm' },
      { name: 'SyllabusList', route: 'SyllabusList' },
    ],
  },
  {
    name: 'School',
    route: 'School',
    icon: <SchoolIcon />, // School icon for school
    children: [
      { name: 'StudentRegistration', route: 'studentRegistration' },
      { name: 'TeacherRegistration', route: 'teacherRegistration' },
    ],
  },
  {
    name: 'Class',
    route: 'Class',
    icon: <ClassIcon />, // Class icon for classes
    children: [
      { name: 'classForm', route: 'classForm' },
      { name: 'Classlist', route: 'classlist' },
    ],
  },
  {
    name: 'Fees',
    route: 'Fees',
    icon: <PaidIcon />, // Paid icon for fees
    children: [
      { name: 'FeeStructure', route: 'feestructure' },
      { name: 'FeeVoucher', route: 'feevoucher' },
      { name: 'FeeSubmission', route: 'feesubmission' },
    ],
  },
  {
    name: 'Admission',
    route: 'Admission',
    icon: <BusinessIcon />, // Business icon for admission
    children: [{ name: 'Admission Form', route: 'admission' }],
  },
  {
    name: 'Exam',
    route: 'exam',
    icon: <EventIcon />, // Event icon for exams
    children: [
      { name: 'ExamSchedule', route: 'examSchedule' },
      { name: 'ExamResult', route: 'examresult' },
    ],
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = React.useState({
    students: false,
    teachers: false,
    subjects: false,
    syllabus: false,
    school: false,
    class: false,
    fees: false,
    admission: false,
  });

  const handleDropdownToggle = (section) => {
    setOpenDropdown((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: '#2E7D32', // Dark green background
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white' }}>
            <h5>LEARNING MANAGEMENT SYSTEM</h5>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <LogoutButton />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#388E3C', // Lighter green for the drawer
            color: 'white',
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
              <ListItemButton
                onClick={() => handleDropdownToggle(obj.name.toLowerCase())}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingY: 1.5,
                  '&:hover': { backgroundColor: '#4CAF50' }, // Hover effect with a brighter green
                }}
              >
                <ListItemIcon sx={{ minWidth: 'auto', color: 'white' }}>
                  {obj.icon} {/* Use the custom icon */}
                </ListItemIcon>
                <ListItemText
                  primary={obj.name}
                  sx={{ fontWeight: 'bold', color: 'white' }}
                />
                <ListItemIcon sx={{ minWidth: 'auto', color: 'white' }}>
                  {openDropdown[obj.name.toLowerCase()] ? (
                    <ExpandLessIcon sx={{ color: 'white' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: 'white' }} />
                  )}
                </ListItemIcon>
              </ListItemButton>

              {openDropdown[obj.name.toLowerCase()] && (
                <div>
                  {obj.children.map((child, childIndex) => (
                    <ListItem key={childIndex} disablePadding>
                      <ListItemButton
                        sx={{
                          pl: 4,
                          '&:hover': { backgroundColor: '#66BB6A' }, // Lighter green hover effect
                        }}
                        onClick={() => navigate(`/dashboard/${child.route}`)}
                      >
                        <ListItemText primary={child.name} sx={{ color: 'white' }} />
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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          ml: `${drawerWidth}px`,
        }}
      >
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
