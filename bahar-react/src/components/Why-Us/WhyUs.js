import './WhyUs.css'
import WhyUsImage from './images/christopher-burns-8KfCR12oeUM-unsplash.jpg'
import People from './images/people.png'
import Price from './images/best-price.png'
import Products from './images/order.png'
import support from './images/ActiveSupport-bro.png'
import stock from './images/Checking boxes-bro.png'
import price from './images/Money income-bro.png'
function WhyUs(){
    return (
        <div class="Why-Us-Container">
            <div class="Why-Us-Content">
                
                <div class="Why-Us-Content-Title">
                    <div>

                    </div>
                    <h1>
                        Zašto izabrati nas?
                    </h1>
                </div>
                <div className='Why-Us-Cards-Wrap'>
                    <div class='First-Card'>
                        <div class='Card-Description'>
                            <img src={support}/>
                            <h1>
                                24/7 podrska
                            </h1>
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                            </p>
                        </div>
                    </div>
                    <div class='Second-Card'>
                        <div class='Card-Description'>
                            <img src={stock}/>
                            <h1>
                                Sirok asortiman
                            </h1>
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                            </p>
                        </div>
                    </div>
                    <div class='Third-Card'>
                        <div class='Card-Description'>
                            <img src={price}/>
                            <h1>
                                Povoljne cene
                            </h1>
                            <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
export default WhyUs