/* eslint-disable react-refresh/only-export-components */
import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const Error = React.lazy(() => import("./pages/error/error.jsx"));
const Index = React.lazy(() => import("./pages/index/index.jsx"));
const App = React.lazy(() => import("./App.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/index",
        element: <Index />,
      },
      {
        path: "*",
        element: <Error />,
      }
    ]
  }
]);

createRoot(document.getElementById('layout')).render(
  <StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
