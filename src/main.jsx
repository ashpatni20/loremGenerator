import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import LoremGenerator from './components/LoremGenerator/LoremGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoremGenerator></LoremGenerator>
  </React.StrictMode>,
)
