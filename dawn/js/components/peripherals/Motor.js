/**
 * A component representing a motor.
 * Props:
 *   id: a unique id string
 *   value: the speed, from -100 to 100.
 *   disconnected: Boolean indicator if this motor is disconnected
 */

import React from 'react';
import {Label} from 'react-bootstrap';
import NameEdit from './NameEdit';

var _roundMotor = function(num) {
  if (num > 0) {
    return "+" + (Math.round(num * 100) / 100);
  } else return (Math.round(num * 100) / 100);
};

var Motor = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.number
  },
  render() {
    return (
    <div style={{overflow: 'auto'}}>
      <div style={{overflow: 'auto', width: '100%'}}>
        <h4 style={{float: 'left'}}><NameEdit name={this.props.name} id={this.props.id} /><small> Motor</small></h4>
        <h4 style={{float: 'right'}}>
        {
          this.props.disconnected
          ? <Label bsStyle='danger'>Disconnected</Label>
          : (this.props.value > 0) ? "+" + (Math.round(this.props.value * 100) / 100):(Math.round(this.props.value * 100) / 100)
        }
        </h4>
      </div>
    </div>
    );
  }
});

export default Motor;
