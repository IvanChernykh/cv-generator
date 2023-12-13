import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';

interface ILogin {
  setLoggedIn: (payload: boolean) => void;
}

export const Login: React.FC<ILogin> = ({ setLoggedIn }) => {
  const [password, setPassword] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value === process.env.REACT_APP_LOGIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      setPassword(value);
    }
  };

  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField label="Password" value={password} onChange={onChange} />
    </Container>
  );
};
