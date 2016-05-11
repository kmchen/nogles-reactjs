import cst from '../util/Constants'

export function fetch(interval = cst.fetchInterval) {
  return {
    type: cst.action.FETCH,
    interval: interval
  };
}

