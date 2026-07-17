import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Advantages = lazy(() => import('./components/Advantages'));
const Services = lazy(() => import('./components/Services'));
const TopProject = lazy(() => import('./components/TopProject'));
const Prices = lazy(() => import('./components/Prices'));
const Process = lazy(() => import('./components/Process'));
const Faq = lazy(() => import('./components/Faq'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Advantages />
          <Services />
          <TopProject />
          <Prices />
          <Process />
          <Faq />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
