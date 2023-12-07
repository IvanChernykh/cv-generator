import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConstructorPage } from './components/screens/ConstructorPage/ConstructorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ConstructorPage />
  </React.StrictMode>,
);
