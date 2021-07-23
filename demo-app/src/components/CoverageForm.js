import { useState } from 'react';
import PropTypes from "prop-types";

import { useForm } from "../hooks/useForm";

export const CoverageForm = ({ onSubmitForm }) => {

  const [errorMessage, setErrorMessage] = useState('');

  const [coverageForm, change, resetCoverageForm] = useForm({
    coverageName: '',
  });

  const submitForm = () => {

    if (coverageForm.coverageName.length === 0) {
      setErrorMessage("Coverage name is required.");
      return;
    }

    setErrorMessage('');
    onSubmitForm({ name: coverageForm.coverageName });
    resetCoverageForm();
  };

  return (
    <form className="container-fluid">
      {errorMessage ? <span>Form is Invalid</span> : <span>Form is Valid</span>}
      {errorMessage && <div className="row">
        <p className="col-md-12">
          {errorMessage}
        </p>
      </div>}
      <div className="row">
        <div className="col-md-12 form-group lmgbi_formEntry">
          <label className="lmgbi_formTitle" htmlFor="coverage-name-input">
            Coverage Name:
          </label>
          <span className="required-marker"></span>
          <br />
          <input id="coverage-name-input" type="text"
            className="form-control lmgbi_formValue lmgbi_formRequired lmgbi_useNameAttr"
            name="coverageName" value={coverageForm.coverageName} onChange={change} />
          <br />
          <span className="lmgbi_formAlert" style={{ color: 'red', display: errorMessage ? 'inline' : 'none' }}>
            Coverage Name required</span>
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