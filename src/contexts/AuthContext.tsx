import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'student' | 'instructor' | 'admin';
  college?: string;
  year?: string;
  skills: string[];
  problemsSolved: number;
  contestsParticipated: number;
  articlesRead: number;
  coursesCompleted: number;
  streak: number;
  points: number;
  badges: string[];
  joinedDate: string;
  lastActive: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('gfg_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      role: 'student',
      college: 'IIT Delhi',
      year: '3rd Year',
      skills: ['JavaScript', 'React', 'Python', 'Data Structures'],
      problemsSolved: 247,
      contestsParticipated: 15,
      articlesRead: 89,
      coursesCompleted: 3,
      streak: 12,
      points: 2847,
      badges: ['Problem Solver', 'Contest Warrior', 'Learning Enthusiast'],
      joinedDate: '2023-01-15',
      lastActive: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('gfg_user', JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const signup = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      role: 'student',
      college: userData.college,
      year: userData.year,
      skills: [],
      problemsSolved: 0,
      contestsParticipated: 0,
      articlesRead: 0,
      coursesCompleted: 0,
      streak: 0,
      points: 0,
      badges: ['New Member'],
      joinedDate: new Date().toISOString(),
      lastActive: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem('gfg_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gfg_user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('gfg_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      updateProfile,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
};