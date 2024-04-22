import './Ref.css'
import CoverPhoto from './images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import Case from './images/cover.jpg'
import Left from './images/left.png'
import Right from './images/right.png'
function Ref(){
    return(
        <div class="Ref-Container">
            <div class="Ref-Content" style={{backgroundImage: `url('${CoverPhoto}`}}>
                <div className='Ref-Content-Descirption'>
                    <div className='Ref-Content-Title'>
                        <div>

                        </div>
                        <h1>
                            Nase uspesne saradnje!
                        </h1>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                    <button >
                        Kontakt<span>➜</span>
                    </button>
                </div>

                <div className='Ref-Content-Card-Wrap'>
                 <div className='Left'>
                    <img src={Left}></img>
                 </div>
                 <div className='Right'>
                 <img src={Right}></img>
                 </div>
                    <div className='Ref-Card'>
                    
                        <div className='Ref-Card-Image'>
                            <img src={Case}/>
                            
                        </div>
                        <div className='Ref-Card-Description'>
                            <h1>
                                Lorem Ipsum is simply dummy text of the printingw and
                            </h1>
                            <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ref;