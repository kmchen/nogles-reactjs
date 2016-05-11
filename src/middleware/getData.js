import {fromJS, Map} from 'immutable'

import cst from '../util/Constants'

export default apiUtil => store => next => action => {
  if (action.type != cst.action.FETCH && cst.isPulling) 
    return next(action);

  //setInterval(() => {
    //apiUtil.do(cst.http.GET, cst.url)
      //.then(function(result){
        //console.log('--------- well');
      //}, function(err){
        //console.error(err);
     //});
  //}, cst.fetchInterval);
  apiUtil.do(cst.http.GET, cst.url)
    .then(function(result){
      if (result.isbn) {
        console.err('Missing isbn');
        return;
      }
      if (result.body)
        action.data = result.body
      next(action);
    }, function(err){
      console.error(err);
   });
}
