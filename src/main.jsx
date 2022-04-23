import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './routes/AppRouter'
import 'normalize.css'
import 'animate.css'
import 'boxicons'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRouter />
)
