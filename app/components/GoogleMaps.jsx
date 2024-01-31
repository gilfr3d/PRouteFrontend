import React, { useEffect, useState } from 'react';
import {
  Map,
  APIProvider,
  useMapsLibrary,
  useMap,
} from '@vis.gl/react-google-maps';

const GoogleMaps = () => {
  const position = { lat: -34.397, lng: 150.644 };
  return (

    <div className="">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <Map center={position} zoom={9} fullscreenControl={false}>
          <Direction />
        </Map>
      </APIProvider>
    </div> 
  
  );
};

export default GoogleMaps;

function Direction() {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] = useState();
  const [directionsRenderer, setDirectionsRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);
  // console.log(directionsService);
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: 'Al Khalidiyah - W17-01, UAE, Abu Dhabi',
        destination: '201 Bldg. 5 beside Lavazza Bldg. UAE, Abu Dhabi',
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });
  }, [directionsService, directionsRenderer]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);
  console.log(routes);
  if (!leg) return null;
  return (
    <div>
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(',')} to {leg.end_address.split(',')}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>

      <h2>Other Routes</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
