import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex-grow'>
      <AppBar position='static' sx={{ backgroundColor: 'rgb(79 70 229)' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' className='mr-3'>
            CourseHub
          </Typography>
          <div
            className='flex items-center cursor-pointer'
            onClick={() => navigate('/dashboard')}
          >
            <Button
              variant='contained'
              sx={{ backgroundColor: ' rgb(165 180 252)' }}
            >
              Dashboard
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
