import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Paper,
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  List,
  ListItem,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { EnrolledCoursesContext } from '../context/EnrolledCoursesProvider';
import { useContext } from 'react';

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { course } = location.state;
  const { addCourse, removeCourse, enrolledCourses } = useContext(
    EnrolledCoursesContext
  );

  const isEnrolled = enrolledCourses.some(
    (enrolledCourse) =>
      enrolledCourse.course_name === course.course_name &&
      enrolledCourse.instructor === course.instructor
  );

  const handleButtonClick = () => {
    if (isEnrolled) {
      removeCourse(course.course_name, course.instructor);
    } else {
      addCourse(course);
    }
  };

  return (
    <Container className='p-3'>
      <Button
        variant='contained'
        onClick={() => navigate('/home')}
        sx={{ backgroundColor: 'rgb(79 70 229)' }}
      >
        Home
      </Button>
      <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img
              src={course.thumbnail}
              alt={course.course_name}
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant='h4' component='div' gutterBottom>
              {course.course_name}
            </Typography>
            <Typography variant='h6' color='text.secondary' gutterBottom>
              Instructor: {course.instructor}
            </Typography>
            <Typography variant='body1' gutterBottom>
              {course.description}
            </Typography>
            <List>
              <ListItem>Enrollment Status: {course.enrollment_status}</ListItem>
              <Divider />
              <ListItem>Duration: {course.duration}</ListItem>
              <Divider />
              <ListItem>Schedule: {course.schedule}</ListItem>
              <Divider />
              <ListItem>Location: {course.location}</ListItem>
              <Divider />
              <ListItem>Prerequisites: {course.prerequisites}</ListItem>
            </List>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>Syllabus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {course.syllabus.map((week, index) => (
                    <ListItem key={index}>{week}</ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ mt: 2, marginBottom:'16px' }}>
        <Button
          variant='contained'
          color='primary'
          sx={{ backgroundColor: 'rgb(79 70 229)', float: 'right' , marginBottom:'16px'}}
          onClick={handleButtonClick}
        >
          {isEnrolled ? 'Unenroll from this course' : 'Enroll to this course'}
        </Button>
      </Box>
    </Container>
  );
};

export default DetailsPage;
