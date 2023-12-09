import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConstructorPage } from './components/screens/ConstructorPage/ConstructorPage';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createHashRouter([
  {
    path: '/*',
    element: (
      <Provider store={store}>
        <ConstructorPage />
      </Provider>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
