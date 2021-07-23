import { useState } from 'react';
import PropTypes from "prop-types";

import { useForm } from '../hooks/useForm';

export const RegionForm = ({ onSubmitForm }) => {

  const [errorMessages, setErrorMessages] = useState([]);

  const [regionForm, change, resetRegionForm] = useForm({
    name: '',
    abbr: '',
    region: '',
  });

  const submitForm = () => {

    const errorMessages = [];

    if (regionForm.name.length === 0) {
      errorMessages.push('REGIONFORM_NAME');
    }

    if (regionForm.abbr.length === 0) {
      errorMessages.push('REGIONFORM_ABBR');
    }

    if (regionForm.region.length === 0) {
      errorMessages.push('REGIONFORM_REGION');
    }

    if (errorMessages.length > 0) {
      setErrorMessages(errorMessages);
      return;
    }

    onSubmitForm(regionForm).then(() => {
      setErrorMessages([]);
      resetRegionForm();
    });
  };

  const showErr = (key) => {
    return errorMessages.includes(key) ? 'inline' : 'none';
  };

  return (
    <form className="container-fluid">
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Name:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="name" value={regionForm.name} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: showErr('REGIONFORM_NAME') }}>Name required</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="abbr-input">
            Abbr:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="abbr-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="abbr" value={regionForm.abbr} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: showErr('REGIONFORM_ABBR') }}>Abbr required</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group form-inline lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="region-select">Region:</label>
          <span className="required-marker"></span>
          <br />
          <select name="region" value={regionForm.region} onChange={change}
            className="form-control control-select lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            id="region-select">
            <option>Select One</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="Central">Central</option>
            <option value="West">West</option>
          </select>
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: showErr('REGIONFORM_REGION') }}>Region required</span>
        </div>
      </div>
      <div className="row">
        <button type="button" onClick={submitForm}>Add Coverage</button>
      </div>
    </form>
  );


};

RegionForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};