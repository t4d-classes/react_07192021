import { Component } from 'react';

// uses a default import, so no curly braces
import PropTypes from 'prop-types';

export class CoverageList extends Component {

  static get defaultProps() {
    return {
      coverages: []
    };
  }

  static get propTypes() {
    return {
      coverages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })),
    };
  }

  render() {

    return (
      <ul>
        {this.props.coverages.map(coverage =>
          <li key={coverage.id}>{coverage.name}</li>)}
      </ul>
    );
  }
}
