import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import LoginPage from './Pages/LoginPages/LoginPage.tsx';
import LandingPage from './Pages/LandingPage/LandingPage.tsx';
import SignUpPage from './Pages/SignUpPage/SignUpPage.tsx';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage.tsx';
import { MenuProvider } from './Provider/MenuContext.tsx';
import AppLayout from './Pages/AppLayout/AppLayout.tsx';
import Prenota from './Pages/Prenota/Prenota.tsx';
import { CalendarProvider } from './Provider/useCalendar.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/LandingPage",
        element: <LandingPage/>
      },
      {
        path: "/AboutUs",
        element: <AboutUsPage/>
      },
      {
        path: "/Prenota",
        element: <Prenota/>
      }
    ]
  },

  {
    path: "/LoginPage",
    element: <LoginPage />
  },

  {
    path: "/SignUp",
    element: <SignUpPage />
  },

])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <CalendarProvider>
      <RouterProvider router={router} />
      </CalendarProvider>
    </MenuProvider>
  </React.StrictMode>,
)
