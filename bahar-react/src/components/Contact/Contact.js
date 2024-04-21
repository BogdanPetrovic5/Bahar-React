import './Contact.css'
function Contact(){
    return (
        <div className='Contact-Container'>
            <div className='Contact-Content'>
                     <div class='Top-Left' style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65c24246330e90b5098b2ba1_bg-square-inside-shape-decoration-white-09-accountant-x-webflow-template.svg')`}}>
                    
                    </div>
                <div className='Top-Right' style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65c254cdd0f5bacf7d8bbb37_bg-square-inside-shape-decoration-white-10-accountant-x-webflow-template.svg')`}}>

                </div>
                <div className='Contact-Content-Form'>
                <div className='Contact-Description'>
                    <div className='Contact-Title'>
                        <div>

                        </div>
                        <h1>
                            Kontaktiraj nas!
                        </h1>
                    </div>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
                <div className='Contact-Form-Wrap'>
                    <div className='Contact-Name input-divs'>
                        <div className='Name'>
                            <span>
                                Ime
                            </span>
                            <input/>
                        </div>
                        <div className='Last-name'>
                        <span>
                                Prezime
                            </span>
                            <input/>
                        </div>
                    </div>
                    <div className='Contact-Info input-divs'>
                        <div className='Email'>
                        <span>
                                Email
                            </span>
                            <input/>
                        </div>
                        <div className='Number'>
                        <span>
                                Broj Telefona
                            </span>
                            <input/>
                        </div>
                    </div>
                    <div className='Contact-Message input-divs'>
                        <div className='Message'>
                        <span>
                                Poruka
                            </span>
                            <textarea></textarea>
                        </div>
                    </div>
                    <button >
                        Posalji poruku
                    </button>
                </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Contact;