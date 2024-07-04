import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo-sin.png';
import { Navbar } from "flowbite-react";

export const NavbarI = ({ bgHeight }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > bgHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [bgHeight]);

    return (
        <header className={`fixed top-0 w-full transition duration-300 ${isScrolled ? 'bg-transparent text-black' : 'bg-transparent text-white'}`}>
            <Navbar fluid rounded className={`mx-12 ${isScrolled ? 'bg-gray-200' : 'bg-transparent'}`}>
                <Navbar.Brand >
                    <Link to="home" smooth={true} duration={500} className='cursor-pointer'>
                        <img src={logo} className={`w-24 inline-block items-center ml-2  ${isScrolled ? '' : 'rounded-lg border-x-2 border-y-2'}`}  />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>
                    <Navbar.Link>
                        <Link to="home" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>INICIO</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="about" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>NOSOTROS</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="services" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>SERVICIOS</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="testimonial" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>TESTIMONIOS</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="contact" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>CONTACTO</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="faq" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>FAQ</Link>
                    </Navbar.Link>
                    <Navbar.Link>
                        <Link to="privacity" smooth={true} duration={500} className={`cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>AVISO DE PRIVACIDAD</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};
