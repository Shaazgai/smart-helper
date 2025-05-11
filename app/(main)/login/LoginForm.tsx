'use client';

import React, { useState } from 'react';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = () => {
    // Clear previous error
    setErrorMsg('');
    
    // Simple validation
    if (!email) {
      setErrorMsg('И-мэйл заавал оруулна уу');
      return;
    }
    
    if (!password) {
      setErrorMsg('Нууц үг заавал оруулна уу');
      return;
    }
    
    if (!isLogin) {
      if (!name) {
        setErrorMsg('Нэр заавал оруулна уу');
        return;
      }
      
      if (!confirmPassword) {
        setErrorMsg('Нууц үгээ давтан оруулна уу');
        return;
      }
      
      if (password !== confirmPassword) {
        setErrorMsg('Нууц үг таарахгүй байна');
        return;
      }
    }
    
    // Success case - here you would call your API
    alert(isLogin ? 'Амжилттай нэвтэрлээ!' : 'Амжилттай бүртгэгдлээ!');
    
    // Reset form
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrorMsg('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-gray-700"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-gray-700"
                placeholder="••••••"
              />
            </div>
          )}
          
          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none"
          >
            {isLogin ? 'Нэвтрэх' : 'Бүртгүүлэх'}
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