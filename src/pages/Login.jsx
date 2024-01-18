import { useContext, useState } from 'react';
import { LoginContext } from '../context/LoginProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    navigate('/home');
  };

  const isDisabled = !loginData.name || !loginData.email || !loginData.password;

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <input type='hidden' name='remember' value='true' />
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='name' className='sr-only'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                required
                className='appearance-none mb-2 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Name'
                onChange={(e) =>
                  setLoginData({ ...loginData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none mb-2 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                autoComplete='current-password'
                required
                className='appearance-none mb-2 rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <input
                type='checkbox'
                checked={showPassword}
                className='mr-1'
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show password
            </div>
          </div>

          <div>
            <button
              type='submit'
              disabled={isDisabled}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isDisabled
                  ? 'bg-indigo-300'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
