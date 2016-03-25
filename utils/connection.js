/*global $*/

export function checkServer(address, success, failure) {
  return new Promise((resolve, reject) => {
    $.getJSON(address)
      .then(data => {
        if (data.status === 200 && data.app === 'journ') {
          resolve(data);
        }
        reject(data);
      })
      .fail(reject);
  }).then(success).catch(failure);
}
