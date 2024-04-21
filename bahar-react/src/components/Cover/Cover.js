import './Cover.css'
import CoverPhoto from './images/65b90c714b2a8294f2fe0ed8_expert-accounting-accountant.jpg'
function Cover(){
    return (
        <div class='Cover-Container'>
            <div class='Cover-Image' style={{backgroundImage: `url('${CoverPhoto}`}}>

            </div>
            <div class='Top-Right' style={{backgroundImage: `url('https://assets-global.website-files.com/65b6ddb62be86fb56b8c3873/65c254cdd0f5bacf7d8bbb37_bg-square-inside-shape-decoration-white-10-accountant-x-webflow-template.svg')`}}>

            </div>
            <div class='Cover-Content'>

                <div class='Cover-Content-Title'>
                    <div>

                    </div>
                    <h1>
                        Rashladni uređaji, hladnjače i komore
                    </h1>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <div class='Cover-Title-Description-Button-Wrap'>
                    <button class='About-us-Button'>
                        O Nama <span>➜</span>
                    </button>
                    <button class='Contact-Button'>
                        Kontakt
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Cover;