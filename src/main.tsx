import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TipProvider from '@/providers/TipProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TipProvider>
      <App />
    </TipProvider>
  </StrictMode>,
)
