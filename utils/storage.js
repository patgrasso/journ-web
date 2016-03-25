

const SERVER_ADDRESS_KEY = 'journ_server_address';

export default {

  getServerAddress() {
    return localStorage.getItem(SERVER_ADDRESS_KEY);
  },

  setServerAddress(address) {
    var oldAddress = this.getServerAddress();

    console.log(`Writing ${address} to Storage[${SERVER_ADDRESS_KEY}]`);
    localStorage.setItem(SERVER_ADDRESS_KEY, address);
    return oldAddress;
  }

};
