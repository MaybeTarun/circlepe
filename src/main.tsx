import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import Progress from './components/Progress';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Progress/>
    <App />
  </StrictMode>,
)
