import cst from '../util/Constants'

export const INIT = () => {
  return {
    type: cst.action.INIT
  };
}

export const Authenticate = (update) => {
  return {
    type: cst.action.AUTH,
    update
  };
}
