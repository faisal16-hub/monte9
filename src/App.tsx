import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner@2.0.3';
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

// Replace 'GTM-XXXXXXX' with your actual Google Tag Manager container ID
const GTM_ID = 'GTM-XXXXXXX';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Monte Developments - Eco-Friendly Real Estate</title>
          <meta name="description" content="Monte Developments - Creating sustainable, eco-friendly residential and commercial properties in Egypt's prime locations." />
          {/* Add your favicon here - replace with your actual favicon URL */}
          <link rel="icon" type="image/png" href="https://www.dropbox.com/scl/fi/umzad0nzas1bhmj2utdnp/Logo-Green.png?rlkey=0tc2x2dvvbf70q7oqgq2c6zuz&st=nua3v3g9&raw=1" />
          <link rel="apple-touch-icon" href="https://www.dropbox.com/scl/fi/umzad0nzas1bhmj2utdnp/Logo-Green.png?rlkey=0tc2x2dvvbf70q7oqgq2c6zuz&st=nua3v3g9&raw=1" />
          
          {/* Google Tag Manager */}
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </script>
          {/* End Google Tag Manager */}
        </Helmet>
        
        <Router>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe 
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0" 
              width="0" 
              style={{ display: 'none', visibility: 'hidden' }}
              title="Google Tag Manager"
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
            
            <Toaster 
              position="top-right" 
              richColors 
              closeButton
            />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;