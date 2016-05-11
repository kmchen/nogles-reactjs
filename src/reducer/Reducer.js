import {List, Map} from 'immutable';

function setState(state, newState){
  return state.merge(newState);
}

function setVote(state, entry){
  let pair = state.getIn(['vote', 'pair']);
  if (pair.includes(entry)) {
    return state.set('hasVoted',entry)
  }
  return state
}

function removeHasVoted(mergedState) {
  const hasVoted = mergedState.get('hasVoted');
  if (hasVoted && !mergedState.includes('hasVoted')) {
    return mergedState.delete('hasVoted') 
  }
  return mergedState
}

function vote(state, entry){
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)){
    return state.set('hasVoted', entry);
  }
  return state;
}

function resetVote(state){
  const hasVoted = state.get('hasVoted');
  const currentPair = state.getIn(['vote', 'pair'], List());
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted');
  }
  return state
}

function process(state, data){
  if (data) {
    return state.set('data', data);
  }
  return state;
}

export default function Reducer(state = Map(), action) {
  switch(action.type) {
    case 'SET_STATE' :
      return resetVote(setState(state, action.state))
    case 'FETCH' :
      return process(state, action.data)
  }
  return state;
}


