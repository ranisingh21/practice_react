import React from 'react';
import './App.css';

const Principal = ({ principalHobbies }) => {
  return (
    <div className="principal">
      <h1>Principal's Hobbies</h1>
      <p>Hobby 1: {principalHobbies.hobby1}</p>
      <p>Hobby 2: {principalHobbies.hobby2}</p>
      <p>Hobby 3: {principalHobbies.hobby3}</p>
    </div>
  );
}

export default Principal;
