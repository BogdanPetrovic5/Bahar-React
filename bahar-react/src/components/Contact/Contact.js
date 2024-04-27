import Header from '../Header/Header';
import './Contact.css'
import Cover from './images/globe.png'
import Email from './images/email.png'
import Phone from './images/telephone.png'
import Location from './images/location.png'
import Faq from '../Faq/Faq';
function Contact(){
    return(
        <div class='Contact-Container'>
            <Header></Header>
            <div class='Contact-Content' >
                <div className='Contact-Cover' style={{backgroundImage:`url('${Cover}')`}}>

                </div>
                <div class='Contact-Content-Description'>
                    <div class="Contact-Content-Title">
                        <div></div>
                        <h1 > 
                            Kontaktiraj nas!
                        </h1>
                    </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown prin
                    </p>
                </div>
                <div className='Contact-Form-Wrap'>
                    <div className='Contact-Form'>
                        <div className='Contact-FullName input-holders'>
                           <div>
                                <span>Ime</span>
                                <input></input>
                           </div>
                               
                           <div>
                                <span>Prezime</span>
                                <input></input>
                            </div>
                        </div>
                        <div className='Contact-Email input-holders'>
                            <div>
                                 <span>Email</span>
                                <input></input>
                            </div>
                             
                            <div>
                                <span>Broj Telefona</span>
                                <input></input>
                             </div>
                        </div>
                        <div className='Message input-holders'>
                            <div>
                                <span>Poruka</span>
                                <textarea>
                                </textarea>
                             </div>
                             <button>
                                Posalji poruku!
                            </button>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className='Contact-More-Info'>
                <div className='Contact-More-Info-Title'>
                    <div>

                    </div>
                    <h1>
                        Gde nas možete naći?
                    </h1>
                </div>
                <div className='Contact-More-Info-Card'>
                    <div className='Contact-More-Info-Image'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.655869743086!2d20.945547811858077!3d44.02850542795577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47572731b2fab92d%3A0xd33371a689814efd!2sBAHAR%20Rashladni%20Sistemi!5e0!3m2!1sen!2srs!4v1713969486934!5m2!1sen!2srs"
                            width="600"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className='Contact-More-Info-Card-Wrap'>
                       <h1>
                        Kragujevac, Serbia
                       </h1>
                       <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. L
                       </p>
                       <div className='Card-Info'>
                        <p>
                            <img src={Email}>
                            </img>
                            info@example.com
                        </p>
                        <p>
                            <img src={Phone}>
                            </img>
                            info@example.com
                        </p>
                        <p>
                            <img src={Location}>
                            </img>
                            info@example.com
                        </p>
                       </div>
                    </div>
                    
                </div>
            </div>
            <Faq></Faq>
        </div>
    )
    
}
export default Contact;