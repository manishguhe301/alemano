import { useState, createContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      {props.children}
    </LoginContext.Provider>
  );
};
