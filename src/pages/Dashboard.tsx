import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Trophy, Target, BookOpen, Clock, TrendingUp, Calendar, Users, Award, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your dashboard</h2>
          <Link to="/login" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Login
          </Link>
        </div>
      </div>
    );
  }

  const todaysTasks = [
    { title: 'Complete Daily Coding Challenge', type: 'problem', difficulty: 'Medium', points: 15 },
    { title: 'Read "System Design Basics"', type: 'article', difficulty: 'Beginner', points: 10 },
    { title: 'Practice SQL Queries', type: 'practice', difficulty: 'Easy', points: 8 },
    { title: 'Watch React Tutorial', type: 'course', difficulty: 'Intermediate', points: 20 }
  ];

  const upcomingContests = [
    { name: 'Weekly Coding Contest', date: '2024-02-15', time: '8:00 PM', participants: 2500 },
    { name: 'Algorithm Challenge', date: '2024-02-18', time: '6:00 PM', participants: 1800 },
    { name: 'Data Structures Quiz', date: '2024-02-20', time: '7:00 PM', participants: 3200 }
  ];

  const recentAchievements = [
    { title: 'Problem Solver', description: 'Solved 250+ problems', date: '2 days ago', icon: Target },
    { title: 'Streak Master', description: '15-day coding streak', date: '1 week ago', icon: TrendingUp },
    { title: 'Course Completer', description: 'Finished React Course', date: '2 weeks ago', icon: BookOpen }
  ];

  const learningPath = [
    { title: 'Data Structures Basics', completed: true, progress: 100 },
    { title: 'Algorithm Fundamentals', completed: true, progress: 100 },
    { title: 'Dynamic Programming', completed: false, progress: 65 },
    { title: 'System Design', completed: false, progress: 30 },
    { title: 'Advanced Algorithms', completed: false, progress: 0 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
              <p className="text-green-100 text-lg">Ready to continue your coding journey?</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{user.streak} Days</div>
              <div className="text-green-200">Current Streak</div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-600">{user.problemsSolved}</div>
                <div className="text-gray-600">Problems Solved</div>
              </div>
              <Target className="text-green-600" size={32} />
            </div>
            <div className="mt-4 text-sm text-gray-500">+12 this week</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-600">{user.contestsParticipated}</div>
                <div className="text-gray-600">Contests</div>
              </div>
              <Trophy className="text-blue-600" size={32} />
            </div>
            <div className="mt-4 text-sm text-gray-500">+2 this month</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">{user.coursesCompleted}</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <BookOpen className="text-purple-600" size={32} />
            </div>
            <div className="mt-4 text-sm text-gray-500">1 in progress</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-orange-600">{user.points}</div>
                <div className="text-gray-600">Total Points</div>
              </div>
              <Star className="text-orange-600" size={32} />
            </div>
            <div className="mt-4 text-sm text-gray-500">+150 this week</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Tasks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
                  <Clock className="text-blue-500" size={24} />
                  <span>Today's Tasks</span>
                </h2>
                <Link to="/practice" className="text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {todaysTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <h3 className="font-medium text-gray-900">{task.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(task.difficulty)}`}>
                            {task.difficulty}
                          </span>
                          <span className="text-sm text-gray-500">{task.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold">+{task.points} pts</div>
                      <ChevronRight size={16} className="text-gray-400 mt-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Path Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-purple-500" size={24} />
                <span>Learning Path Progress</span>
              </h2>

              <div className="space-y-4">
                {learningPath.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {item.completed ? '✓' : index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium ${item.completed ? 'text-gray-900' : 'text-gray-700'}`}>
                          {item.title}
                        </h3>
                        <span className="text-sm text-gray-500">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${item.completed ? 'bg-green-500' : 'bg-blue-500'}`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Award className="text-yellow-500" size={24} />
                <span>Recent Achievements</span>
              </h2>

              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                      <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                        <p className="text-sm text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Contests */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Trophy className="text-yellow-500" size={20} />
                <span>Upcoming Contests</span>
              </h3>

              <div className="space-y-4">
                {upcomingContests.map((contest, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">{contest.name}</h4>
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{contest.date}</span>
                      </div>
                      <span>{contest.time}</span>
                    </div>
                    <div className="flex items-center space-x-1 mt-1 text-sm text-gray-500">
                      <Users size={14} />
                      <span>{contest.participants} participants</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/practice"
                className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Contests →
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  to="/practice"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Solve Problems
                </Link>
                <Link
                  to="/tutorials"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn New Topic
                </Link>
                <Link
                  to="/quiz"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Take Quiz
                </Link>
                <Link
                  to="/ide"
                  className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Open IDE
                </Link>
              </div>
            </div>

            {/* Study Streak */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Study Streak</h3>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600 mb-2">{user.streak}</div>
                <div className="text-gray-600">Days in a row</div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {Array.from({ length: 7 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded ${
                      i < user.streak % 7 ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>

              <p className="text-sm text-gray-600 text-center">
                Keep it up! You're doing great 🔥
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;