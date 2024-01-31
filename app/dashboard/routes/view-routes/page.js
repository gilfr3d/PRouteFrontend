'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import GoogleMaps from '@/app/components/GoogleMaps';

const Routes = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4091/api/get-plan-route'
        ); 
        setRoutes(response.data);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  return (
    <div className="container mx-auto pt-6">
      <div className="mt-8 p-4 flex justify-between items-center">
        <div>
          <Link href="add-route">
            <button className="bg-orange-300 p-2 rounded-md font-bold text-white">
              Plan New Route
            </button>
          </Link>
        </div>
        <div className="ml-auto">
          <input
            type="text"
            placeholder="Search Route..."
            className="border rounded-md p-2"
          />
        </div>
      </div>

      <div className="pl-2 pr-2">
        <GoogleMaps />
      </div>
      <table className="min-w-full mt-4 border border-gray-300 p-2">
        <thead>
          <tr>
            <th className="border bg-gray-100 px-4 py-2">Route Name</th>
            <th className="border bg-gray-100 px-4 py-2">Distance</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td className="border px-4 py-2">{route.name}</td>
              <td className="border px-4 py-2">{route.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Routes;
