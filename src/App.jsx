import { useState } from 'react'
import './App.css'
import { AboutNS } from './components/AboutNS'
import { Home } from './components/Home'
import { NavbarI } from './components/NavbarI'
import { ServicesNS } from './components/ServicesNS'
import { ContactNS } from './components/ContactNS'
import { FooterNS } from './components/FooterNS'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../src/assets/img/logo.png';
import { FaqNS } from './components/FaqNS'

function App() {
  const [bgHeight, setBgHeight] = useState(0);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l ">
        <NavbarI bgHeight={bgHeight} />
      </div>
      <div id="home">
        <Home setBgHeight={setBgHeight} />
      </div>
      <div id="about">
        <AboutNS />
      </div>
      <div id="services">
        <ServicesNS />
      </div>
      <div id="testimonial">
        {/* <TestimonialNS /> */}
      </div>
      <div id="contact">
        <ContactNS />
      </div>
      <div id="faq">
        <FaqNS />
      </div>
      <div id="">
        <FooterNS />
      </div>
      <FloatingWhatsApp phoneNumber='5542733766' 
                        accountName='Ventas' 
                        statusMessage='Nuestro horario de atención es de 8 a.m. a 6 p.m.' 
                        chatMessage='Hola, ¿en qué te podemos ayudar?'
                        avatar={logo}
                        placeholder='Escribe un mensaje.'
                        notification='true' />
    </>
  )
}

export default App
