import React, { useState } from 'react';
import { BookOpen, PlayCircle, Clock, Users, Star, Award, CheckCircle, Filter, Search, Calendar, DollarSign, Zap } from 'lucide-react';

const Courses: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courseCategories = [
    { id: 'all', name: 'All Courses', count: 150 },
    { id: 'programming', name: 'Programming', count: 45 },
    { id: 'web', name: 'Web Development', count: 32 },
    { id: 'data', name: 'Data Science', count: 28 },
    { id: 'ai', name: 'AI & ML', count: 22 },
    { id: 'mobile', name: 'Mobile Development', count: 18 },
    { id: 'devops', name: 'DevOps', count: 15 }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Data Structures & Algorithms Bootcamp',
      instructor: 'Dr. Rajesh Kumar',
      rating: 4.9,
      students: 45000,
      duration: '40 hours',
      lessons: 120,
      level: 'Intermediate',
      price: 79,
      originalPrice: 149,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'programming',
      skills: ['DSA', 'Problem Solving', 'Interviews'],
      description: 'Master data structures and algorithms with comprehensive theory and 300+ practice problems',
      bestseller: true,
      certificate: true,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      title: 'Full-Stack Web Development with MERN',
      instructor: 'Sarah Chen',
      rating: 4.8,
      students: 38000,
      duration: '55 hours',
      lessons: 180,
      level: 'Beginner',
      price: 99,
      originalPrice: 199,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'web',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      description: 'Build modern web applications from scratch using MongoDB, Express, React, and Node.js',
      bestseller: true,
      certificate: true,
      lastUpdated: '2024-01-10'
    },
    {
      id: 3,
      title: 'Machine Learning A-Z: Theory & Practical',
      instructor: 'Prof. Michael Johnson',
      rating: 4.7,
      students: 29000,
      duration: '45 hours',
      lessons: 150,
      level: 'Advanced',
      price: 129,
      originalPrice: 229,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'ai',
      skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Deep Learning'],
      description: 'Comprehensive machine learning course covering supervised, unsupervised, and deep learning',
      bestseller: false,
      certificate: true,
      lastUpdated: '2024-01-08'
    },
    {
      id: 4,
      title: 'System Design Interview Preparation',
      instructor: 'Alex Rodriguez',
      rating: 4.8,
      students: 22000,
      duration: '30 hours',
      lessons: 85,
      level: 'Advanced',
      price: 89,
      originalPrice: 159,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'programming',
      skills: ['System Design', 'Scalability', 'Databases', 'Architecture'],
      description: 'Master system design concepts and crack interviews at top tech companies',
      bestseller: false,
      certificate: true,
      lastUpdated: '2024-01-12'
    },
    {
      id: 5,
      title: 'React Native Mobile App Development',
      instructor: 'Emma Thompson',
      rating: 4.6,
      students: 18000,
      duration: '35 hours',
      lessons: 110,
      level: 'Intermediate',
      price: 69,
      originalPrice: 139,
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'mobile',
      skills: ['React Native', 'JavaScript', 'iOS', 'Android'],
      description: 'Build cross-platform mobile apps with React Native and deploy to app stores',
      bestseller: false,
      certificate: true,
      lastUpdated: '2024-01-05'
    },
    {
      id: 6,
      title: 'DevOps Complete Course: CI/CD with AWS',
      instructor: 'David Kim',
      rating: 4.7,
      students: 15000,
      duration: '42 hours',
      lessons: 135,
      level: 'Intermediate',
      price: 109,
      originalPrice: 189,
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'devops',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      description: 'Learn DevOps practices, containerization, and cloud deployment with hands-on projects',
      bestseller: false,
      certificate: true,
      lastUpdated: '2024-01-03'
    }
  ];

  const learningPaths = [
    {
      title: 'Frontend Developer Path',
      courses: 6,
      duration: '4-6 months',
      description: 'Complete path from HTML/CSS to advanced React development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Testing'],
      color: 'from-blue-500 to-cyan-500',
      enrolled: 12000
    },
    {
      title: 'Backend Developer Path',
      courses: 5,
      duration: '3-5 months',
      description: 'Server-side development with Node.js, databases, and APIs',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
      color: 'from-green-500 to-teal-500',
      enrolled: 8500
    },
    {
      title: 'Data Science Path',
      courses: 8,
      duration: '6-9 months',
      description: 'Complete data science journey from Python to machine learning',
      skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Deep Learning'],
      color: 'from-purple-500 to-pink-500',
      enrolled: 15000
    },
    {
      title: 'Mobile Developer Path',
      courses: 4,
      duration: '3-4 months',
      description: 'Cross-platform mobile development with React Native and Flutter',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store'],
      color: 'from-orange-500 to-red-500',
      enrolled: 6800
    }
  ];

  const instructors = [
    { name: 'Dr. Rajesh Kumar', courses: 8, students: '120K', rating: 4.9 },
    { name: 'Sarah Chen', courses: 6, students: '89K', rating: 4.8 },
    { name: 'Prof. Michael Johnson', courses: 12, students: '150K', rating: 4.7 },
    { name: 'Alex Rodriguez', courses: 5, students: '67K', rating: 4.8 }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredCourses = selectedFilter === 'all' 
    ? featuredCourses 
    : featuredCourses.filter(course => course.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master New Skills with Expert Courses
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Learn from industry experts and advance your career with our comprehensive programming courses
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-4 shadow-xl mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-indigo-200">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-indigo-200">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-indigo-200">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-indigo-200">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Learning Paths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Structured Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <div key={index} className={`bg-gradient-to-br ${path.color} text-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105`}>
                <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                <p className="text-sm opacity-90 mb-4">{path.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Courses:</span>
                    <span className="font-semibold">{path.courses}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-semibold">{path.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Students:</span>
                    <span className="font-semibold">{path.enrolled.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {path.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                  {path.skills.length > 3 && (
                    <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                      +{path.skills.length - 3} more
                    </span>
                  )}
                </div>

                <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Start Learning
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Course Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4 mb-8">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </section>

        {/* Course Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedFilter === 'all' ? 'All Courses' : courseCategories.find(c => c.id === selectedFilter)?.name + ' Courses'}
            </h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {course.bestseller && (
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Zap size={12} />
                        <span>Bestseller</span>
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <PlayCircle className="text-white" size={48} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="text-sm text-gray-600 mb-4">
                    by <span className="font-medium text-indigo-600">{course.instructor}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen size={16} />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Certificate */}
                  {course.certificate && (
                    <div className="flex items-center space-x-1 text-sm text-green-600 mb-4">
                      <Award size={16} />
                      <span>Certificate included</span>
                    </div>
                  )}

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Instructors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Expert Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {instructor.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Courses:</span>
                    <span className="font-medium">{instructor.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students:</span>
                    <span className="font-medium">{instructor.students}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Rating:</span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="font-medium">{instructor.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-6 text-indigo-100">
            Join thousands of students and advance your programming skills today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors flex items-center space-x-2">
              <BookOpen size={20} />
              <span>Browse All Courses</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors flex items-center space-x-2">
              <Calendar size={20} />
              <span>Start Free Trial</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Courses;