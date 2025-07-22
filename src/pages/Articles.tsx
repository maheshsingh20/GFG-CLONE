import React, { useState } from 'react';
import { FileText, Clock, User, Eye, ThumbsUp, Bookmark, Share2, Calendar, Tag, TrendingUp, Star, Filter } from 'lucide-react';

const Articles: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 2500 },
    { id: 'algorithms', name: 'Algorithms', count: 450 },
    { id: 'data-structures', name: 'Data Structures', count: 380 },
    { id: 'web-dev', name: 'Web Development', count: 320 },
    { id: 'machine-learning', name: 'Machine Learning', count: 280 },
    { id: 'system-design', name: 'System Design', count: 220 },
    { id: 'interview', name: 'Interview Prep', count: 350 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Complete Guide to Dynamic Programming: From Beginner to Advanced',
      excerpt: 'Master dynamic programming with step-by-step explanations, common patterns, and 50+ practice problems.',
      author: 'Dr. Sarah Chen',
      publishDate: '2024-01-15',
      readTime: '25 min',
      views: '45.2K',
      likes: 1847,
      category: 'algorithms',
      tags: ['Dynamic Programming', 'Algorithms', 'Interview'],
      featured: true,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'React Hooks Complete Tutorial: useState, useEffect, and Custom Hooks',
      excerpt: 'Learn React Hooks with practical examples, best practices, and common pitfalls to avoid.',
      author: 'Alex Rodriguez',
      publishDate: '2024-01-12',
      readTime: '18 min',
      views: '32.8K',
      likes: 1256,
      category: 'web-dev',
      tags: ['React', 'JavaScript', 'Frontend'],
      featured: true,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'System Design Interview: Designing a Chat Application like WhatsApp',
      excerpt: 'Step-by-step guide to designing a scalable chat application covering architecture, databases, and real-time messaging.',
      author: 'Michael Johnson',
      publishDate: '2024-01-10',
      readTime: '35 min',
      views: '28.1K',
      likes: 2103,
      category: 'system-design',
      tags: ['System Design', 'Scalability', 'Architecture'],
      featured: false,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Binary Search Tree Implementation and Operations in Python',
      excerpt: 'Complete implementation of BST with insertion, deletion, traversal, and common interview problems.',
      author: 'Lisa Wang',
      publishDate: '2024-01-08',
      readTime: '22 min',
      views: '19.5K',
      likes: 876,
      category: 'data-structures',
      tags: ['BST', 'Python', 'Data Structures'],
      featured: false,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Machine Learning Algorithms Comparison: When to Use Which Algorithm',
      excerpt: 'Comprehensive comparison of ML algorithms with use cases, pros, cons, and implementation tips.',
      author: 'David Kim',
      publishDate: '2024-01-05',
      readTime: '30 min',
      views: '24.7K',
      likes: 1432,
      category: 'machine-learning',
      tags: ['ML', 'Algorithms', 'Data Science'],
      featured: false,
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Top 50 JavaScript Interview Questions with Detailed Answers',
      excerpt: 'Most frequently asked JavaScript interview questions covering ES6+, async/await, closures, and more.',
      author: 'Emma Thompson',
      publishDate: '2024-01-03',
      readTime: '40 min',
      views: '67.3K',
      likes: 3210,
      category: 'interview',
      tags: ['JavaScript', 'Interview', 'Frontend'],
      featured: true,
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const trendingTopics = [
    { name: 'System Design', articles: 220, growth: '+15%' },
    { name: 'React 18', articles: 89, growth: '+28%' },
    { name: 'LeetCode Solutions', articles: 456, growth: '+12%' },
    { name: 'AWS Interview', articles: 134, growth: '+22%' },
    { name: 'Python DSA', articles: 312, growth: '+18%' },
    { name: 'Next.js Tutorial', articles: 76, growth: '+35%' }
  ];

  const popularAuthors = [
    { name: 'Dr. Sarah Chen', articles: 45, followers: '12.5K', avatar: 'SC' },
    { name: 'Alex Rodriguez', articles: 38, followers: '9.2K', avatar: 'AR' },
    { name: 'Michael Johnson', articles: 52, followers: '15.8K', avatar: 'MJ' },
    { name: 'Lisa Wang', articles: 29, followers: '7.1K', avatar: 'LW' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const formatViews = (views: string) => {
    return views.replace('K', ',000').replace('.', ',');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            In-Depth Programming Articles
          </h1>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Explore comprehensive tutorials, algorithm explanations, and expert insights from industry professionals
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2.5K+</div>
              <div className="text-emerald-200">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-emerald-200">Expert Authors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-emerald-200">Monthly Reads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-emerald-200">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
            <Star className="text-yellow-500" size={32} />
            <span>Featured Articles</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(article => article.featured).slice(0, 2).map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Featured
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full capitalize">
                      {article.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye size={16} />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp size={16} />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse Articles</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-emerald-50 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Article List */}
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                          {article.category.replace('-', ' ')}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
                          {article.difficulty}
                        </span>
                        {article.featured && (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, index) => (
                          <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <User size={16} />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Eye size={16} />
                              <span>{article.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ThumbsUp size={16} />
                              <span>{article.likes}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                              <Bookmark size={16} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                              <Share2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-emerald-600" size={24} />
                <span>Trending Topics</span>
              </h3>
              
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {topic.name}
                      </div>
                      <div className="text-sm text-gray-500">{topic.articles} articles</div>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      {topic.growth}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Authors */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Authors</h3>
              
              <div className="space-y-4">
                {popularAuthors.map((author, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {author.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{author.name}</div>
                      <div className="text-sm text-gray-500">
                        {author.articles} articles • {author.followers} followers
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 text-center text-emerald-600 hover:text-emerald-700 font-medium">
                View All Authors →
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Get the latest articles and tutorials delivered to your inbox weekly.
              </p>
              
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <button className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Subscribe Now
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;