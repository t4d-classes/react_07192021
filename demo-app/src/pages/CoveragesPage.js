import { CoverageList } from "../components/CoverageList";
import { CoverageForm } from "../components/CoverageFormClass";

import { useCoverages } from "../hooks/useCoverages";

export const CoveragesPage = () => {

  const { coverages, appendCoverage } = useCoverages();

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