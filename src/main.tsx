import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BlogProvider } from '@/blog/BlogProvider'
import { HousesProvider } from '@/houses/HousesProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <BlogProvider>
          <HousesProvider>
            <App />
          </HousesProvider>
        </BlogProvider>
      </BrowserRouter>
  </StrictMode>,
)
