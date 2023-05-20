import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './scss/app.scss';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import ContactMe from './pages/ContactMe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact-me',
        element: <ContactMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
