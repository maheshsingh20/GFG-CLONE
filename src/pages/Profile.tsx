import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Edit, Trophy, Target, BookOpen, Award, Calendar, MapPin, Mail, Github, Linkedin, Twitter, Star, TrendingUp, Users, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    college: user?.college || '',
    year: user?.year || '',
    skills: user?.skills || []
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const achievements = [
    { title: 'Problem Solver', description: 'Solved 100+ problems', icon: Target, color: 'bg-green-500' },
    { title: 'Contest Warrior', description: 'Participated in 10+ contests', icon: Trophy, color: 'bg-yellow-500' },
    { title: 'Learning Enthusiast', description: 'Completed 5+ courses', icon: BookOpen, color: 'bg-blue-500' },
    { title: 'Streak Master', description: 'Maintained 30-day streak', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  const recentActivity = [
    { type: 'problem', title: 'Solved "Two Sum"', time: '2 hours ago', points: 10 },
    { type: 'article', title: 'Read "Dynamic Programming Guide"', time: '5 hours ago', points: 5 },
    { type: 'contest', title: 'Participated in Weekly Contest', time: '1 day ago', points: 50 },
    { type: 'course', title: 'Completed "React Fundamentals"', time: '3 days ago', points: 100 }
  ];

  const skillCategories = [
    { name: 'Programming Languages', skills: ['JavaScript', 'Python', 'Java', 'C++'] },
    { name: 'Web Technologies', skills: ['React', 'Node.js', 'HTML/CSS', 'MongoDB'] },
    { name: 'Data Science', skills: ['Machine Learning', 'Data Analysis', 'SQL'] },
    { name: 'Tools & Frameworks', skills: ['Git', 'Docker', 'AWS', 'Express.js'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 h-32"></div>
          <div className="relative px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16">
              <div className="relative">
                <img
                  src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=10b981&color=fff&size=128`}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-gray-600">{user.college} • {user.year}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>Joined {new Date(user.joinedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>India</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <Edit size={16} />
                    <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{user.problemsSolved}</div>
                    <div className="text-sm text-gray-600">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{user.contestsParticipated}</div>
                    <div className="text-sm text-gray-600">Contests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{user.articlesRead}</div>
                    <div className="text-sm text-gray-600">Articles Read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{user.streak}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{user.points}</div>
                    <div className="text-sm text-gray-600">Total Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Edit Profile Form */}
            {isEditing && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Edit Profile</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
                    <input
                      type="text"
                      value={editData.college}
                      onChange={(e) => setEditData({ ...editData, college: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <select
                      value={editData.year}
                      onChange={(e) => setEditData({ ...editData, year: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Award className="text-yellow-500" size={24} />
                <span>Achievements</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center text-white`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Skills & Technologies</h2>
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-gray-900 mb-3">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Clock className="text-blue-500" size={24} />
                <span>Recent Activity</span>
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-green-600 font-semibold">+{activity.points} pts</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-600">{user.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Github size={16} className="text-gray-400" />
                  <span className="text-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={16} className="text-gray-400" />
                  <span className="text-gray-600">linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter size={16} className="text-gray-400" />
                  <span className="text-gray-600">@johndoe</span>
                </div>
              </div>
            </div>

            {/* Progress Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Progress Overview</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Problem Solving</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Course Completion</span>
                    <span>60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Contest Participation</span>
                    <span>45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Badges</h3>
              <div className="grid grid-cols-3 gap-3">
                {user.badges.map((badge, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                      <Star size={20} />
                    </div>
                    <div className="text-xs text-gray-600">{badge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;