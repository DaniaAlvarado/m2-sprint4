import { userTypes } from "../types/userTypes";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case userTypes.CREATE_USER:
      return {
        ...action.payload,
      };

    case userTypes.LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case userTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};