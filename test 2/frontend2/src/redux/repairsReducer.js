import {
  FETCH_REPAIRS_LIST,
  FETCH_SELECTED_REPAIR,
  SET_SELECTED_REPAIR_ID,
} from "./types";

const initialState = {
  repairsList: [],
  selectedRepair: null,
  selectedRepairId: null,
};

export const repairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPAIRS_LIST: {
      return { ...state, repairsList: action.payload };
    }
    case FETCH_SELECTED_REPAIR: {
      return {
        ...state,
        selectedRepair: action.payload,
      };
    }
    case SET_SELECTED_REPAIR_ID: {
      return {
        ...state,
        selectedRepairId: action.payload,
      };
    }
    default:
      return state;
  }
};
