import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Fullstack from './pages/Fullstack';
import Ecommerce from './pages/Ecommerce';
import WebDeveloperKyiv from './pages/WebDeveloperKyiv';
import BlogIndex from './pages/BlogIndex';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/fullstack" element={<Fullstack />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/web-developer-kyiv" element={<WebDeveloperKyiv />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
