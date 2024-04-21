import './MyServices.css'
import CondensingUints from './images/fan.png'
import Panels from './images/panels.png'
import Doors from './images/safe.png'
function MyServices(){
    return(
        <div class='My-Services-Container'>
            <div class='My-Services-Content'>
                <div class='Top-Left' style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65c24246330e90b5098b2ba1_bg-square-inside-shape-decoration-white-09-accountant-x-webflow-template.svg')`}}>
                    
                </div>
                <div class='Bottom-Right'  style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65b910d5ef0c0f53bb5b1ac0_bg-square-inside-shape-decoration-white-05-accountant-x-webflow-template.svg')`}}>

                </div>
                <div class='My-Services-Title'>
                    <div>

                    </div>
                    <h1>
                        Sve sto vam treba na jednom mestu!
                    </h1>
                </div>
                <div class='My-Services-Card-Wrap'>
                    <div class='My-Services-Card'>
                        <div class='My-Services-Card-Content'>
                            <img src={CondensingUints}/>
                            <div class='My-Services-Card-Content-Description'>
                                <h1>
                                    Kondenazcione jedinice i isparivaci
                                </h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                    <div class='My-Services-Card'>
                        <div class='My-Services-Card-Content'>
                            <img src={Doors}/>
                            <div class='My-Services-Card-Content-Description'>
                                <h1>
                                    Termoizolaciona vrata
                                </h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div class='My-Services-Card'>
                        <div class='My-Services-Card-Content'>
                            <img src={Panels}/>
                            <div class='My-Services-Card-Content-Description'>
                                <h1>
                                    Krovni i zidni paneli
                                </h1>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class='My-Services-Buttons-Wrap'>
                        <button class='About-us-Button'>
                            O nama
                        </button>
                        <button class='Contact-Button'>
                            Kontakt
                        </button>
                </div>
            </div>
        </div>
    )
}
export default MyServices;