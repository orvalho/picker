import '../scss/Results.scss';

import React from 'react';

import ColorContext from '../contexts/ColorContext';
import SizeContext from '../contexts/SizeContext';
import QuantityContext from '../contexts/QuantityContext';

export default() => {
  return (<div className="results">
    <ColorContext.Consumer>
      {({color}) => <img src={`img/${color}.png`} alt={`${color} t-shirt`}/>}
    </ColorContext.Consumer>
    <div className="selection">
      T-SHIRT
      <div>
        <span>color:</span>
        <ColorContext.Consumer>
          {({color}) => color}
        </ColorContext.Consumer>
      </div>
      <div>
        <span>size:</span>
        <SizeContext.Consumer>
          {({size}) => size}
        </SizeContext.Consumer>
      </div>
      <div>
        <span>quantity:</span>
        <QuantityContext.Consumer>
          {({quantity}) => quantity}
        </QuantityContext.Consumer>
      </div>
    </div>
  </div>);
};
