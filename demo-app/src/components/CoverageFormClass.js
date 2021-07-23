import { Component } from 'react';
import PropTypes from "prop-types";

const getInitialState = () => ({
  errorMessage: '',
  coverageForm: {
    coverageName: '',
  },
});

export class CoverageForm extends Component {
  
  state = getInitialState();

  change = (e) => {
    this.setState({
      coverageForm: {
        ...this.state.coverageForm,
        [ e.target.name ]: e.target.value,
      },
    });
  };

  submitForm = () => {

    if (this.state.coverageForm.coverageName.length === 0) {
      this.setState({
        errorMessage: "Coverage name is required.",
      });
      return;
    }

    this.props.onSubmitForm({ name: this.state.coverageForm.coverageName });
    this.setState(getInitialState());
  };
  

  render() {

    const { errorMessage, coverageForm } = this.state;
    const { change, submitForm } = this;

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
  }

};

CoverageForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};