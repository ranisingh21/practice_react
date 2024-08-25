import React from 'react';

const Teacher = ({Hobby1, Hobby2, Hobby3}) => {
  return (
    <div className="TeachersDiv">
      <h1>Teacher's Hobbies</h1>
      <p>Hobby 1: {Hobby1}</p>
      <p>Hobby 2: {Hobby2}</p>
      <p>Hobby 3: {Hobby3}</p>
    </div>
  );
}

export default Teacher;
