import { useState, useEffect } from "react";

export const useRegion = () => {

  const [regions, setRegions] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3060/states')
      .then(res => res.json())
      .then(states => setRegions(states));

  }, []);

  const appendRegion = (region) => {

    return fetch('http://localhost:3060/states', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(region),
    })
      .then(() => fetch('http://localhost:3060/states'))
      .then(res => res.json())
      .then(regions => setRegions(regions));

  };

  return { regions, appendRegion };


};