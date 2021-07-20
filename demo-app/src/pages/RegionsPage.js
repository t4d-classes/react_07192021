import { useState, useEffect } from "react";

import { RegionTable } from "../components/RegionTable";

export const RegionsPage = () => {

  const [regions, setRegions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3060/states')
      .then(res => res.json())
      .then(states => setRegions(states));

  }, []);

  return (
    <div>
      <header>
        <h1>Regions</h1>
      </header>
      <p>Here is a list of the Regions!</p>
      <RegionTable regions={regions} />
    </div>
  );

};