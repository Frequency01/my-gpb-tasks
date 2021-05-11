import { FETCH_REPAIRS_LIST, FETCH_SELECTED_REPAIR } from "./types";

const initialState = {
  repairsList: [],
  selectedRepair: null,
};

export const repairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPAIRS_LIST:
      return { ...state, repairsList: action.payload };
    case FETCH_SELECTED_REPAIR:
      return {
        ...state,
        selectedRepair: action.payload,
      };
    default:
      return state;
  }
};
