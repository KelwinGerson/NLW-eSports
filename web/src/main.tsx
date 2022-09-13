import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

{/* Este arquivo pega o html + app e renderiza e roda  */}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* APP é um componente (letra maiúscula) */}
    <App />
  </React.StrictMode>
)
