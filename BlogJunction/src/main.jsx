import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {store} from './app/store.js'
import { Provider,useSelector } from 'react-redux'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
