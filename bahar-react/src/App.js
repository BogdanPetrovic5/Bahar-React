
import './App.css';
import Header from './components/Header/Header';
import Cover from './components/Cover/Cover';
import About from './components/About-Us/AboutUs'
import MyServices from './components/MyServices/MyServices';
import WhyUs from './components/Why-Us/WhyUs';
import Feedback from './components/Feedback/Feedback';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Ref from './components/References/Ref';
import Footer from './components/Footer/Footer';
import HomePage from './components/Home-Page/Home-Page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  Navigate,
} from "react-router-dom";
import { Redirect } from 'react-router';
import Products from './components/Products/Products';
import ProductDetails from './components/Product-Details/ProductDetails';
function App() {

  return (
    <Router>
      <div className='Container'>
        
          <Routes>
            <Route exact path='/home' element={<HomePage/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
            <Route exact path='/products' element={<Products></Products>}></Route>
            <Route exact path='/products/:id' element={<ProductDetails></ProductDetails>}></Route>
            <Route path="/" element={<Navigate replace to="/products/:id" />} />
          </Routes>
        <Footer />
    </div>
   
  </Router>
  );
}

export default App;
