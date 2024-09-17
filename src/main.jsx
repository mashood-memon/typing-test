import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ContextProvider } from './context/testModeContext.jsx'
import { ThemeProvider } from './context/themeContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
