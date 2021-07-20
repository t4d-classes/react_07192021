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
      children: PropTypes.node.isRequired,
    };
  }

  render() {

    return (
      <>
        <header>
          {this.props.children}
        </header>
        <ul>
          {this.props.coverages.map(coverage =>
            <li key={coverage.id} className="info critical">
              {coverage.name}
            </li>)}
        </ul>
      </>
    );
  }
}
