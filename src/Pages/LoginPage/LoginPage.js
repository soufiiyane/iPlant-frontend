import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('https://ssmb5oqxxa.execute-api.us-east-1.amazonaws.com/dev/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          body: { email, password },
        }),
      });

      const data = await response.json();
      const userData = JSON.parse(data.body);

      if (!response.ok) {
        throw new Error('Login failed');
      }

      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/', { replace: true });
    } catch {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            className="bg-titlebgdark text-white py-2 w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default LoginPage;
