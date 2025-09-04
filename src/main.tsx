import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// createRoot - корень react приложения откуда начнет строиться DOM
// render - встроенный ренедер jsx
// рендер в root