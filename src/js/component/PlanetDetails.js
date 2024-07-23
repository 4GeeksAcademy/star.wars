import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PlanetsDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${id}/`)
      .then(response => response.json())
      .then(data => setPlanet(data))
      .catch(error => console.error('Error fetching planet:', error));
  }, [id]);

  if (!planet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src="https://placehold.jp/800x600.png" className="img-fluid" alt="Placeholder" />
        </div>
        <div className="col-md-6">
          <h2>{planet.name}</h2>
          Consequat anim pariatur et magna pariatur. Proident do ut officia id culpa culpa sint velit Lorem aliqua fugiat. Tempor eiusmod ullamco duis sit. Fugiat non consequat nisi aute. Ea Lorem ex enim laborum consectetur ad sit.

Lorem tempor commodo aliquip consectetur. Nulla quis laborum tempor ullamco aliquip laboris pariatur officia. Labore voluptate enim ut ullamco mollit et dolore cillum culpa laboris enim labore mollit. Irure eiusmod officia anim enim pariatur sunt nulla in reprehenderit non.

Nostrud laboris incididunt fugiat labore est laborum ut velit est tempor anim aute. Aute commodo ad ea voluptate irure culpa dolore commodo. Aliquip aliquip cupidatat anim consectetur laboris.

Dolor excepteur nostrud ipsum cillum. Ad occaecat tempor ea culpa. Sunt esse culpa ut sint ex culpa laborum mollit adipisicing nostrud culpa elit sint. Est eiusmod deserunt amet anim sit.
        </div>
      </div>
      <div className="row mt-4" style={{color:"red"}}>
        <div className="col">
          <p><strong>Climate:</strong> <br />
          {planet.climate}</p> 
        </div>
        <div className="col">
          <p><strong>Diameter:</strong> <br />
          {planet.diameter}</p>
        </div>
        <div className="col">
          <p><strong>Gravity:</strong> <br />
           {planet.gravity}</p>
        </div>
        <div className="col">
          <p><strong>Orbital Period:</strong> <br />
          {planet.orbital_period}</p>
        </div>
        <div className="col">
          <p><strong>Population:</strong> <br />
           {planet.population}</p>
        </div>
        <div className="col">
          <p><strong>Rotation Period:</strong> <br />
          {planet.rotation_period}</p>
        </div>
        <div className="col">
          <p><strong>Surface Water:</strong> <br />
          {planet.surface_water}</p>
        </div>
        <div className="col">
          <p><strong>Terrain:</strong> <br />
           {planet.terrain}</p>
        </div>
      </div>
    </div>
  );
}

export default PlanetsDetail;
