import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header.jsx'
import Footer from'./Footer.jsx'
import Tesimonial from './Tesimonial.jsx'
import Service from './Service.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Header/>
    <App />
    <Tesimonial/>
    <Service/>
   <Footer/>
  </StrictMode>,
)
