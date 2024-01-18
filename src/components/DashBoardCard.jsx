import {
  Button,
  Card as MuiCard,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from '@mui/material';
import { EnrolledCoursesContext } from '../context/EnrolledCoursesProvider';
import { useContext } from 'react';

const DashBoardCard = ({ course }) => {
  const { toggleCourseCompletion } = useContext(EnrolledCoursesContext);

  return (
    <MuiCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 275,
        m: 1,
        height: '100%',
        transition: 'transform .2s',
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <Box>
        <CardMedia
          component='img'
          image={course.thumbnail}
          alt={course.course_name}
          sx={{ height: '250px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography
            variant='h5'
            component='div'
            className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'
          >
            {course.course_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Instructor: {course.instructor}
          </Typography>
          <Typography variant='body2'>{course.description}</Typography>
        </CardContent>
      </Box>
      <Box sx={{ p: 1 }}>
        <Button
          fullWidth
          variant='contained'
          sx={{ backgroundColor: 'rgb(79 70 229)' }}
          onClick={() =>
            toggleCourseCompletion(course.course_name, course.instructor)
          }
        >
          {course.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
        </Button>
      </Box>
    </MuiCard>
  );
};

export default DashBoardCard;
