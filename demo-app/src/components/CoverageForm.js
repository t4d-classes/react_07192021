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
    <form>
      <label>
        Coverage Name:
        <input type="text" name="coverageName"
          value={coverageForm.coverageName}
          onChange={change} />
      </label>
      <button type="button" onClick={submitForm}>Add Coverage</button>
    </form>
  );

};

CoverageForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};