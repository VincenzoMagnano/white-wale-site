import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import LoginPage from './Pages/LoginPages/LoginPage.tsx';
import LandingPage from './Pages/LandingPage/LandingPage.tsx';
import SignUpPage from './Pages/SignUpPage/SignUpPage.tsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/LandingPage",
    element: <LandingPage/>
  },
  {
    path: "/SignUp",
    element: <SignUpPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
