import { NuqsAdapter } from 'nuqs/adapters/react';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ui/ScrollToTop';
import Services from './pages/Services';
import Document from './pages/Document';
import Government from './pages/Government';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider>
        <HelmetProvider>
          <Router>
            <NuqsAdapter>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <ScrollToTop />
                <div className="flex-1 flex flex-col pt-[116px]">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/:category" element={<Services />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                      path="/services/:category/:documentSlug"
                      element={<Document categoryType="service" />}
                    />
                    <Route
                      path="/government/:category"
                      element={<Government />}
                    />
                    <Route path="/government" element={<Government />} />
                    <Route
                      path="/government/:category/:documentSlug"
                      element={<Document categoryType="government" />}
                    />
                    <Route path="/:lang/:documentSlug" element={<Document />} />
                    <Route path="/:documentSlug" element={<Document />} />
                  </Routes>
                </div>
                <Footer />
              </div>
            </NuqsAdapter>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default App;
