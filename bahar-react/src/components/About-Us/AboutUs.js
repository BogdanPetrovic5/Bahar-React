import './AboutUs.css'
import Img1 from './images/About us page-bro.png'
import blueprint from './images/blueprint.png'
function About(){
    return (
        <div class='About-Us-Container'>
            <div class='About-Us-Background' style={{backgroundImage:`url(${blueprint})`}}>

                    </div>
                <div class='About-Us-Content' > 
                    
                    <div class = 'About-Us-Content-Info'>
                        <div className='About-Us-Achievements'>
                            <div className="achievements-card first">
                                <h1>
                                    100+
                                </h1>
                                <p>
                                    projekata
                                </p>
                            </div>
                            <div className="achievements-card second">
                                <h1>
                                    10+
                                </h1>
                                <p>
                                    godina iskustva
                                </p>
                            </div>
                            <div className="achievements-card third">
                                <h1>
                                    100+
                                </h1>
                                <p>
                                    uspesnih saradnji
                                </p>
                            </div>
                        </div>
                        <img src={Img1}>
                        </img>
                    </div>
                    <div class='About-Us-Content-Description'>
                        <div class='About-Us-Content-Title'>
                            <div>

                            </div>
                            <h1>
                              Nešto vise o nama!
                            </h1>
                        </div>
                        <p>
                        Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nodoaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullasint occaecat cupidatat non proident.
                        </p>
                        <button>
                            Kontakt <span>➜</span>
                        </button>
                    </div>
                </div>
        </div>
    )
}
export default About;