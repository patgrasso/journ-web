import React from 'react';
import { checkServer } from '../utils/connection';
import Store from '../utils/storage';

export default React.createClass({

  checkAddress(address) {
    return checkServer(address)
      .then(() => {
        Store.setServerAddress(address);
        this.setState({
          errorMessage  : null,
          success       : true,
          address       : address
        });
      })
      .catch(err => {
        console.log(err);
        if (err.status === 0) {
          this.setState({
            errorMessage: 'The server is playing hard-to-GET',
            success     : false
          });
        } else {
          this.setState({
            errorMessage: 'Something is wrong with that server',
            success     : false
          });
        }
      });
  },


  getInitialState() {
    var address = Store.getServerAddress()
      , state = {
        address     : address,
        errorMessage: null,
        success     : false
      };

    this.checkAddress(address);
    return state;
  },


  onFormSubmit() {
    // Validate the address. If it is incorrect, set state to reflect an error
    // TODO ^
    this.checkAddress(this.state.value
                    );
  },


  handleSubmit(e) {
    e.preventDefault();

    var address = this.state.address.trim();

    if (!address) { return; }

    this.checkAddress(address);
  },


  render() {
    var error   = null
      , success = null;

    if (this.state.errorMessage) {
      error = <div className="error-message">{this.state.errorMessage}</div>;
    }

    if (this.state.success) {
      success = <div className="success-message">Connected!</div>;
    }

    return (
      <form className="connect-form" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Server Address"
          defaultValue={this.state.address}
        />
        <button type="submit">Connect</button>
        {error}
        {success}
      </form>
    );
  }

});
