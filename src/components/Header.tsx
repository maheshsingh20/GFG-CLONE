import React, { useState } from 'react';
import { Search, Menu, User, Bell, ChevronDown, Code, Trophy, BookOpen, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTutorialsMenu, setShowTutorialsMenu] = useState(false);

  const tutorialCategories = [
    { name: 'Programming Languages', items: ['C++', 'Java', 'Python', 'JavaScript', 'C'] },
    { name: 'CS Subjects', items: ['Data Structures', 'Algorithms', 'DBMS', 'OS', 'Computer Networks'] },
    { name: 'Technologies', items: ['Web Development', 'Machine Learning', 'DevOps', 'Android', 'System Design'] }
  ];

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 transition-colors"
            >
              <Menu size={24} />
            </button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <Code size={24} />
              </div>
              <span className="text-xl font-bold text-green-600">GeeksforGeeks</span>
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Home
            </Link>
            
            <div
              className="relative"
              onMouseEnter={() => setShowTutorialsMenu(true)}
              onMouseLeave={() => setShowTutorialsMenu(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors">
                <span>Tutorials</span>
                <ChevronDown size={16} />
              </button>
              
              {showTutorialsMenu && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-lg rounded-lg mt-2 p-6 z-50">
                  {tutorialCategories.map((category, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {category.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to="/tutorials"
                            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/practice"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              <Trophy size={16} />
              <span>Practice</span>
            </Link>
            
            <Link
              to="/courses"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              <BookOpen size={16} />
              <span>Courses</span>
            </Link>
            
            <Link
              to="/jobs"
              className="flex items-center space-x-1 text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              <Briefcase size={16} />
              <span>Jobs</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, problems, courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {user ? (
                  <>
                    <img
                      src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=10b981&color=fff&size=32`}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="hidden md:inline text-sm font-medium">{user.name}</span>
                  </>
                ) : (
                  <User size={20} />
                )}
                <ChevronDown size={16} />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                  {user ? (
                    <>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Settings
                      </Link>
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;