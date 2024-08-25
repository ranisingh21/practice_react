import React from 'react';
import './index.css';
import Student from './Student';
import Teacher from './Teacher';
import Principal from './Principal';

const principal = {
  name: "Raja",
  hobby1: "Reading",
  hobby2: "Traveling",
  hobby3: "Singing"
};

const student = {
  name: "Rani",
  hobby1: "Playing Football",
  hobby2: "Reading Books",
  hobby3: "Video Games"
};

const teacher = {
  name: "Priya",
  hobby1: "Painting",
  hobby2: "Yoga",
  hobby3: "Gardening"
};

function App() {
  return (
    <>
      <Principal principalHobbies={principal} />
      <Teacher Hobby1={teacher.hobby1}
        Hobby2={teacher.hobby2}
        Hobby3={teacher.hobby3} />
      <Student {...student} />
    </>
  );
}

export default App;
