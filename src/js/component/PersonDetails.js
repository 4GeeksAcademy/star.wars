import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetail = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(error => console.error('Error fetching person:', error));
  }, [id]);

  if (!person) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6" style={{ width: '' }}>
          <img src="https://placehold.jp/800x600.png" className="img-fluid" alt="Placeholder" />
        </div>
        <div className="col-md-6">
          <h2>{person.name}</h2>
          <p>Do elit deserunt laborum ad veniam ut Lorem. Enim sunt aliquip ea do commodo minim aliquip qui laborum laboris aliquip. Dolore occaecat magna Lorem enim. Esse id irure laboris sunt amet nisi est et. Duis aute tempor culpa nostrud incididunt do ipsum elit cillum.

Nisi aliqua quis nisi exercitation eu ut mollit adipisicing labore sunt ad deserunt commodo et. Ad cupidatat qui et anim proident labore. Fugiat aute qui qui sint. Nostrud veniam enim do mollit dolore do aute. Anim fugiat quis ut enim in sit anim. Adipisicing duis qui proident amet et id elit cupidatat aute consequat.

Qui do consequat non eiusmod ullamco eu elit irure. Nisi incididunt duis incididunt ipsum et cillum esse excepteur sunt amet exercitation voluptate. Dolore enim ullamco nostrud ad est enim laboris proident consequat ipsum velit.

Ea laboris minim voluptate cillum aute voluptate proident aliqua id ullamco officia. Adipisicing irure aute adipisicing esse est ad nulla reprehenderit aliqua. Ea nisi eu dolore ipsum deserunt velit adipisicing officia officia ipsum elit ea. Culpa nostrud sint amet elit labore. Elit consequat anim sit esse eiusmod reprehenderit dolore. Dolore do esse ipsum non et non nisi sit reprehenderit do. Non veniam laboris Lorem officia mollit ea.</p>
        </div>
      </div>
      <div className="row mt-4" style={{ color:"red" }}>
        <div className="col">
          <p><strong>Gender:</strong> {person.gender}</p>
        </div>
        <div className="col">
          <p><strong>Birth Year:</strong> {person.birth_year}</p>
        </div>
        <div className="col">
          <p><strong>Eye Color:</strong> {person.eye_color}</p>
        </div>
        <div className="col">
          <p><strong>Hair Color:</strong> {person.hair_color}</p>
        </div>
        <div className="col">
          <p><strong>Height:</strong> {person.height}</p>
        </div>
        <div className="col">
          <p><strong>Skin Color:</strong> {person.skin_color}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonDetail;
