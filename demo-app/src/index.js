import { render } from 'react-dom';

import { CoverageList } from './components/CoverageList';

const coverageList = [
  { id: 1, name: 'Property' },
  { id: 2, name: 'General Liability' },
  { id: 3, name: 'Auto' },
  { id: 4, name: 'Workers Compensation' },
  { id: 5, name: 'Umbrella' },
];

render(
  <CoverageList coverages={coverageList}>
    <h1>List of Coverages</h1>
  </CoverageList>,
  document.querySelector("#root"),
);

