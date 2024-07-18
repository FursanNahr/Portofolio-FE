import { useState, useEffect } from 'react'
import { useRef } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll('[id]') as NodeListOf<HTMLElement>;
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const toggleMenu = (e: React.MouseEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
        if (checkboxRef.current) {
            checkboxRef.current.checked = !checkboxRef.current.checked;
        }
    };

    return (
        <nav className={`fixed font-semibold text-sm z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-20 backdrop-blur-md' : ''}`}>
            <div className="flex w-full justify-between px-5 py-8 max-w-[1150px] mx-auto sm-desktop:py-5">
                <p className="flex">Ukur</p>
                <div className={`sm-desktop:fixed sm-desktop:h-screen sm-desktop:top-0 sm-desktop:bg-black sm-desktop:bg-opacity-20 sm-desktop:backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'right-0' : 'right-[-500px]'}`}>
                    <ul className="flex gap-16 sm-desktop:flex-col sm-desktop:py-28 sm-desktop:gap-12 sm-desktop:min-w-[28rem] sm-desktop:pl-14">
                        <li><a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className={`hover:text-blue-500 transition-colors duration-400 after:content-[""] after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:bg-blue-400 after:transition-all after:duration-300 relative ${activeSection === 'home' ? 'text-blue-400 after:w-[40%]' : 'after:w-0 hover:after:w-[40%]'}`}
                        >
                            Home
                        </a></li>
                        <li><a href="#work" onClick={(e) => handleNavClick(e, 'work')} className={`hover:text-blue-500 transition-colors after:transition-all after:duration-300 duration-400 after:content-[""] after:absolute after:hover:h-[3px] after:hover:w-[40%] after:bottom-[-10px] after:hover:bg-blue-400 after:left-0 relative ${activeSection === 'work' ? 'text-blue-400 after:content-[""] after:absolute after:h-[3px] after:w-[40%] after:bottom-[-10px] after:bg-blue-400 after:left-0' : 'after:w-0'}`}>Work</a></li>
                        <li><a href="#info" onClick={(e) => handleNavClick(e, 'info')} className={activeSection === 'info' ? 'text-blue-400' : ''}>Info</a></li>
                        <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className={activeSection === 'services' ? 'text-blue-400' : ''}>Services</a></li>
                        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={activeSection === 'contact' ? 'text-blue-400' : ''}>Contact</a></li>
                    </ul>
                </div>
            </div>
            <label className="btn btn-circle swap swap-rotate absolute right-2 top-2 bg-transparent border-none min-sm-desktop:hidden" onClick={toggleMenu}>
                <input type="checkbox" ref={checkboxRef} />

                <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512">
                    <polygon
                        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
            </label>
        </nav>
    );
};

export default Navbar;