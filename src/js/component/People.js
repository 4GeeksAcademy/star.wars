import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const People = () => {
  const { store, actions } = useContext(Context);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setPeople(data.results))
      .catch(error => console.error('Error fetching people:', error));
  }, []);

  const addToFavorites = (person) => {
    actions.addToFavorites({
      uid: person.url,
      type: 'people',
      properties: {
        name: person.name
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: 'red' }} className="mb-4">
        Characters
      </h2>
      <div className="row flex-nowrap overflow-scroll">
        {people.map(person => (
          <div key={person.url} className="col-md-4 mb-4">
            <div className="card" style={{ width: '25rem' }}>
              <img
                src="https://placehold.jp/400x200.png"
                className="card-img-top"
                alt="Placeholder"
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">
                  <strong>Gender:</strong> {person.gender}
                  <br />
                  <strong>Birth Year:</strong> {person.birth_year}
                </p>
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/people/${getIdFromUrl(person.url)}`}
                    className="btn btn-outline-primary"
                  >
                    Learn More
                  </Link>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => addToFavorites(person)}
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
const getIdFromUrl = url => {
  const segments = url.split('/');
  return segments[segments.length - 2];
};

export default People;
