import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import AddIP from './Components/AddIP/AddIP.jsx';
import Home from './Components/Home/Home.jsx';
// import { StyledEngineProvider } from '@mui/material';
// import { StyledEngineProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/addip",
        element: <AddIP></AddIP>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
        <App />
    </RouterProvider>
  </StrictMode>,
)
