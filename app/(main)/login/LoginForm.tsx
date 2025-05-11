'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginForm() {
  const router = useRouter();
  const { login, register, isAuthenticated, showRegistrationReminder, setReminder } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push('/feed');
  //   }
  // }, [isAuthenticated, router]);

  // Display registration reminder if needed
  useEffect(() => {
    if (showRegistrationReminder && !isAuthenticated) {
      setIsLogin(false);
    }
  }, [showRegistrationReminder, isAuthenticated]);

  const handleSubmit = async () => {
    // Clear previous messages
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);
    
    // Simple validation
    if (!email) {
      setErrorMsg('И-мэйл заавал оруулна уу');
      setIsLoading(false);
      return;
    }
    
    if (!password) {
      setErrorMsg('Нууц үг заавал оруулна уу');
      setIsLoading(false);
      return;
    }
    
    if (!isLogin) {
      if (!name) {
        setErrorMsg('Нэр заавал оруулна уу');
        setIsLoading(false);
        return;
      }
      
      if (!confirmPassword) {
        setErrorMsg('Нууц үгээ давтан оруулна уу');
        setIsLoading(false);
        return;
      }
      
      if (password !== confirmPassword) {
        setErrorMsg('Нууц үг таарахгүй байна');
        setIsLoading(false);
        return;
      }
      
      // Registration logic
      const success = await register(name, email, password);
      if (success) {
        setSuccessMsg('Амжилттай бүртгэгдлээ!');
        setTimeout(() => {
          router.push('/feed');
        }, 1500);
      } else {
        setErrorMsg('И-мэйл хаяг бүртгэлтэй байна');
      }
    } else {
      // Login logic
      const success = await login(email, password);
      if (success) {
        setSuccessMsg('Амжилттай нэвтэрлээ!');
        setTimeout(() => {
          router.push('/feed');
        }, 1500);
      } else {
        setErrorMsg('И-мэйл эсвэл нууц үг буруу байна');
      }
    }
    
    setIsLoading(false);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrorMsg('');
    setSuccessMsg('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
    
    // Dismiss reminder when toggling to login
    if (!isLogin) {
      setReminder(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
          {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
        </h1>
        
        {/* Error message display */}
        {errorMsg && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {errorMsg}
          </div>
        )}
        
        {/* Success message display */}
        {successMsg && (
          <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMsg}
          </div>
        )}
        
        {/* Registration reminder */}
        {showRegistrationReminder && !isLogin && !isAuthenticated && (
          <div className="mb-4 p-2 bg-blue-100 border border-blue-400 text-blue-700 rounded">
            Та бүртгүүлснээр бүх үйлчилгээг бүрэн ашиглах боломжтой
          </div>
        )}
        
        <div className="space-y-4">
          {/* Name field (only for signup) */}
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Нэр
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Таны нэр"
              />
            </div>
          )}
          
          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              И-мэйл
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="tanii@email.com"
            />
          </div>
          
          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Нууц үг
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
              placeholder="••••••"
            />
          </div>
          
          {/* Confirm Password field (only for signup) */}
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Нууц үг давтах
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
                placeholder="••••••"
              />
            </div>
          )}
          
          {/* Submit button */}
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full ${isLoading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'} text-white py-2 px-4 rounded-md focus:outline-none transition-colors`}
          >
            {isLoading ? 'Уншиж байна...' : (isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх')}
          </button>
          
          {/* Forgot password (only for login) */}
          {isLogin && (
            <div className="text-center mt-2">
              <button className="text-sm text-gray-700 hover:underline">
                Нууц үгээ мартсан уу?
              </button>
            </div>
          )}
        </div>
        
        {/* Toggle between login and signup */}
        <div className="mt-6 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-gray-700 hover:underline focus:outline-none"
          >
            {isLogin
              ? 'Шинээр бүртгүүлэх'
              : 'Хэрэв бүртгэлтэй бол нэвтрэх'}
          </button>
        </div>
      </div>
    </div>
  );
}