import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Pages/Layout/Main.jsx';
import Login from './Pages/Login&Register/Login/Login.jsx';
import SecurityLayout from './Pages/Layout/SecurityLayout.jsx';
import Register from './Pages/Login&Register/Register/Register.jsx';

const router = createBrowserRouter([
  // DashboardRoute
  {
    path: '/',
    element: <Main></Main>,
    children: [
      
    ]
  },
  // SecurityRoute
  {
    path: '/',
    element: <SecurityLayout></SecurityLayout>,
    children: [
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
