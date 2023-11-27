import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { LandingPage } from '../pages/LandingPage';
import { BlogPage } from '../pages/BlogPage';
import { ContactPage } from '../pages/ContactPage';
import { RecordingsPage } from '../pages/RecordingsPage';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/recordings',
        element: <RecordingsPage />,
      },
    ],
  },
]);
