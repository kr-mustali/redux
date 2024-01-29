import { ACTIONS } from "./actionTypes";
let lastId = 0;

export default function bugReducer(state = [], action) {
  switch (action.type) {
    case ACTIONS.ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case ACTIONS.REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);
    case ACTIONS.RESOLVE_BUG:
      return state.map((bug) => {
        if (bug.id === action.payload.id) {
          return { ...bug, resolved: !bug.resolved };
        }
        return state;
      });
    default:
      return state;
  }
}
