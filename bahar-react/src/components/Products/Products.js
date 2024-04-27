import Faq from '../Faq/Faq';
import Header from '../Header/Header';
import Ref from '../References/Ref';
import './Products.css'
import cu from './images/cu.png'
import doors from './images/doors.png'
import ev from './images/ev.png'
import panel from './images/panel.png'
function Products(){
    return(
        <div className='Products-Container'>
            <Header></Header>
            <div className='Products-Title' style={{backgroundImage:`url("https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65c2c0c5cbd1bc19aede07a2_bg-square-inside-shape-decoration-white-11-accountant-x-webflow-template.svg")`}}>
                <div className='Products-Title-Content' >
                    <div>

                    </div>
                    <h1>
                        Naši proizvodi
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button>
                        Kontakt
                    </button>
                </div>
                
            </div>
            <div className='Products-Card-Wrap'>
                <div className='Products-Card'>
                    <img src={cu}>
                    </img>
                    <h1>
                        Kondenazcione jedinice
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'>
                    <img src={ev}>
                    </img>
                    <h1>
                        Isparivači
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'>
                    <img src={doors}>
                    </img>
                    <h1>
                        Termoizolaciona vrata
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'>
                    <img src={panel}>
                    </img>
                    <h1>
                        Termoizolacioni paneli
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
            <Ref></Ref>
            <Faq></Faq>
        </div>
    )
}
export default Products;