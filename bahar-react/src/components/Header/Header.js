import './Header.css';
import Logo from './images/baharlogo1.png'
function Header(){
    return(
        <div class="Header-Container">
            <div class="Header-Content">
                <div class="Header-Logo">
                    <img src={Logo}>
                    </img>
                </div>
                <div class="Header-Nav">
                    <div class="Nav-Left">
                        <li>
                            Početna
                        </li>
                        <li>
                            O Nama
                        </li>
                        
                    </div>
                    <div class="Nav-Right">
                        <button>
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;