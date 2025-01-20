import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Settings from './pages/Settings';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className={`flex h-screen ${isDark ? 'dark' : ''}`}>
      <Sidebar onNavigate={handlePageChange} currentPage={currentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
        
        <main className="flex-1 overflow-y-auto bg-background text-foreground transition-colors duration-200 p-6">
          <div className="max-w-7xl mx-auto">
            {currentPage === 'dashboard' && <Dashboard />}
            {currentPage === 'analytics' && <Analytics />}
            {currentPage === 'users' && <Users />}
            {currentPage === 'settings' && <Settings />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;