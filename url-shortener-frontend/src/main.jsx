import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
  </StrictMode>
)
