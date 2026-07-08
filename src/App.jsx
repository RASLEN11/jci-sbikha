// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AppContent from './contexts/AppContext';
import ScrollToTop from './contexts/ScrollToTop'; // <--- IMPORT THIS
import './styles/App.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* <--- ADD THIS RIGHT HERE */}
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;