import './Header.css';
import Logo from './images/baharlogo1.png'
import Logo2 from './images/baharlogo2.png';
import { Link, useLocation  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function Header(){
    const [isClicked, setClick] = useState(false)
    const { pathname } = useLocation();
    const logoPaths = {
        '/home': Logo,
        '/contact': Logo2,
        '/products': Logo2,
        
        
    };
    const path = window.location.pathname;
      
    let logoSrc = logoPaths[path] || logoPaths['default'];
    if(pathname.startsWith('/products/')){
        logoSrc = Logo2;
    }
    const handleMenu = () => {
        setClick(!isClicked)
    }

 

    const scrollToSection = (section) =>{
        const newSection = document.getElementById(section);

        if (newSection) {
        
            const offset = 0; 
            const offsetPosition = newSection.offsetTop - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    return(
        <div class="Header-Container">
            <div class="Header-Content">
                <div class="Header-Logo">
                    <img src={logoSrc}>
                    </img>
                </div>
                <div class="Header-Nav">
                    <div class="Nav-Left">
                        <li>
                            <Link to='/home'>Početna</Link>
                        </li>
                        <li onClick={() => scrollToSection('Faq')}>
                            Cesta pitanja
                            
                        </li>
                        <li onClick={() => scrollToSection('Ref')}>
                            Saradnje
                            
                        </li>
                        <li>
                            <Link to='/products'>Proizvodi</Link>
                            
                        </li>
                    </div>
                    <div class="Nav-Right">
                        <button>
                            <Link to='/contact'>
                            Kontakt
                            </Link>
                            
                        </button>
                    </div>
                </div>
                <div className='Phone-Menu' onClick={() => handleMenu()}>
                    <span>

                    </span>
                    <span>
                        
                    </span>
                    <span>
                        
                    </span>
                </div>

               
            </div>
            <div className={isClicked ? 'Active-Menu open' : 'Active-Menu'}>
                <p>
                   <Link to='/home'>Početna</Link>
                </p>
              
                <p  onClick={() => scrollToSection('Faq')}>
                    Cesta pitanja
                </p>
                <p>
                    <Link to='/products'>Proizvodi</Link>
                </p>
                <p  onClick={() => scrollToSection('Ref')}>
                    Saradnje
                </p>
                <Link className='Link-Button' to='/contact'>
                    <button>
                        Kontakt
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Header;