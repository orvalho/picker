import '../scss/App.scss';

import React from 'react';

import {ColorStore} from '../contexts/ColorContext';
import {SizeStore} from '../contexts/SizeContext';
import {QuantityStore} from '../contexts/QuantityContext';

import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';
import QuantityPicker from './QuantityPicker';
import Results from './Results';
import Attribution from './Attribution';

export default() => {
  return (<div className="app">
    <div className="box">
      <ColorStore>
        <SizeStore>
          <QuantityStore>
            <div className="left">
              <Results/>
            </div>
            <div className="right">
              <ColorPicker/>
              <SizePicker/>
              <QuantityPicker/>
              <button>ORDER</button>
            </div>
          </QuantityStore>
        </SizeStore>
      </ColorStore>
    </div>
    <Attribution/>
  </div>);
};
