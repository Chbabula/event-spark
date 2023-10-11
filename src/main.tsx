import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AlertContextProvider from './context/ContextAlert.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <AlertContextProvider>
      <App />
    </AlertContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)