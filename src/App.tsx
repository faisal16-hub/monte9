import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner@2.0.3';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { SkipToContent } from './components/SkipToContent';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SingleProjectPage } from './pages/SingleProjectPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WhoAreWePage } from './pages/WhoAreWePage';
import { BookVisitPage } from './pages/BookVisitPage';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Monte Developments - Eco-Friendly Real Estate</title>
        <meta name="description" content="Monte Developments - Creating sustainable, eco-friendly residential and commercial properties in Egypt's prime locations." />
        {/* Add your favicon here - replace with your actual favicon URL */}
        <link rel="icon" type="image/png" href="https://www.dropbox.com/scl/fi/nxrfsxycs5ogfon71z8wm/Logo-Gold-Copy.png?rlkey=g42kq73k1rk7w4ln757yeevtz&st=6y80dtce&raw=1" />
        <link rel="apple-touch-icon" href="https://www.dropbox.com/scl/fi/nxrfsxycs5ogfon71z8wm/Logo-Gold-Copy.png?rlkey=g42kq73k1rk7w4ln757yeevtz&st=6y80dtce&raw=1" />
      </Helmet>
      
      <Router>
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
  );
}

export default App;