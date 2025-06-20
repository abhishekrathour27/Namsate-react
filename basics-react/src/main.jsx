import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppProvider from './components/context/AppProvider.jsx'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
)
