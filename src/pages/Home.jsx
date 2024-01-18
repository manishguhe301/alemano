import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/LoginProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress, Grid, Typography } from '@mui/material';
import Card from '../components/Card';

const Home = () => {
  const [loginData] = useContext(LoginContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loginData.name || !loginData.email || !loginData.password) {
      navigate('/');
    }
  }, [loginData.email, loginData.name, loginData.password, navigate]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://mocki.io/v1/23b35f94-dd59-4d0e-941e-ecc341046884'
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      setData(data.courses);
      setLoading(false);
    });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCourses = data?.filter(
    (course) =>
      course.course_name.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type='search'
        placeholder='Search'
        value={search}
        onChange={handleSearchChange}
        className='mt-3 ml-3 px-3 py-2 lg:w-1/3 xl:w-1/4 rounded-md border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
      />
      {loading ? (
        <div className='h-[70vh] flex items-center justify-center '>
          <CircularProgress sx={{ color: 'rgb(79 70 229)' }} />
        </div>
      ) : (
        filteredCourses && (
          <div className='p-5'>
            {filteredCourses.length > 0 ? (
              <Grid container spacing={2}>
                {filteredCourses.map((course) => (
                  <Grid item xs={12} sm={6} md={4} key={course.course_name}>
                    <Card course={course} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Typography variant='h6' color='text.secondary'>
                No results found
              </Typography>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default Home;
