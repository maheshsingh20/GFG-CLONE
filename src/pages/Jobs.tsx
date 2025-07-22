import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Building, Search, Filter, Star, Bookmark, ExternalLink, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Jobs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Jobs', count: 1250 },
    { id: 'software', name: 'Software Engineer', count: 450 },
    { id: 'data', name: 'Data Scientist', count: 180 },
    { id: 'frontend', name: 'Frontend Developer', count: 220 },
    { id: 'backend', name: 'Backend Developer', count: 160 },
    { id: 'fullstack', name: 'Full Stack Developer', count: 140 },
    { id: 'devops', name: 'DevOps Engineer', count: 100 }
  ];

  const topCompanies = [
    { name: 'Google', openings: 45, logo: 'G', color: 'bg-blue-600' },
    { name: 'Microsoft', openings: 38, logo: 'M', color: 'bg-green-600' },
    { name: 'Amazon', openings: 52, logo: 'A', color: 'bg-orange-500' },
    { name: 'Meta', openings: 28, logo: 'F', color: 'bg-blue-700' },
    { name: 'Apple', openings: 23, logo: 'A', color: 'bg-gray-800' },
    { name: 'Netflix', openings: 15, logo: 'N', color: 'bg-red-600' }
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '$150K - $200K',
      logo: 'G',
      logoColor: 'bg-blue-600',
      skills: ['JavaScript', 'React', 'Node.js', 'Python'],
      posted: '2 days ago',
      applicants: 127,
      featured: true,
      remote: true,
      description: 'Join our team to build scalable web applications and work on cutting-edge technology.'
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Microsoft',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$120K - $160K',
      logo: 'M',
      logoColor: 'bg-green-600',
      skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
      posted: '1 day ago',
      applicants: 89,
      featured: true,
      remote: false,
      description: 'Analyze large datasets and build ML models to drive business insights.'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Amazon',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$100K - $140K',
      logo: 'A',
      logoColor: 'bg-orange-500',
      skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
      posted: '3 days ago',
      applicants: 156,
      featured: false,
      remote: true,
      description: 'Create beautiful and responsive user interfaces for our e-commerce platform.'
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Meta',
      location: 'Menlo Park, CA',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '$130K - $180K',
      logo: 'F',
      logoColor: 'bg-blue-700',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      posted: '4 days ago',
      applicants: 78,
      featured: true,
      remote: false,
      description: 'Manage infrastructure and deployment pipelines for our social media platform.'
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      company: 'Apple',
      location: 'Cupertino, CA',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '$140K - $190K',
      logo: 'A',
      logoColor: 'bg-gray-800',
      skills: ['Swift', 'JavaScript', 'Python', 'iOS'],
      posted: '5 days ago',
      applicants: 203,
      featured: false,
      remote: false,
      description: 'Develop end-to-end solutions for our mobile and web applications.'
    }
  ];

  const interviewExperiences = [
    {
      company: 'Google',
      role: 'Software Engineer',
      author: 'Sarah Chen',
      rating: 4,
      difficulty: 'Hard',
      rounds: 5,
      timeline: '3 weeks',
      experience: 'Great experience! The interviewers were very friendly and the process was well-structured.'
    },
    {
      company: 'Amazon',
      role: 'Data Scientist',
      author: 'Mike Johnson',
      rating: 5,
      difficulty: 'Medium',
      rounds: 4,
      timeline: '2 weeks',
      experience: 'Amazing process with clear communication throughout. Highly recommend preparing system design.'
    },
    {
      company: 'Microsoft',
      role: 'Frontend Developer',
      author: 'Emily Davis',
      rating: 4,
      difficulty: 'Medium',
      rounds: 3,
      timeline: '2 weeks',
      experience: 'Fair interview process with practical coding challenges. Focus on React fundamentals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Dream Tech Job
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with top companies and land your next role in software engineering, data science, and more
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="sf">San Francisco</option>
                <option value="ny">New York</option>
                <option value="seattle">Seattle</option>
                <option value="austin">Austin</option>
              </select>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1.2K+</div>
              <div className="text-blue-200">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Top Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Candidates Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Job Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-blue-50 text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="font-semibold mb-1">{category.name}</div>
                <div className={`text-sm ${
                  selectedCategory === category.id ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {category.count} jobs
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Top Companies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Hiring Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className={`w-16 h-16 ${company.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {company.logo}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{company.name}</h3>
                <p className="text-sm text-gray-500">{company.openings} open positions</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Job Listings */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest Jobs</h2>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter size={20} />
                  <span>Filters</span>
                </button>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Newest First</option>
                  <option>Salary: High to Low</option>
                  <option>Salary: Low to High</option>
                  <option>Most Relevant</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {featuredJobs.map((job) => (
                <div key={job.id} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                  job.featured ? 'border-2 border-blue-200 relative' : ''
                }`}>
                  {job.featured && (
                    <div className="absolute -top-3 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${job.logoColor} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 transition-colors cursor-pointer">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{job.type}</span>
                          </div>
                          {job.remote && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                              Remote
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Bookmark size={20} />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{job.applicants} applicants</span>
                      </div>
                      <span>{job.posted}</span>
                    </div>
                    
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Load More Jobs
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Interview Experiences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Star className="text-yellow-500" size={24} />
                <span>Interview Experiences</span>
              </h3>
              
              <div className="space-y-6">
                {interviewExperiences.map((exp, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{exp.company} - {exp.role}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < exp.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div>
                        <span className="text-gray-500">Difficulty:</span>
                        <div className={`font-medium ${
                          exp.difficulty === 'Easy' ? 'text-green-600' :
                          exp.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {exp.difficulty}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Rounds:</span>
                        <div className="font-medium">{exp.rounds}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <div className="font-medium">{exp.timeline}</div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">"{exp.experience}"</p>
                    <div className="text-xs text-gray-500">- {exp.author}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/articles" className="block text-center mt-6 text-blue-600 hover:text-blue-700 font-medium">
                View All Experiences →
              </Link>
            </div>

            {/* Job Market Insights */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-green-600" size={24} />
                <span>Market Insights</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Average Salary - Software Engineer</div>
                  <div className="text-2xl font-bold text-gray-900">$145K</div>
                  <div className="text-sm text-green-600">↑ 12% from last year</div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Most In-Demand Skill</div>
                  <div className="text-lg font-bold text-gray-900">React.js</div>
                  <div className="text-sm text-blue-600">Featured in 35% of jobs</div>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Remote Work</div>
                  <div className="text-lg font-bold text-gray-900">67% of jobs</div>
                  <div className="text-sm text-purple-600">Support remote work</div>
                </div>
              </div>
            </div>

            {/* Career Tips */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Career Tips</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Optimize Your Resume</h4>
                    <p className="text-sm text-gray-600">Tailor your resume for each application with relevant keywords.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Practice Coding</h4>
                    <p className="text-sm text-gray-600">Solve problems daily on our practice platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Network Actively</h4>
                    <p className="text-sm text-gray-600">Connect with professionals in your field.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;