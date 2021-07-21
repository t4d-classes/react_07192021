import { useState, useEffect } from 'react';

import { CoverageList } from "../components/CoverageList";
import { CoverageForm } from "../components/CoverageForm";

export const CoveragesPage = () => {

  const [
    coverages, /* first element: state data */
    setCoverages /* second element: update function, this func both updates the state and triggers the re-render */
  ] = useState([] /* initial state value before we call the REST API */);

  useEffect(function loadCoveragesAfterRender() {

    fetch('http://localhost:3060/coverages')
      .then(res => res.json())
      .then(coverages => setCoverages(coverages));

  }, [] /* empty array means to run after first render */)

  const appendCoverage = (coverage) => {

    fetch('http://localhost:3060/coverages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(coverage),
    })
      .then(() => fetch('http://localhost:3060/coverages'))
      .then(res => res.json())
      .then(coverages => setCoverages(coverages));

  };

  return (
    <div>
      <header>
        <h1>Coverages</h1>
      </header>
      <p>Manage coverages...</p>
      <CoverageList coverages={coverages}>
        <h2>List of Coverages</h2>
      </CoverageList>
      <CoverageForm onSubmitForm={appendCoverage} />
    </div>
  );

};