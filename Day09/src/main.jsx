import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ZodForm from './ZodForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ZodForm />
  </StrictMode>,
)
