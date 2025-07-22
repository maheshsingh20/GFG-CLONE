import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Trophy, BookOpen, Briefcase, Star, Clock, ArrowRight, Code, Brain, Target } from 'lucide-react';

const Home: React.FC = () => {
  const featuredArticles = [
    {
      title: "Complete Guide to Dynamic Programming",
      category: "Algorithms",
      readTime: "15 min",
      difficulty: "Advanced",
      views: "50K",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "System Design Interview Questions",
      category: "Interview",
      readTime: "20 min",
      difficulty: "Expert",
      views: "75K",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "React Hooks Complete Tutorial",
      category: "Web Development",
      readTime: "12 min",
      difficulty: "Intermediate",
      views: "32K",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const trendingTopics = [
    { name: "Machine Learning", count: "1.2K articles", color: "bg-purple-100 text-purple-800" },
    { name: "Data Structures", count: "856 problems", color: "bg-green-100 text-green-800" },
    { name: "System Design", count: "432 articles", color: "bg-blue-100 text-blue-800" },
    { name: "React.js", count: "645 tutorials", color: "bg-orange-100 text-orange-800" },
    { name: "Python", count: "2.1K resources", color: "bg-yellow-100 text-yellow-800" },
    { name: "Algorithms", count: "1.5K problems", color: "bg-red-100 text-red-800" }
  ];

  const companyUpdates = [
    { company: "Google", type: "Interview Experience", time: "2 hours ago" },
    { company: "Amazon", type: "New Openings", time: "4 hours ago" },
    { company: "Microsoft", type: "Internship Program", time: "6 hours ago" },
    { company: "Meta", type: "Technical Round Tips", time: "8 hours ago" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Learn, Practice, and Excel in
            <span className="block text-green-200">Computer Science</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
            From coding interviews to system design, master everything you need to succeed in tech
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/practice"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Trophy size={24} />
              <span>Start Practicing</span>
            </Link>
            <Link
              to="/tutorials"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <BookOpen size={24} />
              <span>Browse Tutorials</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">10M+</div>
              <div className="text-green-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-green-200">Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2K+</div>
              <div className="text-green-200">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-green-200">Courses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Featured Articles */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <Link to="/articles" className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                <span>View All</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid gap-8">
              {featuredArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.difficulty}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{article.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={16} className="text-yellow-500" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Trending Topics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-green-600" size={24} />
                <span>Trending Topics</span>
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {topic.name}
                      </div>
                      <div className="text-sm text-gray-500">{topic.count}</div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${topic.color}`}>
                      Hot
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Updates */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Briefcase className="text-blue-600" size={24} />
                <span>Company Updates</span>
              </h3>
              <div className="space-y-4">
                {companyUpdates.map((update, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                      {update.company.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{update.company}</div>
                      <div className="text-sm text-gray-600">{update.type}</div>
                      <div className="text-xs text-gray-500 mt-1">{update.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                to="/jobs"
                className="block text-center mt-6 text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Updates →
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/practice"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Code className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Solve Problems</div>
                    <div className="text-sm text-gray-500">Practice coding challenges</div>
                  </div>
                </Link>
                
                <Link
                  to="/quiz"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Brain className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Take Quiz</div>
                    <div className="text-sm text-gray-500">Test your knowledge</div>
                  </div>
                </Link>
                
                <Link
                  to="/ide"
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <Target className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Online IDE</div>
                    <div className="text-sm text-gray-500">Write and run code</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;