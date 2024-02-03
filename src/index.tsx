import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import store from './redux/createStore';
import App from './components/app';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createHashRouter([
  {
    path: '/*',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
  },
]);

root.render(<RouterProvider router={router} />);
