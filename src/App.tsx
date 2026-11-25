import { lazy, Suspense } from 'react';
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
const Officials = lazy(() => import('./pages/Officials'));
const Executive = lazy(() => import('./pages/Executive'));
const FullDisclosure = lazy(() => import('./pages/FullDisclosure'));
const AnnualBudget = lazy(() => import('./pages/AnnualBudget'));
const SALN = lazy(() => import('./pages/SALN'));
const FOIReleases = lazy(() => import('./pages/FOIReleases'));
const Downloads = lazy(() => import('./pages/Downloads'));
const CityProfile = lazy(() => import('./pages/CityProfile'));
const AnnualReport = lazy(() => import('./pages/AnnualReport'));
const InfrastructureProjects = lazy(
  () => import('./pages/InfrastructureProjects')
);
const TouristSpots = lazy(() => import('./pages/TouristSpots'));
const WhereToStay = lazy(() => import('./pages/WhereToStay'));
const Tourism = lazy(() => import('./pages/Tourism'));
const DevelopmentProjects = lazy(() => import('./pages/DevelopmentProjects'));
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
                  <Suspense
                    fallback={
                      <div
                        className="flex-1 flex items-center justify-center py-24 text-sm text-gray-500"
                        role="status"
                      >
                        Loading…
                      </div>
                    }
                  >
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/services/tourism" element={<Tourism />} />
                      <Route
                        path="/services/:category"
                        element={<Services />}
                      />
                      <Route path="/services" element={<Services />} />
                      <Route
                        path="/services/:category/:documentSlug"
                        element={<Document categoryType="service" />}
                      />
                      <Route
                        path="/government/departments/executive"
                        element={<Executive />}
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
                      {/* Transparency & Government pages */}
                      <Route
                        path="/government/departments/officials"
                        element={<Officials />}
                      />
                      <Route
                        path="/government/transparency-documents/full-disclosure"
                        element={<FullDisclosure />}
                      />
                      <Route
                        path="/government/transparency-documents/annual-budget"
                        element={<AnnualBudget />}
                      />
                      <Route
                        path="/government/transparency-documents/saln"
                        element={<SALN />}
                      />
                      <Route
                        path="/government/transparency-documents/foi-releases"
                        element={<FOIReleases />}
                      />
                      <Route
                        path="/government/transparency-documents/downloads"
                        element={<Downloads />}
                      />
                      {/* Reports & Statistics pages */}
                      <Route
                        path="/government/reports-and-statistics/city-profile"
                        element={<CityProfile />}
                      />
                      <Route
                        path="/government/reports-and-statistics/annual-report"
                        element={<AnnualReport />}
                      />
                      <Route
                        path="/government/reports-and-statistics/infrastructure-projects"
                        element={<InfrastructureProjects />}
                      />

                      {/* Tourism pages */}
                      <Route
                        path="/services/tourism/explore-tourist-spots"
                        element={<TouristSpots />}
                      />
                      <Route
                        path="/services/tourism/where-to-stay"
                        element={<WhereToStay />}
                      />

                      {/* Development Projects */}
                      <Route
                        path="/development-projects"
                        element={<DevelopmentProjects />}
                      />

                      <Route
                        path="/:lang/:documentSlug"
                        element={<Document />}
                      />
                      <Route path="/:documentSlug" element={<Document />} />
                    </Routes>
                  </Suspense>
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
