
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
function App() {
  return (
    <div class="App-Container">
      <Header></Header>
      <Cover></Cover>
      <About></About>
      <MyServices></MyServices>
      <WhyUs></WhyUs>
      <Feedback></Feedback>
      <Faq></Faq>
      
      <Ref></Ref>
    </div>
  );
}

export default App;
