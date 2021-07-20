import { render } from 'react-dom';

import { CoverageList } from './components/CoverageList';
import { MessageBox } from './components/MessageBox';

const coverageList = [
  { id: 1, name: 'Property' },
  { id: 2, name: 'General Liability' },
  { id: 3, name: 'Auto' },
  { id: 4, name: 'Workers Compensation' },
  { id: 5, name: 'Umbrella' },
];

render(
  <>
    <CoverageList coverages={coverageList}>
      <h1>List of Coverages</h1>
    </CoverageList>
    <CoverageList coverages={coverageList}>
      <h1>List of Coverages</h1>
    </CoverageList>
    <MessageBox headerText="Cool">
      <p>This is <b>fun</b>!</p>
    </MessageBox>
    <MessageBox headerText="Fun">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </MessageBox>
  </>,
  document.querySelector("#root"),
);

