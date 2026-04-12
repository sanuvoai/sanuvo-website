import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Metrics from './components/Metrics';
import Calculator from './components/Calculator';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Solutions />
        <Metrics />
        <Calculator />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
