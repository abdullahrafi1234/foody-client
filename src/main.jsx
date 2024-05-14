import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>,
)
