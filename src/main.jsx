import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Footer from'./Footer.jsx'
import Tesimonial from './Tesimonial.jsx'
import Service from './Service.jsx'
import Why from './Why.jsx'
import Registered from './Registered.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
    <App />
    <Tesimonial/>
    <Service/>
    <Why/>
    <Registered/>
   <Footer/>
  </StrictMode>,
)
