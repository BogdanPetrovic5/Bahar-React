import './WhyUs.css'
import WhyUsImage from './images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
import People from './images/people.png'
import Price from './images/best-price.png'
import Products from './images/order.png'
function WhyUs(){
    return (
        <div class="Why-Us-Container">
            <div class="Why-Us-Content">
                <div class="Why-Us-Content-Card-Wrap">
                    <div class='Why-Us-Content-Card'>
                        <div class='Why-Us-Content-Card-Content'>
                            <img src={People}/>
                            <h1>
                                24/7 Podrška
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and type
                            </p>
                        </div>
                    </div>
                    <div class='Why-Us-Content-Card'>
                    <div class='Why-Us-Content-Card-Content'>
                            <img src={Products}/>
                            <h1>
                                Širok asortiman
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and ty
                            </p>
                        </div>
                    </div>
                    <div class='Why-Us-Content-Card'>
                        
                        <div class='Why-Us-Content-Card-Content'>
                            <img src={Price}/>
                            <h1>
                                Povoljne cene
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typeset
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Why-Us-Content-Title">
                    <div>

                    </div>
                    <h1>
                        Zasto izabrati nas?
                    </h1>
                </div>
                <div class="Why-Us-Content-Image">
                    <img src={WhyUsImage}/>
                </div>
            </div>
        </div>
    
    )
}
export default WhyUs