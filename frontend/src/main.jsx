import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '32px' }}>
      <h1>GPT Camaras IP</h1>
      <p>Frontend base levantado con Vite.</p>
      <p>Backend disponible en <a href="http://localhost:8000/docs">/docs</a>.</p>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)