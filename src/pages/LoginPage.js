import React, { useState } from 'react';

export default function LoginPage({ onLoginSuccess, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    console.log('Attempting login with:', email);
    // Simulate success
    onLoginSuccess();
  };

  return (
    <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-white py-20 md:py-32 font-serif flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Login</h2>
          <form onSubmit={handleLogin}>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-8">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
              <a href="#" className="text-xs text-purple-600 hover:underline float-right mt-1">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">Login</button>
          </form>
          <p className="text-center text-gray-600 text-sm mt-8">Don't have an account? <a href="#" onClick={(e) => { e.preventDefault(); /* TODO: Navigate to signup */ }} className="text-purple-600 hover:underline font-semibold">Sign Up</a></p>
        </div>
      </div>
    </section>
  );
}
