import {List, Map} from 'immutable';

import Constant from '../util/Constants'

const cst = Constant;

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

const initState = Map({
  loginPage: true
})

const auth = (state, newState) => {
  return state.merge(newState);
}

export default function Reducer(state = initState, action) {
  switch(action.type) {
    case 'SET_STATE' :
      return resetVote(setState(state, action.state));
    case cst.action.INIT :
      return state;
    case cst.action.AUTH : 
      return auth(state, action.update);
  }
  return state;
}
