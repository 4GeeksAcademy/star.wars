import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data.results))
      .catch(error => console.error('Error fetching vehicles:', error));
  }, []);

  const addToFavorites = (vehicle) => {
    actions.addToFavorites({
      uid: vehicle.url,
      type: 'vehicles',
      properties: {
        name: vehicle.name
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: 'red' }} className="mb-4">
        Vehicles
      </h2>
      <div className="row flex-nowrap overflow-scroll">
        {vehicles.map(vehicle => (
          <div key={vehicle.url} className="col-md-4 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img
                src="https://placehold.jp/400x200.png"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/vehicles/${extractId(vehicle.url)}`}
                    className="btn btn-outline-primary"
                  >
                    Learn More!
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => addToFavorites(vehicle)}
                  >
                    <i className="far fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function to extract ID from SWAPI URL
function extractId(url) {
  const idRegExp = /\/(\d+)\/$/;
  return url.match(idRegExp)[1];
}

export default Vehicles;
