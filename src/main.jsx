import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Invoiceeditor from './Invoiceeditor'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Invoiceeditor/>
  </StrictMode>,
)
