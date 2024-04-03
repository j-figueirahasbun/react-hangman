import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode> //this renders/creates the component app twice to check for bugs
    <App />
  //</React.StrictMode>,
)
