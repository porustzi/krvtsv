import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import TopProject from './components/TopProject';
import Prices from './components/Prices';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Advantages />
        <TopProject />
        <Prices />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
