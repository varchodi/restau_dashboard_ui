import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Dashboard from './pages/Dashboard/index.tsx';
import Layout from './components/Dashboard/layout.tsx';

//routes settings
const routes = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: '/dashboard',
    element: (
      <Layout>
        <Dashboard/>
      </Layout>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
