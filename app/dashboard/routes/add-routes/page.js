"use client"
import GoogleMaps from '@/app/components/GoogleMaps';
import React, { useState, useEffect } from 'react';

const AddRoutes = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [waypoints, setWaypoints] = useState('');
  const [distanceUnit, setDistanceUnit] = useState('');
  const [routeSchedule, setRouteSchedule] = useState('');
  const [time, setTime] = useState('');

  // State for current location, origin, and distance
  const [currentLocation, setCurrentLocation] = useState(null);
  const [origin, setOrigin] = useState('');
  const [distance, setDistance] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to submit the form data
    console.log('Form submitted:', { name, waypoints, distanceUnit, routeSchedule, time });

    // Reset form fields after submission (if needed)
    setName('');
    setWaypoints('');
    setDistanceUnit('');
    setRouteSchedule('');
    setTime('');
  };

  useEffect(() => {
    // Get current location when the component mounts
    const getCurrentLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              setCurrentLocation(currentLocation);
              setOrigin(`${currentLocation.lat},${currentLocation.lng}`);
            },
            (error) => {
              console.error('Error getting current location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error('Error getting current location:', error);
      }
    };

    getCurrentLocation();
  }, []); // Run once on component mount

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Enter New Route</h2>
      <GoogleMaps />

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
         {/* Form Fields */}
         <div className="mb-4">
           <label htmlFor="name" className="block text-sm font-medium text-gray-600">
             Route Name
           </label>
        <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="routeSchedule" className="block text-sm font-medium text-gray-600">
            Route Schedule
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Add Route
          </button>
        </div>
      </form>
      {/* Display current location, origin, and distance */}
      {currentLocation && (
        <div className="mb-4">
          <p className="font-semibold">Current Location:</p>
          <p>{`Latitude: ${currentLocation.lat}, Longitude: ${currentLocation.lng}`}</p>
        </div>
      )}

      {origin && (
        <div className="mb-4">
          <p className="font-semibold">Origin:</p>
          <p>{origin}</p>
        </div>
      )}

      {distance && (
        <div className="mb-4">
          <p className="font-semibold">Distance:</p>
          <p>{distance}</p>
        </div>
      )}
    </div>
  );
};

export default AddRoutes;

// import React, { useState } from 'react';

// const AddRoutes = () => {
//   // State for form fields
//   const [name, setName] = useState('');
//   const [waypoints, setWaypoints] = useState('');
//   const [distanceUnit, setDistanceUnit] = useState('');
//   const [routeSchedule, setRouteSchedule] = useState('');
//   const [time, setTime] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add your logic to submit the form data
//     console.log('Form submitted:', { name, waypoints, distanceUnit, routeSchedule, time });

//     // Reset form fields after submission (if needed)
//     setName('');
//     setWaypoints('');
//     setDistanceUnit('');
//     setRouteSchedule('');
//     setTime('');
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Enter New Route</h2>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
//         {/* Form Fields */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-600">
//             Route Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="routeSchedule" className="block text-sm font-medium text-gray-600">
//             Route Schedule
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 p-2 w-full border rounded-md"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="mt-4">
//           <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
//             Add Route
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddRoutes;
