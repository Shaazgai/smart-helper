'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define user type
export type User = {
  name: string;
  email: string;
};

// Define auth context type
type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setReminder: (reminder: boolean) => void;
  showRegistrationReminder: boolean;
};

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showRegistrationReminder, setShowRegistrationReminder] = useState(false);

  // Check for stored user on mount
  useEffect(() => {
    const checkUser = () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedReminder = localStorage.getItem('registrationReminder');
        
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setShowRegistrationReminder(false);
        } else if (storedReminder !== 'dismissed') {
          setShowRegistrationReminder(true);
        }
      } catch (error) {
        console.error('Error accessing localStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkUser();
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // In a real app, you'd validate against stored credentials
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const foundUser = users.find((u: any) => 
        u.email === email && u.password === password
      );
      
      if (foundUser) {
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Get existing users or create empty array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      if (users.some((user: any) => user.email === email)) {
        return false;
      }
      
      // Add new user
      const newUser = { name, email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Auto login after registration
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      
      // Dismiss registration reminder
      setShowRegistrationReminder(false);
      localStorage.setItem('registrationReminder', 'dismissed');
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Set reminder function
  const setReminder = (reminder: boolean) => {
    setShowRegistrationReminder(reminder);
    localStorage.setItem('registrationReminder', reminder ? 'show' : 'dismissed');
  };

  // Context value
  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    setReminder,
    showRegistrationReminder
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for using auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}