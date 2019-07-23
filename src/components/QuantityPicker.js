import '../scss/QuantityPicker.scss';

import React, {Component} from 'react';

import QuantityContext from '../contexts/QuantityContext';

export default class QuantityPicker extends Component {
  static contextType = QuantityContext;

  render() {
    return (<div className="quantity-picker picker">
      <h3>QUANTITY</h3>
      <select className="quantity" onChange={e => this.context.onQuantityChange(e.target.value)} value={this.context.size}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>);
  }
}
