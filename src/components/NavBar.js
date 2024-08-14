import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon-1.svg';
import navIcon2 from '../assets/nav-icon-2.svg';
import navIcon3 from '../assets/nav-icon-3.svg';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    const onUpdateAtiveLink = (value) => {  
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src = {''} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateAtiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateAtiveLink('skills')}>Link</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateAtiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='social-icon'>
                        <div className='social-icon'>
                            <a href='#'><img src={navIcon1} alt=""/></a>
                            <a href='#'><img src={navIcon2} alt=""/></a>
                            <a href='#'><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className='vvd' onClick={()=> console.log('connect')}>
                            <span>
                                Let's Connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    );
}