export default apiUtil => store => next => action => {
  console.log('--------------- wow it workds');
  //apiUtil.do('Get', 'http://localhost:7979/api/data')
    //.then(function(result){
      //console.log('--------------- wow it workds', result);
    //}, function(err){
      //console.log('--------------- not working', err);
    //});
  return next(action);
}
