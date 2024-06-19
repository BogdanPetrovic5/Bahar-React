import './Feedback.css'
import CoverPh from './images/Notebook-bro.png'
function Feedback(){
    return (
        <div class='Feedback-Container' >
            <div class='Feedback-Content'>
                <div class='Feedback-Content-Description-Wrap'>
                    <div class='Feedback-Content-Description'>
                        <div class='Feedback-Content-Title'>
                            <div>

                            </div>
                            <h1>
                                Naši rezultati i iskustva govore za sebe!
                            </h1>
                        </div>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa
                        </p>
                        <button class='Contact-Button'>
                            Kontakt 
                        </button>
                    </div>
                    
                    <div class='Numbers'>
                    
                        
                        <div>
                            <h1>
                                1000<span>+</span>
                            </h1>
                            <p>
                            Klijenata
                            </p>
                            
                        </div>
                        <div>
                            <h1>
                                15<span>+</span>
                            </h1>
                            <p>
                            Godina iskustva
                            </p>
                        </div>
                        <div>
                            <h1>
                                100<span>+</span>
                                
                            </h1>
                            <p>
                            Zavrsenih projekata
                            </p>
                        </div>
                    </div>
                </div>
                <img src={CoverPh}/>
                
            </div>
        </div>
    )
}
export default Feedback;