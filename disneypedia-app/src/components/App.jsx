import React from "react";
import Entry from "./Entry";
import disneypedia from "../disneypedia";

function createEntry(DisRide) {
  return (
    <Entry
      key={DisRide.id}
      image={DisRide.imgURL}
      name={DisRide.name}
      park={DisRide.park}
      description={DisRide.description}
      thrill={DisRide.thrillLevel}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Disneypedia</span>
      </h1>
      <h3>Disney Rides by Thrill Level</h3>
      <h4>
        Ranked on a scale of 1 to 5 stars, where 1 represents not intense and 5
        represents very intense.
      </h4>
      <dl className="dictionary">{disneypedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
