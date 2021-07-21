import { RegionTable } from "../components/RegionTable";
import { RegionForm } from "../components/RegionForm";

import { useRegion } from '../hooks/useRegion';

export const RegionsPage = () => {

  const { regions, appendRegion } = useRegion();

  return (
    <div>
      <header>
        <h1>Regions</h1>
      </header>
      <p>Here is a list of the Regions!</p>
      <RegionTable regions={regions} />
      <h2>Add a Region</h2>
      <RegionForm onSubmitForm={appendRegion} />
    </div>
  );

};