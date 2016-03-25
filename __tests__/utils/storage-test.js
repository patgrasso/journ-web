/*global jest, describe, it, expect, beforeEach*/

jest.mock('localStorage');
jest.unmock('../../utils/storage');

import Store from '../../utils/storage';
import 'localStorage';

const SERVER_ADDRESS_KEY = 'journ_server_address';

describe('utils/storage', () => {

  beforeEach(() => {
    localStorage.setItem(SERVER_ADDRESS_KEY, null);
  });

  describe('setServerAddress()', () => {
    it('stores a server address in local storage', () => {
      Store.setServerAddress('test_address');
      expect(localStorage.getItem(SERVER_ADDRESS_KEY)).toBe('test_address');
    });

    it('returns the last value that was stored, if there was one', () => {
      expect(Store.setServerAddress('test_@')).toBe(null);
      expect(Store.setServerAddress('new_@')).toBe('test_@');
      expect(Store.setServerAddress('foo')).toBe('new_@');
    });
  });

  describe('getServerAddress()', () => {
    it('retrieves a stored server address from localStorage', () => {
      localStorage.setItem(SERVER_ADDRESS_KEY, 'htcpcp://test_@:12345');
      expect(Store.getServerAddress()).toBe('htcpcp://test_@:12345');
    });
  });

});
