import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results))
      .catch(error => console.error('Error fetching planets:', error));
  }, []);

  const addToFavorites = (planet) => {
    actions.addToFavorites({
      uid: planet.url,
      type: 'planets',
      properties: {
        name: planet.name
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: 'red' }} className="mb-4">
        Planets
      </h2>
      <div className="row flex-nowrap overflow-scroll">
        {planets.map(planet => (
          <div key={planet.url} className="col-md-4 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img
                src="https://placehold.jp/400x200.png"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/planets/${extractId(planet.url)}`}
                    className="btn btn-outline-primary"
                  >
                    Learn More!
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => addToFavorites(planet)}
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

export default Planets;
