// AppContext.jsx
import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ToggleButtons from '../components/ToggleButtons/ToggleButtons';
import Logo from '../components/Logo/Logo';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

// Import pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Partners from '../pages/Partners/Partners';
import NewsEvents from '../pages/news/NewsEvents';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import Error from '../pages/Error/Error';
import TermsOfService from '../components/LegalPages/TermsOfService';
import PrivacyPolicy from '../components/LegalPages/PrivacyPolicy';

// ===== NEW PAGE IMPORTS =====
import Blog from '../Ressources/Blog/Blog';
import Gallery from '../Ressources/Gallery/Gallery';
import Trainings from '../Ressources/Trainings/Trainings';
import Join from '../Ressources/Join/Join';

const AppContent = ({ 
  showLogin, 
  showSignup,
  handleLoginClick,
  handleSignupClick,
  handleCloseModals, 
  handleSwitchToSignup, 
  handleSwitchToLogin 
}) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();
  
  // Check if current route is part of dashboard
  const isDashboardRoute = location.pathname.startsWith('/admin') || 
                          location.pathname.startsWith('/user') ||
                          location.pathname.startsWith('/superadmin') ||
                          location.pathname.startsWith('/hr') ||
                          location.pathname.startsWith('/maintenance') ||
                          location.pathname.startsWith('/it') ||
                          location.pathname.startsWith('/quality') ||
                          location.pathname.startsWith('/production') ||
                          location.pathname.startsWith('/methods') ||
                          location.pathname.startsWith('/developer');
  
  const LayoutWrapper = ({ children }) => {
    if (isDashboardRoute) {
      return <>{children}</>;
    }
    
    return (
      <>
        {/* Logo centered above Header */}
        <div className="logo-outer-wrapper">
          <Logo />
        </div>
        <Header 
          theme={theme}
          language={language}
          translations={translations}
          onLoginClick={handleLoginClick}
          onSignupClick={handleSignupClick}
        />
        <ToggleButtons 
          theme={theme}
          onToggleTheme={toggleTheme}
          language={language}
          onToggleLanguage={toggleLanguage}
        />
        {children}
        <Footer 
          theme={theme}
          language={language}
          translations={translations}
        />
      </>
    );
  };

  return (
    <div className={`App ${isDashboardRoute ? 'admin-layout' : 'public-layout'}`}>
      <LayoutWrapper>
        <main className="main-content">
          <div className={isDashboardRoute ? "container-fluid" : "container"}>
            <Routes>
              {/* ===== PUBLIC ROUTES ===== */}
              <Route path="/" element={<Home theme={theme} language={language} translations={translations} />} />
              <Route path="/about" element={<About theme={theme} language={language} translations={translations} />} />
              <Route path="/contact" element={<Contact theme={theme} language={language} translations={translations} />} />
              <Route path="/terms" element={<TermsOfService theme={theme} language={language} translations={translations} />} />
              <Route path="/privacy" element={<PrivacyPolicy theme={theme} language={language} translations={translations} />} />
              <Route path="/partners" element={<Partners theme={theme} language={language} translations={translations} />} />
              <Route path="/news" element={<NewsEvents theme={theme} language={language} translations={translations} />} />
              <Route path="/projects" element={<Projects theme={theme} language={language} translations={translations} />} />
              
              {/* ===== NEW ROUTES ===== */}
              <Route path="/blog" element={<Blog theme={theme} language={language} translations={translations} />} />
              <Route path="/gallery" element={<Gallery theme={theme} language={language} translations={translations} />} />
              <Route path="/trainings" element={<Trainings theme={theme} language={language} translations={translations} />} />
              <Route path="/join" element={<Join theme={theme} language={language} translations={translations} />} />
              
              {/* Error Route */}
              <Route path="*" element={<Error theme={theme} language={language} translations={translations} />} />
            </Routes>
          </div>
        </main>
      </LayoutWrapper>
    </div>
  );
};

export default AppContent;