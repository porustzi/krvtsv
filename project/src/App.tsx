import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Fullstack from './pages/Fullstack';
import Ecommerce from './pages/Ecommerce';
import WebDeveloperKyiv from './pages/WebDeveloperKyiv';
import BlogReactVite from './pages/BlogReactVite';
import BlogIndex from './pages/BlogIndex';
import BlogLandingVsWebsite from './pages/BlogLandingVsWebsite';
import BlogNoLeads from './pages/BlogNoLeads';
import BlogSiteFromScratch from './pages/BlogSiteFromScratch';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/fullstack" element={<Fullstack />} />
          <Route path="/services/ecommerce" element={<Ecommerce />} />
          <Route path="/services/web-developer-kyiv" element={<WebDeveloperKyiv />} />
          <Route path="/blog/react-vite" element={<BlogReactVite />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/landing-vs-website" element={<BlogLandingVsWebsite />} />
          <Route path="/blog/no-leads-from-site" element={<BlogNoLeads />} />
          <Route path="/blog/site-from-scratch-checklist" element={<BlogSiteFromScratch />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
