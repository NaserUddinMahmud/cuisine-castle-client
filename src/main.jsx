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
import ErrorPage from './components/ErrorPage';
import ChefRecipes from './components/ChefRecipes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/chefrecipes/:id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({params}) => fetch(`https://assignment-10-cuisine-castle-server-naseruddinmahmud.vercel.app/chefs/${params.id}`)
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
