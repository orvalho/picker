import '../scss/ColorPicker.scss';

import React, {Component} from 'react';

import ColorContext from '../contexts/ColorContext';

export default class ColorPicker extends Component {
  static contextType = ColorContext;

  render() {
    return (<div className="color-picker picker">
      <h3>COLOR</h3>
      <div className="colors">
        <div className="brown" onClick={() => this.context.onColorChange('brown')}></div>
        <div className="blue" onClick={() => this.context.onColorChange('blue')}></div>
        <div className="grey" onClick={() => this.context.onColorChange('grey')}></div>
      </div>
    </div>);
  }
}
