import { useState, useEffect } from 'react';

export const useCoverages = () => {

  const [
    coverages,
    setCoverages,
  ] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3060/coverages')
      .then(res => res.json())
      .then(coverages => setCoverages(coverages));

  }, [] /* empty array means to run after first render */)

  const appendCoverage = (coverage) => {

    return fetch('http://localhost:3060/coverages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coverage),
    })
      .then(() => fetch('http://localhost:3060/coverages'))
      .then(res => res.json())
      .then(coverages => setCoverages(coverages));

  };

  return { coverages, appendCoverage };

};