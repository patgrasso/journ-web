/*global $, jest, describe, pit, it, expect, beforeAll, beforeEach, spyOn, fail*/

jest.mock('jquery');
jest.unmock('../../utils/connection');

import { checkServer } from '../../utils/connection';

describe('utils/connection', () => {

  beforeAll(require('jquery').load);

  beforeEach(() => {
    spyOn($, 'getJSON').and.callFake(address => {
      if (address === 'valid_@') {
        return $.Deferred().resolve({ status: 200, app: 'journ' }).promise();
      }
      return $.Deferred().reject({
        readyState  : 0,
        responseText: '',
        status      : 0,
        statusText  : 'error'
      }).promise();
    });
  });


  describe('checkServer()', () => {
    it('returns a promise object', () => {
      expect(checkServer('valid_@') instanceof Promise).toBe(true);
    });

    pit('resolves with a valid journ server address', () => {
      return checkServer('valid_@');
    });

    it('rejects with an invalid journ server address', done => {
      checkServer('bad address')
        .then(() => {
          fail('promise should have been rejected');
          done();
        })
        .catch(done);
    });
  });

});
