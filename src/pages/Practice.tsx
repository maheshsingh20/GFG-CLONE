import React, { useState } from 'react';
import { Search, Filter, Trophy, Clock, Users, Star, Tag, ChevronDown, Target, Zap, Award } from 'lucide-react';

const Practice: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array",
      tags: ["Array", "Hash Table"],
      acceptance: "46.7%",
      submissions: "5.2M",
      likes: 1250,
      time: "15 min",
      companies: ["Google", "Amazon", "Microsoft"],
      solved: false
    },
    {
      id: 2,
      title: "Longest Increasing Subsequence",
      difficulty: "Medium",
      category: "Dynamic Programming",
      tags: ["Array", "Binary Search", "Dynamic Programming"],
      acceptance: "42.3%",
      submissions: "892K",
      likes: 856,
      time: "30 min",
      companies: ["Facebook", "Apple", "Netflix"],
      solved: true
    },
    {
      id: 3,
      title: "Merge k Sorted Lists",
      difficulty: "Hard",
      category: "Linked List",
      tags: ["Linked List", "Divide and Conquer", "Heap"],
      acceptance: "38.1%",
      submissions: "1.1M",
      likes: 2341,
      time: "45 min",
      companies: ["Google", "Amazon", "Uber"],
      solved: false
    },
    {
      id: 4,
      title: "Valid Parentheses",
      difficulty: "Easy",
      category: "Stack",
      tags: ["String", "Stack"],
      acceptance: "40.2%",
      submissions: "2.8M",
      likes: 892,
      time: "10 min",
      companies: ["Microsoft", "Facebook", "Adobe"],
      solved: true
    },
    {
      id: 5,
      title: "Binary Tree Maximum Path Sum",
      difficulty: "Hard",
      category: "Tree",
      tags: ["Dynamic Programming", "Tree", "Depth-First Search"],
      acceptance: "35.6%",
      submissions: "756K",
      likes: 1876,
      time: "40 min",
      companies: ["Amazon", "Google", "Bloomberg"],
      solved: false
    }
  ];

  const dsaSheets = [
    {
      name: "Striver's SDE Sheet",
      problems: 191,
      completed: 89,
      color: "bg-blue-500",
      description: "Complete preparation for product-based companies"
    },
    {
      name: "Love Babbar 450",
      problems: 450,
      completed: 167,
      color: "bg-purple-500",
      description: "Most asked coding interview questions"
    },
    {
      name: "Blind 75",
      problems: 75,
      completed: 34,
      color: "bg-green-500",
      description: "Essential problems for coding interviews"
    },
    {
      name: "NeetCode 150",
      problems: 150,
      completed: 78,
      color: "bg-orange-500",
      description: "Curated list of important coding problems"
    }
  ];

  const companyProblems = [
    { company: "Google", count: 1250, logo: "G", color: "bg-blue-600" },
    { company: "Amazon", count: 1890, logo: "A", color: "bg-orange-500" },
    { company: "Microsoft", count: 987, logo: "M", color: "bg-green-600" },
    { company: "Facebook", count: 756, logo: "F", color: "bg-blue-700" },
    { company: "Apple", count: 432, logo: "A", color: "bg-gray-800" },
    { company: "Netflix", count: 298, logo: "N", color: "bg-red-600" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProgressPercentage = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Trophy size={32} />
            <h1 className="text-3xl font-bold">Practice Arena</h1>
          </div>
          <p className="text-xl text-green-100 mb-6">
            Master coding interviews with curated problems from top companies
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">2,500+</div>
              <div className="text-green-200">Coding Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-green-200">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">15M+</div>
              <div className="text-green-200">Solutions Submitted</div>
            </div>
          </div>
        </div>

        {/* DSA Sheets */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular DSA Sheets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dsaSheets.map((sheet, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${sheet.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {sheet.name.split(' ')[0].charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">{sheet.name}</h3>
                    <p className="text-sm text-gray-500">{sheet.problems} problems</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">{sheet.description}</p>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{getProgressPercentage(sheet.completed, sheet.problems)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${sheet.color}`}
                      style={{ width: `${getProgressPercentage(sheet.completed, sheet.problems)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500">
                  {sheet.completed} / {sheet.problems} solved
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company-wise Problems */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Company-wise Problems</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {companyProblems.map((company, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {company.logo}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">{company.company}</h3>
                <p className="text-sm text-gray-500">{company.count} problems</p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem List */}
        <div className="bg-white rounded-xl shadow-lg">
          {/* Search and Filters */}
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">All Problems</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search problems..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter size={20} />
                  <span>Filters</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="all">All Difficulties</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="array">Array</option>
                    <option value="string">String</option>
                    <option value="dp">Dynamic Programming</option>
                    <option value="tree">Tree</option>
                    <option value="graph">Graph</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Problem Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Problem</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Difficulty</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Acceptance</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Time</th>
                  <th className="text-left py-4 px-6 font-medium text-gray-700">Companies</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((problem) => (
                  <tr key={problem.id} className="border-t hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      {problem.solved ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <h3 className="font-medium text-gray-900 hover:text-green-600 transition-colors">
                          {problem.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {problem.tags.map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm text-gray-600">
                        <div>{problem.acceptance}</div>
                        <div className="text-xs text-gray-500">{problem.submissions}</div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock size={16} />
                        <span>{problem.time}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-1">
                        {problem.companies.slice(0, 3).map((company, index) => (
                          <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {company}
                          </span>
                        ))}
                        {problem.companies.length > 3 && (
                          <span className="text-xs text-gray-500">+{problem.companies.length - 3}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;