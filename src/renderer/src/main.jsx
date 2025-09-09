import './assets/main.css'

import { StrictMode } from 'react'
import { Routes, Route, HashRouter } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginForm from './LoginForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/main' element={<App/>}/>
      </Routes>
    </StrictMode>
  </HashRouter>
)
