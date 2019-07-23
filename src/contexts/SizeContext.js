import React, {Component} from 'react';

const Context = React.createContext();

export class SizeStore extends Component {
  state = {
    size: 'M'
  };

  onSizeChange = size => this.setState({size});

  render() {
    return (<Context.Provider value={{
        ...this.state,
        onSizeChange: this.onSizeChange
      }}>
      {this.props.children}
    </Context.Provider>);
  }
}

export default Context;
