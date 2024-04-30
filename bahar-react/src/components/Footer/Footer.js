import './Footer.css'
import React, { useEffect } from "react"
import logo from './images/baharlogo1.png'
import { useLocation, Link } from 'react-router-dom';
function Footer(){
    
    return(
        <div className='Footer-Container'>
            <div className='Footer-Content'>
               
                <div className='Footer-Contact'>
                    <div className='Top-Right' style={{backgroundImage:`url(' https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65b828cad90cf0c2aeaed2a3_bg-square-inside-shape-decoration-green-01-accountant-x-webflow-template.svg')`}}>
                
                    </div>
                    <div className='Bottom-Left' style={{backgroundImage:`url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65b828c896566ee73a8a7283_bg-square-inside-shape-decoration-green-02-accountant-x-webflow-template.svg')`}}>

                    </div>
                    <h1>
                        Pravo mesto za kupovinu! Kontaktiraj nas!
                    </h1>
                    <Link to='/contact'>
                    <button>
                        Kontakt! <span>➜</span>
                    </button>
                    </Link>
                    
                </div>
                <div className='Footer-Nav'>
                    <div className='Footer-Logo'>
                        <img src={logo}>
                        </img>
                        <p>Copyright &copy; Sva prava zadrzana</p>
                        <p>Bahar- Rashladni sistemi</p>
                        <p>Radno vreme: 08:00 - 15:00 </p>
                    </div>
                    <div className='Footer-Nav'>
                        <div className='Footer-Nav-List'>
                            <h1>Korisni linkovi</h1>
                            <li>
                                Početna
                            </li>

                            <li>
                                O nama
                            </li>

                            <li>
                                Proizvodi
                            </li>

                            <li>
                                Kontakt
                            </li>
                        </div>
                        <div className='Footer-Nav-List'>
                            <h1>Proizvodi</h1>
                            <li>
                                Kondezacione Jedinice
                            </li>

                            <li>
                                Isparivaci
                            </li>

                            <li>
                                Termoizolaciona vrata
                            </li>

                            <li>
                                Paneli
                            </li>
                        </div>
                        <div className='Footer-Nav-List'>
                            <h1>Katalozi</h1>
                            <li>
                                Kondezacione Jedinice i isparivači
                            </li>

                            <li>
                                Termoizolaciona vrata
                            </li>

                            <li>
                                Paneli
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;