import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'
import GitHubInfoLoader from './Components/Github/GitHubInfoLoader.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'user/:userid',
        element: <User />,
      },
      { 
        loader : GitHubInfoLoader,
        path: 'github',
        element: <Github />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
