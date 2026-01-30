// Monte Developments - Main Application Component
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner@2.0.3';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { SkipToContent } from './components/SkipToContent';
import { ErrorBoundary } from './components/ErrorBoundary';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SingleProjectPage } from './pages/SingleProjectPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WhoAreWePage } from './pages/WhoAreWePage';
import { BookVisitPage } from './pages/BookVisitPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Monte Developments - Eco-Friendly Real Estate</title>
          <meta name="description" content="Monte Developments - Creating sustainable, eco-friendly residential and commercial properties in Egypt's prime locations." />
        </Helmet>
        
        <BrowserRouter>
          <SkipToContent />
          <div className="min-h-screen bg-white">
            <Navigation />
            
            <main id="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/project/:id" element={<SingleProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/who-are-we" element={<WhoAreWePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/book-visit" element={<BookVisitPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
            <BackToTop />
            <Toaster position="top-right" richColors closeButton />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
