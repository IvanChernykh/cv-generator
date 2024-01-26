import React from 'react';
import { ConstructorPage } from '../screens/ConstructorPage/ConstructorPage';
// import Login from '../screens/Login';

interface IApp {
  loggedIn: boolean;
}

export const App: React.FC<IApp> = ({ loggedIn }) => {
  return <ConstructorPage />;
  // return loggedIn ? <ConstructorPage /> : <Login />;
};
