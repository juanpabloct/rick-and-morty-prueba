// * Import utils
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// * Import component pages
const Home = lazy(() => import('./pages/Home/Home'));
const Character = lazy(() => import('./pages/[Character]/Character'));
// * Import general styles
import './App.css';
import connection from './connection';
import { ApolloProvider } from '@apollo/client';
import { ContextStarred } from './context/ContextStarred';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense>
          <Home />
        </Suspense>
      )
    },
    {
      path: '/:characterID',
      element: (
        <Suspense>
          <Character />
        </Suspense>
      )
    }
  ]);
  return (
    <ApolloProvider client={connection}>
      <ContextStarred>
        <RouterProvider router={router} />
      </ContextStarred>
    </ApolloProvider>
  );
};

export default Routes;
