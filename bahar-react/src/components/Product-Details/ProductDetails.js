import Header from "../Header/Header";
import './ProductDetails.css'
import check from './images/tick-mark.png'
function ProductDetails(){
    return(
        <div className="Products-Detail-Container">
            <Header></Header>
            <div className="Products-Detail-Content">
                <div className="Products-Detail-Content-Description">
                  <div className="Products-Detail-Content-Description-Title">
                        <div>

                        </div>
                        <h1>
                            Kondenazcione jedinice
                        </h1>
                  </div>
                  <p className="Products-Detail-Content-Description-p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <div className="Features">
                        <p><img src={check}></img> Kvalitet</p>
                        <p><img src={check}></img> Pouzdanost</p>
                        <p><img src={check}></img> Dostupnost</p>
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
            </div>
        </div>
    )
}
export default ProductDetails;