import '../App.css';
import Navbar from './Navbar';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home=()=> {
  return (
    <div className="Home">
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <Aboutus/>
    <Services/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Home;