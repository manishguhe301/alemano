import {
  Card as MuiCard,
  CardContent,
  Typography,
  CardMedia,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Card = ({ course }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/course/${course.course_name} by ${course.instructor}`, {
      state: { course },
    });
  };

  return (
    <MuiCard
      sx={{
        minWidth: 275,
        m: 1,
        height: '100%',
        transition: 'transform .2s',
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.05)' },
      }}
      onClick={handleClick}
    >
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
          {course.instructor}
        </Typography>
        <Typography variant='body2'>{course.description}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
