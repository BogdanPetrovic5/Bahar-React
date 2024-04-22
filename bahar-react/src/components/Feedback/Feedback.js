import './Feedback.css'
import CoverPh from './images/feedback.svg'
function Feedback(){
    return (
        <div class='Feedback-Container' >
            <div class='Feedback-Content' style={{backgroundImage: `url('${CoverPh}')`}}>
                <div class='Feedback-Content-Description'>
                    <div class='Feedback-Content-Title'>
                        <div>

                        </div>
                        <h1>
                            Moji rezultati i iskustva govore za sebe!
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
                            10<span>+</span>
                            
                        </h1>
                        <p>
                        Godina sef komercijale
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feedback;