import Faq from '../Faq/Faq';
import Header from '../Header/Header';
import Ref from '../References/Ref';
import './Products.css'
import cu from './images/cu.png'
import doors from './images/doors.png'
import ev from './images/ev.png'
import panel from './images/panel.png'
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';

function Products(){
    const Products = [
        {   
            name:"Kondezacion jedinice",
            purpose:"Lorem ipsum genrator is simply nothing",
            description:"Lorem ipsum genrator is simply nothing, Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing",
            imgPath:'/assets/kondenz.png',
            pdf:'https://ibs.com.tr/wp-content/uploads/2023/06/IBS_2022_KATALOG.pdf'
        },
        {   
            name:"Isparivaci",
            purpose:"Lorem ipsum genrator is simply nothing",
            description:"Lorem ipsum genrator is simply nothing, Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing",
            imgPath:'/assets/isparivaci.png'
        },
        {   
            name:"Termoizolaciona vrata",
            purpose:"Lorem ipsum genrator is simply nothing",
            description:"Lorem ipsum genrator is simply nothing, Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing"
        },
        {   
            name:"Termoizolacioni paneli",
            purpose:"Lorem ipsum genrator is simply nothing",
            description:"Lorem ipsum genrator is simply nothing, Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothing Lorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothingLorem ipsum genrator is simply nothing",
            pdf:"/pdfs/PaneliKatalog.pdf"
        }
    ]
    const navigate = useNavigate();
    const navigateToProductDetails = (product) =>{
        navigate(`${product.name}`, {state:{product}})
    }
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
                        <Link to='/contact'>
                        Kontakt
                        </Link>
                    </button>
                </div>
                
            </div>
            <div className='Products-Card-Wrap'>
                <div className='Products-Card' onClick={()=>navigateToProductDetails(Products[0])}>
                    <img src={cu}>
                    </img>
                    <h1>
                        Kondenazcione jedinice
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'  onClick={()=>navigateToProductDetails(Products[1])}>
                    <img src={ev}>
                    </img>
                    <h1>
                        Isparivači
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'  onClick={()=>navigateToProductDetails(Products[2])}>
                    <img src={doors}>
                    </img>
                    <h1>
                        Termoizolaciona vrata
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className='Products-Card'  onClick={()=>navigateToProductDetails(Products[3])}>
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