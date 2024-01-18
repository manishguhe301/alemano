import { useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginProvider';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { EnrolledCoursesContext } from '../context/EnrolledCoursesProvider';
import DashBoardCard from '../components/DashBoardCard';

const DashBoard = () => {
  const [loginData] = useContext(LoginContext);
  const navigate = useNavigate();
  const { enrolledCourses } = useContext(EnrolledCoursesContext);

  useEffect(() => {
    if (!loginData.name || !loginData.email || !loginData.password) {
      navigate('/');
    }
  }, [loginData.email, loginData.name, loginData.password, navigate]);

  return (
    <div className='p-5'>
      <Button
        variant='contained'
        onClick={() => navigate('/home')}
        sx={{ backgroundColor: 'rgb(79 70 229)', marginBottom: '16px' }}
      >
        Go To Home
      </Button>
      {enrolledCourses.length > 0 ? (
        <Grid container spacing={2}>
          {enrolledCourses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.course_name}>
              <DashBoardCard key={course.course_name} course={course} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant='h6'
          color='text.secondary'
          gutterBottom
          sx={{ mt: 5 }}
        >
          You are not enrolled in any courses.
        </Typography>
      )}
    </div>
  );
};

export default DashBoard;
