import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import TopProject from './components/TopProject';
import Prices from './components/Prices';
import Process from './components/Process';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Services />
        <TopProject />
        <Prices />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
