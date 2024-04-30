import './Cover.css'
import CoverPhoto from './images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash.jpg'
import decoration from './images/ice.png'
import { Link } from 'react-router-dom'
function Cover(){
    return (
        <div class='Cover-Container'>
            <div class='Cover-Image' style={{backgroundImage: `url('${CoverPhoto}`}}>

            </div>
            <div class='Top-Right' style={{backgroundImage: `url('${decoration}')`}}>

            </div>
            <div class='Cover-Content'>
                <div className='Cover-Content-Descirption'>
                <div class='Cover-Content-Title'>
                    <div>

                    </div>
                    <h1>
                        Rashladni uređaji, hladnjače i komore
                    </h1>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div class='Cover-Title-Description-Button-Wrap'>
                    <Link to='/products'>
                    <button class='About-us-Button'>
                        Proizvodi <span>➜</span>
                    </button>
                    </Link>
                    
                    <Link to='/contact'>
                    <button class='Contact-Button'>
                        Kontakt
                    </button>
                    </Link>
                    
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Cover;