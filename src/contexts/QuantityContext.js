import React, {Component} from 'react';

const Context = React.createContext();

export class QuantityStore extends Component {
  state = {
    quantity: 1
  };

  onQuantityChange = quantity => this.setState({quantity});

  render() {
    return (<Context.Provider value={{
        ...this.state,
        onQuantityChange: this.onQuantityChange
      }}>
      {this.props.children}
    </Context.Provider>);
  }
}

export default Context;
