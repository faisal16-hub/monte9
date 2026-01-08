import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner@2.0.3';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SingleProjectPage } from './pages/SingleProjectPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WhoAreWePage } from './pages/WhoAreWePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<SingleProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/who-are-we" element={<WhoAreWePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        
        <Toaster 
          position="top-right" 
          richColors 
          closeButton
        />
      </div>
    </Router>
  );
}

export default App;