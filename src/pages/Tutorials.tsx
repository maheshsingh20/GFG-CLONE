import React, { useState } from 'react';
import { BookOpen, PlayCircle, Clock, Users, Star, ChevronRight, Code, Database, Globe, Cpu, Brain, Smartphone } from 'lucide-react';

const Tutorials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpen, color: 'bg-gray-500' },
    { id: 'programming', name: 'Programming', icon: Code, color: 'bg-blue-500' },
    { id: 'web', name: 'Web Development', icon: Globe, color: 'bg-green-500' },
    { id: 'data', name: 'Data Science', icon: Database, color: 'bg-purple-500' },
    { id: 'ai', name: 'AI & ML', icon: Brain, color: 'bg-red-500' },
    { id: 'systems', name: 'System Design', icon: Cpu, color: 'bg-orange-500' },
    { id: 'mobile', name: 'Mobile Dev', icon: Smartphone, color: 'bg-pink-500' }
  ];

  const tutorials = [
    {
      id: 1,
      title: "Complete Python Programming Course",
      description: "Learn Python from basics to advanced concepts with hands-on projects",
      category: 'programming',
      difficulty: 'Beginner',
      duration: '12 hours',
      lessons: 45,
      students: '125K',
      rating: 4.8,
      instructor: 'Dr. Sarah Chen',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Python', 'Programming', 'Beginner'],
      price: 'Free'
    },
    {
      id: 2,
      title: "React.js Complete Guide",
      description: "Master modern React development with hooks, context, and best practices",
      category: 'web',
      difficulty: 'Intermediate',
      duration: '18 hours',
      lessons: 67,
      students: '89K',
      rating: 4.9,
      instructor: 'Alex Rodriguez',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['React', 'JavaScript', 'Frontend'],
      price: '$49'
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      description: "Comprehensive guide to DSA with coding problems and interview preparation",
      category: 'programming',
      difficulty: 'Intermediate',
      duration: '25 hours',
      lessons: 89,
      students: '156K',
      rating: 4.7,
      instructor: 'Prof. Michael Johnson',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['DSA', 'Algorithms', 'Interview'],
      price: 'Free'
    },
    {
      id: 4,
      title: "Machine Learning Fundamentals",
      description: "Introduction to ML concepts, algorithms, and practical implementations",
      category: 'ai',
      difficulty: 'Advanced',
      duration: '22 hours',
      lessons: 78,
      students: '67K',
      rating: 4.6,
      instructor: 'Dr. Lisa Wang',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['ML', 'AI', 'Python'],
      price: '$79'
    },
    {
      id: 5,
      title: "System Design Interview Prep",
      description: "Learn to design scalable systems and crack system design interviews",
      category: 'systems',
      difficulty: 'Advanced',
      duration: '15 hours',
      lessons: 42,
      students: '45K',
      rating: 4.8,
      instructor: 'David Kim',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['System Design', 'Interview', 'Architecture'],
      price: '$99'
    },
    {
      id: 6,
      title: "Full-Stack Web Development",
      description: "Complete web development course covering frontend and backend technologies",
      category: 'web',
      difficulty: 'Intermediate',
      duration: '35 hours',
      lessons: 120,
      students: '98K',
      rating: 4.7,
      instructor: 'Emma Thompson',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Full-Stack', 'JavaScript', 'Node.js'],
      price: '$129'
    }
  ];

  const learningPaths = [
    {
      name: "Frontend Developer",
      description: "Complete path from HTML/CSS to advanced React",
      courses: 8,
      duration: "3-6 months",
      level: "Beginner to Advanced",
      color: "bg-blue-500"
    },
    {
      name: "Backend Developer", 
      description: "Server-side development with Node.js and databases",
      courses: 6,
      duration: "2-4 months",
      level: "Intermediate",
      color: "bg-green-500"
    },
    {
      name: "Data Scientist",
      description: "Python, ML, and data analysis fundamentals",
      courses: 10,
      duration: "4-8 months", 
      level: "Beginner to Advanced",
      color: "bg-purple-500"
    },
    {
      name: "DevOps Engineer",
      description: "Deployment, monitoring, and infrastructure",
      courses: 7,
      duration: "3-5 months",
      level: "Intermediate to Advanced", 
      color: "bg-orange-500"
    }
  ];

  const filteredTutorials = selectedCategory === 'all' 
    ? tutorials 
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learn with Expert-Led Tutorials
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Master programming languages, frameworks, and computer science fundamentals with our comprehensive tutorials
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2M+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.8★</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Learning Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-12 h-12 ${path.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform`}>
                  {path.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {path.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Courses:</span>
                    <span className="font-medium">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{path.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  <Icon size={20} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Tutorial Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Tutorials' : categories.find(c => c.id === selectedCategory)?.name + ' Tutorials'}
            </h2>
            <span className="text-gray-500">
              {filteredTutorials.length} tutorial{filteredTutorials.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      tutorial.price === 'Free' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {tutorial.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="text-white" size={48} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {tutorial.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutorial.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen size={16} />
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{tutorial.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <span className="text-gray-500">by </span>
                      <span className="text-gray-900 font-medium">{tutorial.instructor}</span>
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl mb-6 text-green-100">
            Join millions of students and start your coding journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Browse Free Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              View Premium Content
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tutorials;