import { useState } from 'react';
import PropTypes from "prop-types";

export const CoverageForm = ({ onSubmitForm }) => {

  const [coverageForm, setCoverageForm] = useState({
    coverageName: '',
  });

  const change = (e) => {

    setCoverageForm({
      // ... is the object spread operator
      ...coverageForm, // copy the properties from the current state object on to the new state object
      // computed property
      // the expression in the square braces is evaluated, and the result
      // is the name of the property that will updated on the object
      [e.target.name]: e.target.value,
    });

  };

  const submitForm = () => {
    onSubmitForm({ name: coverageForm.coverageName });
    setCoverageForm({
      coverageName: '',
    });
  };

  return (
    <form className="container-fluid">
      <div className="row">
        <div className="col-md-4 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="coverage-name-input">
            Coverage Name:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="coverage-name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="coverageName" value={coverageForm.coverageName} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: 'none' }}>Agency Name required</span>
        </div>
      </div>
      <div className="row">
        <button type="button" onClick={submitForm}>Add Coverage</button>
      </div>
    </form>
  );

};

CoverageForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};