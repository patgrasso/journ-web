import React from 'react';
import { checkServer } from '../utils/connection';
import Store from '../utils/storage';


export default React.createClass({

  getInitialState() {
    checkServer(Store.getServerAddress())
      .catch(() => {
        this.setState({ serverAddress: null });
      });
    return {
      serverAddress: Store.getServerAddress()
    };
  },


  onConnectedStatusChanged() {
    this.setState({ serverAddress: Store.getServerAddress() });
  },


  render() {
    return (
      <div>
        <h1>Journ</h1>
        <p>Connected to: {this.state.serverAddress}</p>
        {this.props.children}
      </div>
    );
  }

});
