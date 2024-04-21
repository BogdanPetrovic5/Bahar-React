import './AboutUs.css'
import Img1 from './images/rashladni-sistemi-1.jpg'
function About(){
    return (
        <div class='About-Us-Container'>
                <div class='About-Us-Content'>
                    <div class = 'About-Us-Content-Image'>
                        <img src={Img1}>
                        </img>
                    </div>
                    <div class='About-Us-Content-Description'>
                        <div class='About-Us-Content-Title'>
                            <div>

                            </div>
                            <h1>
                            Contrary to popular belief, Lorem 
                            </h1>
                        </div>
                        <p>
                        Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nodoaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullasint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
        </div>
    )
}
export default About;