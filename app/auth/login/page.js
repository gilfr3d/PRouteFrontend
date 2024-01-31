"use client"
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Login = () => {
  const { register, handleSubmit, setError } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:7000/api/login', data);
      console.log('Login successful:', response.data);
      router.push('/dashboard',{ scroll: false })
    
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      setError('password', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="text"
            id="email"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
          />
          {setError && (
            <p className="text-red-500 text-xs italic">{setError.password?.message}</p>
          )}
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
