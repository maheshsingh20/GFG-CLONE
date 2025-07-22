import React, { useState } from 'react';
import { Users, Trophy, Calendar, MapPin, Star, Award, TrendingUp, Target, Book, MessageCircle, ChevronRight, Search, Filter } from 'lucide-react';

const Campus: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  const campusStats = [
    { label: 'Active Colleges', value: '2,500+', icon: Users, color: 'text-blue-600' },
    { label: 'Student Groups', value: '15,000+', icon: Users, color: 'text-green-600' },
    { label: 'Coding Competitions', value: '850+', icon: Trophy, color: 'text-yellow-600' },
    { label: 'Campus Events', value: '5,200+', icon: Calendar, color: 'text-purple-600' }
  ];

  const topColleges = [
    {
      name: 'Indian Institute of Technology, Delhi',
      shortName: 'IIT Delhi',
      location: 'New Delhi, India',
      students: 12500,
      codingClubs: 8,
      competitions: 45,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: 1,
      activities: ['Competitive Programming', 'Hackathons', 'Tech Talks', 'Workshops']
    },
    {
      name: 'Stanford University',
      shortName: 'Stanford',
      location: 'California, USA',
      students: 17500,
      codingClubs: 12,
      competitions: 38,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: 2,
      activities: ['AI Research', 'Startup Incubation', 'Code Reviews', 'ML Workshops']
    },
    {
      name: 'Massachusetts Institute of Technology',
      shortName: 'MIT',
      location: 'Massachusetts, USA',
      students: 11500,
      codingClubs: 15,
      competitions: 52,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: 3,
      activities: ['Robotics', 'Algorithm Design', 'Open Source', 'Tech Innovation']
    },
    {
      name: 'Carnegie Mellon University',
      shortName: 'CMU',
      location: 'Pennsylvania, USA',
      students: 14200,
      codingClubs: 10,
      competitions: 41,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400',
      rank: 4,
      activities: ['Computer Vision', 'Security Research', 'Game Development', 'HCI']
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Inter-College Programming Championship',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Virtual Event',
      participants: 2500,
      prizes: '$50,000',
      difficulty: 'Advanced',
      organizer: 'GeeksforGeeks',
      description: 'Annual programming competition featuring algorithmic challenges',
      tags: ['Programming', 'Competition', 'Algorithms']
    },
    {
      id: 2,
      title: 'Web Development Hackathon',
      date: '2024-02-20',
      time: '9:00 AM',
      location: 'IIT Delhi',
      participants: 800,
      prizes: '$25,000',
      difficulty: 'Intermediate',
      organizer: 'IIT Delhi Coding Club',
      description: '48-hour hackathon focusing on modern web technologies',
      tags: ['Web Dev', 'Hackathon', 'React', 'Node.js']
    },
    {
      id: 3,
      title: 'AI/ML Workshop Series',
      date: '2024-02-25',
      time: '2:00 PM',
      location: 'Stanford University',
      participants: 300,
      prizes: 'Certificates',
      difficulty: 'Beginner',
      organizer: 'Stanford AI Club',
      description: 'Comprehensive workshop on machine learning fundamentals',
      tags: ['AI', 'ML', 'Workshop', 'Python']
    },
    {
      id: 4,
      title: 'Mobile App Development Contest',
      date: '2024-03-01',
      time: '11:00 AM',
      location: 'MIT Campus',
      participants: 450,
      prizes: '$15,000',
      difficulty: 'Intermediate',
      organizer: 'MIT Mobile Dev Society',
      description: 'Build innovative mobile apps using React Native or Flutter',
      tags: ['Mobile Dev', 'React Native', 'Flutter', 'Innovation']
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Arjun Sharma', college: 'IIT Delhi', points: 2847, solvedProblems: 456, badge: 'gold' },
    { rank: 2, name: 'Priya Patel', college: 'IIT Bombay', points: 2756, solvedProblems: 423, badge: 'gold' },
    { rank: 3, name: 'Rahul Kumar', college: 'BITS Pilani', points: 2698, solvedProblems: 398, badge: 'gold' },
    { rank: 4, name: 'Sneha Reddy', college: 'IIT Madras', points: 2634, solvedProblems: 387, badge: 'silver' },
    { rank: 5, name: 'Vikash Singh', college: 'NIT Trichy', points: 2587, solvedProblems: 365, badge: 'silver' },
    { rank: 6, name: 'Ananya Gupta', college: 'DTU Delhi', points: 2521, solvedProblems: 342, badge: 'silver' },
    { rank: 7, name: 'Rohit Jain', college: 'VIT Vellore', points: 2487, solvedProblems: 329, badge: 'silver' },
    { rank: 8, name: 'Kavya Nair', college: 'IIIT Hyderabad', points: 2445, solvedProblems: 318, badge: 'bronze' }
  ];

  const codingClubs = [
    {
      name: 'IIT Delhi Coding Club',
      college: 'IIT Delhi',
      members: 850,
      events: 24,
      founded: '2015',
      activities: ['Weekly Contests', 'Algorithm Tutorials', 'Interview Prep'],
      rating: 4.8
    },
    {
      name: 'Stanford CS Society',
      college: 'Stanford University',
      members: 1200,
      events: 32,
      founded: '2012',
      activities: ['Hackathons', 'Tech Talks', 'Open Source Projects'],
      rating: 4.9
    },
    {
      name: 'MIT Programming Club',
      college: 'MIT',
      members: 950,
      events: 28,
      founded: '2014',
      activities: ['Research Projects', 'Coding Bootcamps', 'Mentorship'],
      rating: 4.7
    },
    {
      name: 'CMU Code Crafters',
      college: 'Carnegie Mellon',
      members: 780,
      events: 21,
      founded: '2016',
      activities: ['System Design', 'Competitive Programming', 'Industry Connect'],
      rating: 4.6
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'gold': return 'bg-yellow-100 text-yellow-800';
      case 'silver': return 'bg-gray-100 text-gray-800';
      case 'bronze': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Campus Programming Community
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Connect with coding clubs, participate in competitions, and showcase your programming skills across top universities worldwide
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {campusStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className={stat.color} size={32} />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-indigo-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { id: 'overview', name: 'Overview', icon: Target },
            { id: 'colleges', name: 'Top Colleges', icon: Award },
            { id: 'events', name: 'Events', icon: Calendar },
            { id: 'leaderboard', name: 'Leaderboard', icon: Trophy },
            { id: 'clubs', name: 'Coding Clubs', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon size={20} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Events */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
                <div className="grid gap-6">
                  {upcomingEvents.slice(0, 2).map((event) => (
                    <div key={event.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {event.tags.map((tag, index) => (
                              <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(event.difficulty)}`}>
                          {event.difficulty}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{event.participants} participants</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Trophy size={16} />
                          <span>{event.prizes}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Top Performers */}
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Campus Performers</h2>
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="space-y-4">
                    {leaderboard.slice(0, 5).map((student) => (
                      <div key={student.rank} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                            student.rank <= 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gray-500'
                          }`}>
                            #{student.rank}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{student.name}</h3>
                            <p className="text-sm text-gray-600">{student.college}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="font-bold text-lg text-indigo-600">{student.points}</div>
                          <div className="text-sm text-gray-500">{student.solvedProblems} solved</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Campus Activity</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Students Today</span>
                    <span className="font-bold text-green-600">12.5K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Problems Solved</span>
                    <span className="font-bold text-blue-600">45.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Contests This Month</span>
                    <span className="font-bold text-purple-600">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">New Clubs Formed</span>
                    <span className="font-bold text-orange-600">23</span>
                  </div>
                </div>
              </div>

              {/* Featured Clubs */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Clubs</h3>
                <div className="space-y-4">
                  {codingClubs.slice(0, 3).map((club, index) => (
                    <div key={index} className="p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-gray-900">{club.name}</h4>
                      <p className="text-sm text-gray-600">{club.college}</p>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>{club.members} members</span>
                        <div className="flex items-center space-x-1">
                          <Star size={12} className="text-yellow-500" />
                          <span>{club.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Community */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Join Your Campus</h3>
                <p className="text-gray-600 mb-4">
                  Connect with your college coding community and participate in exclusive events.
                </p>
                <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Register Your College
                </button>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'colleges' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Top Programming Colleges</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search colleges..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
            </div>

            <div className="grid gap-8">
              {topColleges.map((college) => (
                <div key={college.rank} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                              #{college.rank}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{college.shortName}</h3>
                          </div>
                          <h4 className="text-lg text-gray-600 mb-2">{college.name}</h4>
                          <div className="flex items-center space-x-1 text-gray-500 mb-4">
                            <MapPin size={16} />
                            <span>{college.location}</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-2">
                            <Star size={16} className="text-yellow-500 fill-current" />
                            <span className="font-bold">{college.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm">
                        <div>
                          <span className="text-gray-500">Students:</span>
                          <div className="font-bold text-indigo-600">{college.students.toLocaleString()}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Coding Clubs:</span>
                          <div className="font-bold text-green-600">{college.codingClubs}</div>
                        </div>
                        <div>
                          <span className="text-gray-500">Competitions:</span>
                          <div className="font-bold text-purple-600">{college.competitions}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Key Activities:</h5>
                        <div className="flex flex-wrap gap-2">
                          {college.activities.map((activity, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                        <span>View College Profile</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'events' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Campus Events</h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option>All Events</option>
                  <option>Competitions</option>
                  <option>Workshops</option>
                  <option>Hackathons</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{event.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy size={16} />
                      <span>{event.prizes}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Organized by <span className="font-medium">{event.organizer}</span>
                    </div>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'leaderboard' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Campus Leaderboard</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Top Performers</h3>
                  <div className="flex items-center space-x-4">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                      <option>This Month</option>
                      <option>Last Month</option>
                      <option>All Time</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Rank</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Student</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">College</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Points</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Problems Solved</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Badge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((student) => (
                      <tr key={student.rank} className="border-t hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                            student.rank <= 3 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 'bg-gray-500'
                          }`}>
                            #{student.rank}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-semibold text-gray-900">{student.name}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-gray-600">{student.college}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-bold text-indigo-600">{student.points}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-gray-900">{student.solvedProblems}</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getBadgeColor(student.badge)}`}>
                            {student.badge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'clubs' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Coding Clubs</h2>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Create New Club
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {codingClubs.map((club, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{club.name}</h3>
                      <p className="text-gray-600 mb-3">{club.college}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="font-bold">{club.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-500">Members:</span>
                      <div className="font-bold text-indigo-600">{club.members}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Events:</span>
                      <div className="font-bold text-green-600">{club.events}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Founded:</span>
                      <div className="font-bold text-purple-600">{club.founded}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Activities:</h5>
                    <div className="flex flex-wrap gap-2">
                      {club.activities.map((activity, activityIndex) => (
                        <span key={activityIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                      Join Club
                    </button>
                    <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Campus;