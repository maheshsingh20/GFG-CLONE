import React, { useState } from 'react';
import { Brain, Clock, Trophy, Target, Play, CheckCircle, XCircle, RotateCcw, Award, TrendingUp, Users, Book } from 'lucide-react';

const Quiz: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Topics', count: 150, icon: Brain },
    { id: 'ds', name: 'Data Structures', count: 45, icon: Target },
    { id: 'algo', name: 'Algorithms', count: 38, icon: Trophy },
    { id: 'java', name: 'Java', count: 32, icon: Book },
    { id: 'python', name: 'Python', count: 28, icon: Book },
    { id: 'js', name: 'JavaScript', count: 25, icon: Book },
    { id: 'dbms', name: 'DBMS', count: 22, icon: Target }
  ];

  const quizzes = [
    {
      id: 1,
      title: 'Data Structures Fundamentals',
      description: 'Test your knowledge of arrays, linked lists, stacks, and queues',
      category: 'ds',
      difficulty: 'Intermediate',
      questions: 20,
      duration: 30,
      attempts: 15420,
      rating: 4.6,
      tags: ['Arrays', 'Linked Lists', 'Stacks', 'Queues'],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Python Programming Basics',
      description: 'Essential Python concepts including syntax, data types, and functions',
      category: 'python',
      difficulty: 'Beginner',
      questions: 15,
      duration: 20,
      attempts: 23890,
      rating: 4.8,
      tags: ['Syntax', 'Data Types', 'Functions', 'OOP'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Algorithm Complexity Analysis',
      description: 'Understanding Big O notation, time and space complexity',
      category: 'algo',
      difficulty: 'Advanced',
      questions: 25,
      duration: 45,
      attempts: 8730,
      rating: 4.4,
      tags: ['Big O', 'Time Complexity', 'Space Complexity'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Features',
      description: 'Modern JavaScript features including arrow functions, promises, async/await',
      category: 'js',
      difficulty: 'Intermediate',
      questions: 18,
      duration: 25,
      attempts: 19560,
      rating: 4.7,
      tags: ['ES6', 'Promises', 'Async/Await', 'Modules'],
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Database Management Systems',
      description: 'SQL queries, normalization, transactions, and database design',
      category: 'dbms',
      difficulty: 'Intermediate',
      questions: 22,
      duration: 35,
      attempts: 12340,
      rating: 4.5,
      tags: ['SQL', 'Normalization', 'Transactions', 'Indexing'],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Java Object-Oriented Programming',
      description: 'Classes, inheritance, polymorphism, and advanced OOP concepts',
      category: 'java',
      difficulty: 'Advanced',
      questions: 20,
      duration: 40,
      attempts: 16780,
      rating: 4.3,
      tags: ['Classes', 'Inheritance', 'Polymorphism', 'Interfaces'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const sampleQuestions = [
    {
      id: 1,
      question: "What is the time complexity of binary search algorithm?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      correct: 1,
      explanation: "Binary search divides the search space in half at each step, resulting in O(log n) time complexity."
    },
    {
      id: 2,
      question: "Which data structure follows LIFO (Last In, First Out) principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      correct: 1,
      explanation: "Stack follows LIFO principle where the last element inserted is the first one to be removed."
    },
    {
      id: 3,
      question: "What is the worst-case time complexity of quicksort?",
      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
      correct: 1,
      explanation: "Quicksort has O(n²) worst-case complexity when the pivot is always the smallest or largest element."
    },
    {
      id: 4,
      question: "In a binary tree, what is the maximum number of nodes at level k?",
      options: ["2^k", "2^(k-1)", "k", "2k"],
      correct: 0,
      explanation: "At level k in a binary tree, there can be at most 2^k nodes (assuming level starts from 0)."
    },
    {
      id: 5,
      question: "Which of the following is NOT a stable sorting algorithm?",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Insertion Sort"],
      correct: 1,
      explanation: "Quick Sort is not stable because it may change the relative order of equal elements during partitioning."
    }
  ];

  const topPerformers = [
    { name: 'Arjun Sharma', score: 95, quizzes: 156, avatar: 'AS' },
    { name: 'Priya Patel', score: 92, quizzes: 142, avatar: 'PP' },
    { name: 'Rahul Kumar', score: 89, quizzes: 134, avatar: 'RK' },
    { name: 'Sneha Reddy', score: 87, quizzes: 128, avatar: 'SR' }
  ];

  const recentActivity = [
    { user: 'Alex completed', quiz: 'Python Programming Basics', score: 85, time: '2 hours ago' },
    { user: 'Sarah completed', quiz: 'Data Structures Fundamentals', score: 92, time: '4 hours ago' },
    { user: 'Mike completed', quiz: 'Algorithm Complexity Analysis', score: 78, time: '6 hours ago' },
    { user: 'Emma completed', quiz: 'JavaScript ES6+ Features', score: 88, time: '8 hours ago' }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredQuizzes = selectedCategory === 'all' 
    ? quizzes 
    : quizzes.filter(quiz => quiz.category === selectedCategory);

  const startQuiz = (quizId: number) => {
    setActiveQuiz(quizId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers, selectedAnswer!];
    setAnswers(newAnswers);
    
    if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (activeQuiz && !showResult) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Quiz Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Data Structures Fundamentals
              </h1>
              <button
                onClick={restartQuiz}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <XCircle size={24} />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {sampleQuestions.length}
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Clock size={16} />
                <span>25:30</span>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              {question.question}
            </h2>
            
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-300 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                  selectedAnswer !== null
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestion === sampleQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-8">
              <div className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold ${
                percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}>
                {percentage}%
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : 'Keep Learning!'}
            </h1>
            
            <p className="text-gray-600 mb-8">
              You scored {score} out of {sampleQuestions.length} questions correctly
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{score}/{sampleQuestions.length}</div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{percentage}%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">15:32</div>
                <div className="text-sm text-gray-600">Time Taken</div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4">
              <button
                onClick={restartQuiz}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <RotateCcw size={20} />
                <span>Try Another Quiz</span>
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Review Answers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Test Your Programming Knowledge
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Challenge yourself with comprehensive quizzes covering data structures, algorithms, and programming languages
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-purple-200">Quiz Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-purple-200">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-purple-200">Quiz Attempts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-purple-200">Average Score</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Quiz Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white hover:bg-purple-50 text-gray-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  <Icon className="mx-auto mb-2" size={24} />
                  <div className="font-semibold text-sm mb-1">{category.name}</div>
                  <div className={`text-xs ${
                    selectedCategory === category.id ? 'text-purple-200' : 'text-gray-500'
                  }`}>
                    {category.count} quizzes
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Quiz Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Quizzes' : categories.find(c => c.id === selectedCategory)?.name + ' Quizzes'}
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Easiest</option>
                <option>Hardest</option>
              </select>
            </div>

            <div className="grid gap-8">
              {filteredQuizzes.map((quiz) => (
                <div key={quiz.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={quiz.image}
                        alt={quiz.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                          {quiz.difficulty}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                          {categories.find(c => c.id === quiz.category)?.name}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {quiz.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">{quiz.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {quiz.tags.map((tag, index) => (
                          <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Brain size={16} />
                            <span>{quiz.questions} questions</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{quiz.duration} min</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span>{quiz.attempts.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => startQuiz(quiz.id)}
                          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2"
                        >
                          <Play size={16} />
                          <span>Start Quiz</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Top Performers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Trophy className="text-yellow-500" size={24} />
                <span>Top Performers</span>
              </h3>
              
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-purple-500'
                    }`}>
                      {performer.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{performer.name}</div>
                      <div className="text-sm text-gray-500">
                        {performer.score}% avg • {performer.quizzes} quizzes
                      </div>
                    </div>
                    <div className={`text-lg font-bold ${
                      index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-500' : 'text-purple-500'
                    }`}>
                      #{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="text-green-600" size={24} />
                <span>Recent Activity</span>
              </h3>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-sm text-gray-900 mb-1">
                      <span className="font-medium">{activity.user}</span> {activity.quiz}
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Score: {activity.score}%</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Challenge */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center space-x-2">
                <Award className="text-purple-600" size={24} />
                <span>Weekly Challenge</span>
              </h3>
              
              <p className="text-gray-600 mb-4">
                Complete 5 quizzes this week and earn a special badge!
              </p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>3/5 completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <button className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                View Challenges
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;