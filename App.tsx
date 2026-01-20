import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InvestorPage } from './pages/InvestorPage';
import { TouristPage } from './pages/TouristPage';
import { EconomyPage } from './pages/EconomyPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  // Hide Navbar/Footer on Economy page for Dashboard look, or keep them. 
  // Requirement says "Back button to main page", implies standalone or sub-page. 
  // Let's hide standard Nav for Economy to emphasize the "Financial Dashboard" strict style, 
  // but keep Footer for consistency or hide it too. Let's hide standard Navbar for EconomyPage to strictly follow design.
  const isEconomy = location.pathname === '/economy';

  return (
    <div className="flex flex-col min-h-screen">
      {!isEconomy && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<InvestorPage />} />
          <Route path="/tourist" element={<TouristPage />} />
          <Route path="/economy" element={<EconomyPage />} />
        </Routes>
      </main>
      {!isEconomy && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;