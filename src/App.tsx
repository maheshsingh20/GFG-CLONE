import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Practice from './pages/Practice';
import Courses from './pages/Courses';
import Jobs from './pages/Jobs';
import Articles from './pages/Articles';
import Campus from './pages/Campus';
import Quiz from './pages/Quiz';
import IDE from './pages/IDE';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 4000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={
              <>
                <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
                
                <div className="flex">
                  <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                  
                  <main className="flex-1 transition-all duration-300">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/tutorials" element={<Tutorials />} />
                      <Route path="/practice" element={<Practice />} />
                      <Route path="/courses" element={<Courses />} />
                      <Route path="/jobs" element={<Jobs />} />
                      <Route path="/articles" element={<Articles />} />
                      <Route path="/campus" element={<Campus />} />
                      <Route path="/quiz" element={<Quiz />} />
                      <Route path="/ide" element={<IDE />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </main>
                </div>
                
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;