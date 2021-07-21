import { useState, useEffect } from 'react';

import { CoverageList } from "../components/CoverageList";
import { CoverageForm } from "../components/CoverageForm";

let renderCounter = 0;

export const CoveragesPage = () => {

  // array destructuring
  const [
    coverages, /* first element: state data */
    setCoverages /* second element: update function, this func both updates the state and triggers the re-render */
  ] = useState([] /* initial state value before we call the REST API */);

  // creating a function named loadCoveragesAfterRender
  // passing the reference to the loadCoveragesAfterRender function to the useEffect function
  // invoking the useEffect function
  useEffect(function loadCoveragesAfterRender() {

    fetch('http://localhost:3060/coverages')
      .then(res => res.json())
      .then(coverages => setCoverages(coverages));

  }, [] /* empty array means to run after first render */)

  console.log('render - counter: ', renderCounter++, ', coverages: ', coverages);

  return (
    <div>
      <header>
        <h1>Coverages</h1>
      </header>
      <p>Manage coverages...</p>
      <CoverageList coverages={coverages}>
        <h2>List of Coverages</h2>
      </CoverageList>
      <CoverageForm />
    </div>
  );

};