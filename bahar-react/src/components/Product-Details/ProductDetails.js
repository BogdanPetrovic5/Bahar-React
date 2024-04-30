import Header from "../Header/Header";
import React, { useState, useEffect } from 'react';
import './ProductDetails.css'
import check from './images/tick-mark.png'
import kondenz from './images/kondez.jpg'

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import pdf from './images/pdf.png'
function ProductDetails(){
    const location = useLocation();
    const { product } = location.state;

    return(       

        <div className="Products-Detail-Container">
            <Header></Header>
            <div className="Products-Detail-Content">
             
                    <div className="Products-Detail-Content-Description">
                        <div className="Products-Detail-Content-Description-Title">
                                <div>

                                </div>
                                <h1>
                                    {product.name}
                                </h1>
                        </div>
                        <p className="Products-Detail-Content-Description-p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="Features">
                                <p><img src={check}></img> Kvalitet</p>
                                <p><img src={check}></img> Pouzdanost</p>
                                <p><img src={pdf}></img> <a href={product.pdf} target="_blank" rel="noopener noreferrer"> Katalog</a></p>
                        </div>
                    </div>
                    <div className="Details-Contact-Form-Wrap">
                        <div className="Details-Contact-Form">
                            <div className="Details-Contact-Form-Description">
                                <h1>Za dostupnost i kolicinu kontakt! </h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="Input-Holders">
                                <span>Ime i prezime</span>
                                <input type="text"></input>
                            </div>
                            <div className="Input-Holders">
                                <span>Email</span>
                                <input type="email"></input>
                            </div>
                            <div className="Input-Holders">
                                <span>Broj telefona</span>
                                <input type="text"></input>
                            </div>
                        </div>
                    </div>
                
                <div className="Product-Details-About">
                        <div className="Product-Details-About-Description">
                            <h1>
                                Više o proizvodu
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <img src={kondenz}>
                            </img>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                        </div>
                </div>  
            </div>
            
        </div>
    )
}
export default ProductDetails;