import './Header.css';
import Logo from './images/baharlogo1.png'
import Logo2 from './images/baharlogo2.png';
import { Link, useLocation  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
function Header(){
    const [isClicked, setClick] = useState(false)
    const logoPaths = {
        '/home': Logo,
        '/contact': Logo2,
        '/products': Logo2,
        '/products/:id':Logo2
        
    };
    const path = window.location.pathname;
      

    const logoSrc = logoPaths[path] || logoPaths['default'];
    const handleMenu = () => {
        setClick(!isClicked)
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
                        <li>
                            <Link>Cesta pitanja</Link>
                            
                        </li>
                        <li>
                            <Link>Saradnje</Link>
                            
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
              
                <p>
                    Cesta pitanja
                </p>
                <p>
                    <Link to='/products'>Proizvodi</Link>
                </p>
                <p>
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