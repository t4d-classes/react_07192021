import { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageBox extends Component {

  static get propTypes() {
    return {
      headerText: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    };
  }

  render() {

    return (
      <div class="panel panel-default">
        <h3 class="panel-heading">
          {this.props.headerText}
        </h3>
        <div class="panel-body">
          {this.props.children}
        </div>
      </div>
    );

  }


}