import { AppContextProvider } from './contexts'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './App.css'

function App() {
  
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export {App}
