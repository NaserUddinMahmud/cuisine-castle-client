import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './components/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
