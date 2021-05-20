import { INIT_STATE } from "../../constants.js";
import {
  getType,
  showModal,
  hideModal,
  showModalRegister,
  hideModalRegister,
  showModalLogin,
  hideModalLogin,
} from "../actions";

export default function modalReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        ...state,
        isShow: true,
      };
    case getType(hideModal):
      return {
        ...state,
        isShow: false,
      };
    case getType(showModalRegister):
     
      return {
        ...state,
        isShowRegister: true,
      };
    case getType(hideModalRegister):
      
      return {
        ...state,
        isShowRegister: false,
      };
    case getType(showModalLogin):
      return {
        ...state,
        isShowLogin: true,
      };
    case getType(hideModalLogin):
      return {
        ...state,
        isShowLogin: false,
      };
    default:
      return { ...state };
  }
}
