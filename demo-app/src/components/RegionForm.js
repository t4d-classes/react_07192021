import { useState } from 'react';
import PropTypes from "prop-types";

export const RegionForm = ({ onSubmitForm }) => {

  const [regionForm, setRegionForm] = useState({
    name: '',
    abbr: '',
    region: '',
  });

  const change = (e) => {
    setRegionForm({
      ...regionForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    onSubmitForm(regionForm).then(() => {
      setRegionForm({
        name: '',
        abbr: '',
        region: '',
      });
    });
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
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Name required</span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="name-input">
            Abbr:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="abbr" value={regionForm.abbr} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Name required</span>
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
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Region required</span>
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