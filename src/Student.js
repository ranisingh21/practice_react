import React from 'react'



const Student = (props) => {
  return (
    <div className ="studentDiv">
      <h1>Student's Hobbies</h1>
      <p>Hobby 1: {props.hobby1}</p>
      <p>Hobby 2: {props.hobby2}</p>
      <p>Hobby 3: {props.hobby3}</p>
    </div>
  );
};

export default Student;
