import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portifilo from './components/portifilo/Portifilo';
import About from  './components/about/About'
import Expericence from './components/expericence/Expericence'
import Textimonials from './components/testimonials/Textimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Expericence />
      <Portifilo />
      <Textimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
