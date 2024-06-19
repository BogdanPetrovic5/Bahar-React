import './Cover.css'
import CoverPhoto from './images/aaron-burden-IIcj-56W_T8-unsplash.jpg'
import decoration from './images/ice.png'
import { Link } from 'react-router-dom'
function Cover(){
    return (
        <div class='Cover-Container' style={{backgroundImage:`url(${CoverPhoto})`}}>
           <div className='Cover-Title'>
                <h1 className='heading'>
                    Vaša vrata ka širokom izboru
                </h1>
                <p className='sub-heading'>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                </p>
                <div className='cover-bttn-wrap'>
                    <button>
                        Kontakt <span>➜</span>
                    </button>
                    <button>
                        Usluge
                    </button>
                </div>
           </div>
        </div>
    )
}
export default Cover;