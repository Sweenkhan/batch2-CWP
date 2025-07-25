import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
// import MeeshoHeader from './Home'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MeeshoHeader />
  </StrictMode>,
)
