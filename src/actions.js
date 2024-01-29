import { ACTIONS } from "./actionTypes";
export function addBug(desc) {
  return {
    type: ACTIONS.ADD_BUG,
    payload: {
      description: desc,
    },
  };
}

export function removeBug(id) {
  return {
    type: ACTIONS.REMOVE_BUG,
    payload: {
      id: id,
    },
  };
}

export function resolveBug(id) {
  return {
    type: ACTIONS.RESOLVE_BUG,
    payload: {
      id: id,
    },
  };
}
