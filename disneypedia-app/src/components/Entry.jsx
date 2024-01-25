// Entry.jsx

import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="disney">
          <img src={props.image} alt={props.name} />
        </span>
        <span>{props.name}</span>
      </dt>
      <dd className="park">{props.park}</dd>
      <dd>{props.description}</dd>
      <dd className="thrill">Thrill Level: {props.thrill}</dd>
    </div>
  );
}

export default Entry;
