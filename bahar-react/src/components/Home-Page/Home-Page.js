import './Home-Page.css'
import Cover from '../Cover/Cover';
import About from '../About-Us/AboutUs'
import MyServices from '../MyServices/MyServices';
import WhyUs from '../Why-Us/WhyUs';
import Feedback from '../Feedback/Feedback';
import Faq from '../Faq/Faq';
import Contact from '../Contact/Contact';
import Ref from '../References/Ref';
import Header from '../Header/Header';

function HomePage(){
    return (
        <div className='Home-Page-Container'>
            <Header />
            <Cover></Cover>
            <About></About>
            <MyServices></MyServices>
            <WhyUs></WhyUs>
            <Ref></Ref>
            {/* <Feedback></Feedback> */}
            <Faq></Faq>
            
            
        </div>
    )
}
export default HomePage;