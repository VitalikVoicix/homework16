import React from 'react'
import "./checkbox.css"

function Checkbox() {
    const people=["Male","Female","Alien"];
  return (
    <div className="wrappers">
        <input type="checkbox"className="checkbox"></input><span>{people[0]}</span>
        <input type="checkbox"className="checkbox"></input><span>{people[1]}</span>
        <input type="checkbox"className="checkbox"></input><span>{people[2]}</span>
    </div>
  );
}

export default Checkbox;
