import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VehiclesDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/vehicles/${id}/`)
      .then(response => response.json())
      .then(data => setVehicle(data))
      .catch(error => console.error('Error fetching vehicle:', error));
  }, [id]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src="https://placehold.jp/800x600.png" className="img-fluid" alt="Placeholder" />
        </div>
        <div className="col-md-6">
          <h2>{vehicle.name}</h2>
          Officia voluptate aliqua exercitation eiusmod qui commodo aliquip culpa duis ad sit nostrud esse reprehenderit. In occaecat amet excepteur enim laboris sunt excepteur. Consectetur est voluptate excepteur enim.

Nostrud exercitation magna quis ullamco laboris cupidatat exercitation esse culpa ipsum. Fugiat non consectetur aute irure dolor fugiat veniam irure reprehenderit labore magna nostrud. Amet dolor voluptate duis pariatur Lorem Lorem esse enim minim commodo cupidatat sit. Irure id nostrud magna eu. Id aute dolor laboris reprehenderit. Adipisicing minim eiusmod mollit esse anim commodo consequat officia quis laboris velit cillum ipsum magna. Aute laboris reprehenderit voluptate nisi Lorem duis magna adipisicing et.

Minim magna amet sit nisi do veniam nostrud nisi ipsum. Officia ipsum ipsum esse eiusmod cupidatat consectetur cillum pariatur velit id aliqua esse irure. Qui do ex non aliqua dolor quis adipisicing. Sunt irure laborum nulla aliquip.

Pariatur labore irure enim ea ea elit minim dolore enim deserunt velit eiusmod. Ad incididunt proident Lorem aute. Non et ullamco minim eu anim nostrud tempor sint pariatur.
        </div>
      </div>
      <div className="row mt-4" style={{color:"red"}}>
        <div className="col">
          <p><strong>Cargo Capacity:</strong> <br />
          {vehicle.cargo_capacity}</p>
        </div>
        <div className="col">
          <p><strong>Consumables:</strong> <br />
          {vehicle.consumables}</p>
        </div>
        <div className="col">
          <p><strong>Cost in Credits:</strong> <br />
           {vehicle.cost_in_credits}</p>
        </div>
        <div className="col">
          <p><strong>Crew:</strong> <br />
          {vehicle.crew}</p>
        </div>
        <div className="col">
          <p><strong>Length:</strong> <br />
          {vehicle.length}</p>
        </div>
        <div className="col">
          <p><strong>Manufacturer:</strong> <br />
          {vehicle.manufacturer}</p>
        </div>
        <div className="col">
          <p><strong>Max Atmosphering Speed:</strong> <br />
          {vehicle.max_atmosphering_speed}</p>
        </div>
        <div className="col">
          <p><strong>Model:</strong> <br />
          {vehicle.model}</p>
        </div>
        <div className="col">
          <p><strong>Passengers:</strong> <br />
          {vehicle.passengers}</p>
        </div>
        <div className="col">
          <p><strong>Vehicle Class:</strong> <br />
          {vehicle.vehicle_class}</p>
        </div>
      </div>
    </div>
  );
}

export default VehiclesDetail;
