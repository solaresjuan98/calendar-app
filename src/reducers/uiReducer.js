import { types } from "../types/types";

const initialState = {
  modalOpen: false,
};
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    
    // SHOW MODAL
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };

    // HIDE MODAL
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
