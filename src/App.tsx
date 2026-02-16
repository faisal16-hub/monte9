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
import faviconImage from 'figma:asset/745a20e9ae33be19c431d88fd48b7419b4949a13.png';

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
          <link rel="icon" type="image/png" href={faviconImage} />
          <link rel="shortcut icon" type="image/png" href={faviconImage} />
          <link rel="apple-touch-icon" href={faviconImage} />
          {/* Google Tag Manager */}
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGZCZRNM');`}
          </script>
        </Helmet>
        
        <BrowserRouter>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-NGZCZRNM"
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          
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
