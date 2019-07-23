import '../scss/SizePicker.scss';

import React, {Component} from 'react';

import SizeContext from '../contexts/SizeContext';

export default class SizePicker extends Component {
  static contextType = SizeContext;

  render() {
    return (<div className="size-picker picker">
      <h3>SIZE</h3>
      <div className="sizes">
        <div onClick={() => this.context.onSizeChange('S')}>S</div>
        <div onClick={() => this.context.onSizeChange('M')}>M</div>
        <div onClick={() => this.context.onSizeChange('L')}>L</div>
      </div>
    </div>);
  }
}
