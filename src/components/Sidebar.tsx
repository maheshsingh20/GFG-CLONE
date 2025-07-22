import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, BookOpen, Trophy, GraduationCap, Briefcase, FileText, Users, HelpCircle, Terminal, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Tutorials', path: '/tutorials' },
    { icon: Trophy, label: 'Practice', path: '/practice' },
    { icon: GraduationCap, label: 'Courses', path: '/courses' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs' },
    { icon: FileText, label: 'Articles', path: '/articles' },
    { icon: Users, label: 'Campus', path: '/campus' },
    { icon: HelpCircle, label: 'Quiz', path: '/quiz' },
    { icon: Terminal, label: 'IDE', path: '/ide' },
  ];

  const categories = [
    {
      title: 'Data Structures',
      items: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs', 'Hash Tables']
    },
    {
      title: 'Algorithms',
      items: ['Searching', 'Sorting', 'Greedy', 'Dynamic Programming', 'Backtracking', 'Divide & Conquer']
    },
    {
      title: 'Languages',
      items: ['C++', 'Java', 'Python', 'JavaScript', 'C', 'C#', 'Go']
    },
    {
      title: 'CS Subjects',
      items: ['DBMS', 'Operating Systems', 'Computer Networks', 'System Design', 'Compiler Design']
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-2 mb-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors group"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              );
            })}
          </nav>

          {/* Categories */}
          <div className="space-y-6">
            {categories.map((category, index) => (
              <div key={index} className="border-t pt-6 first:border-t-0 first:pt-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 px-3">{category.title}</h3>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to="/tutorials"
                      onClick={onClose}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Tracker */}
          <div className="mt-8 p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Your Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Problems Solved</span>
                  <span>47/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '47%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Articles Read</span>
                  <span>23/50</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '46%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;