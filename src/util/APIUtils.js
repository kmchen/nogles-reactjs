import _                         from 'lodash';
import request                   from 'superagent';

function newRequest(method, url) {
  return request(method, url)
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache,no-store,must-revalidate,max-age=-1');
}

var APIUtils = {

  do(method, url, option=null) {
    return new Promise(function(resolve, reject) {
      option = option || {};

      var req = newRequest(method, url);
      if (_.has(option, 'header')) {
        _.forIn(option.header, function(v, k) {
          req.set(k, v);
        });
      }

      if (_.has(option, 'data')) {
        req.send(option.data);
      }

      if (_.has(option, 'queryparam')) {
        _.forIn(option.queryparam, function(v, k) {
          req.query({[k]:v});
        });
      }

      var endFn = function(err, res) {
        if (err) {
          reject({err: err, body: res});
        } else {
          resolve(res);
        }
      }.bind(this);
      req.end(endFn);

    }.bind(this));

  }
};

export default APIUtils;

