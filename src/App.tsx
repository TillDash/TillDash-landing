import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import ForBusiness from './components/sections/ForBusiness';
// import Testimonials from './components/sections/Testimonials';
// import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <ForBusiness />
          {/* <Testimonials /> */}
          {/* <Pricing /> */}
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
