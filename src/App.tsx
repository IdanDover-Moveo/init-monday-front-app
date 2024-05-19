import { RouterProvider, createHashRouter } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import Layout from './pages/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import { Routes } from './types/Routes';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createHashRouter([
  {
    path: Routes.Root,
    element: <Layout />,
    children: [
      {
        path: Routes.Root,
        element: <HomePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  useTheme();

  return <RouterProvider router={router} />;
}

export default App;
