import './Ref.css'
import CoverPhoto from './images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import Case from './images/cover.jpg'
import Left from './images/left.png'
import Right from './images/right.png'
import logo from './images/ibs-logo.png'
import logo1 from './images/logo-EN.png'
function Ref(){
    return(
        <div class="Ref-Container" id='Ref'>
            <div class="Ref-Content">
            <div class='Bottom-Right'  style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65b910d5ef0c0f53bb5b1ac0_bg-square-inside-shape-decoration-white-05-accountant-x-webflow-template.svg')`}}>

                </div>
                <div className='Ref-Content-Descirption'>
                    <div className='Ref-Content-Title'>
                        <div>

                        </div>
                        <h1>
                            Uspešne saradnje!
                        </h1>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. My text of the printing and typesetting industry. 
                    </p>
                   
                    <div>
                        <button>
                            Kontakt<span>➜</span>
                        </button> 
                        <button>
                            Sve usluge
                        </button>                            
                    </div>
                    
                </div>

                <div className='Ref-Content-Card-Wrap'>
                 
                
                    <div className='Ref-Card'>
                    
                        <div className='Ref-Card-Image' style={{backgroundImage:`url(${Case})`}}>
                         
                            
                        </div>
                        <div className='Ref-Card-Description'>
                            <div>
                                <h1>
                                    Lorem Ipsum is simply dummy text of the 
                                </h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <button>
                                   Vise informacija<span>➜</span>
                                </button> 
                            </div>
                           
                        </div>
                    </div>
                    <div className='Navigation-Card'>
                        <div id="first">

                        </div>
                        <div id="second">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ref;