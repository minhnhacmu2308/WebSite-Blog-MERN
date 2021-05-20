
import { INIT_STATE } from "../../constants.js";
import { getType, registerUsers, hideNotice, loginUsers ,logoutUsers} from "../actions";

export default function usersReducer(state = INIT_STATE.user, action) {
  switch (action.type) {
    case getType(registerUsers.registerUsersSuccess):
      return {
        ...state,
        status: true,
        type: "success",
        notice: "Chúc mừng bạn đã đăng kí thành công!!!",
      };
    case getType(registerUsers.registerUsersError):
      return {
        ...state,
        status: true,
        type: "error",
        notice: "Đăng kí thất bại vùi lòng thử lại !!",
      };
    case getType(loginUsers.loginUsersSuccess):
      localStorage.setItem('token',action.payload.data.secret_key)
      return {
        ...state,
        status: true,
        type: "success",
        notice: "Chúc mừng bạn đã đăng nhập thành công!!!",
        token : localStorage.getItem('token')
      };
    case getType(loginUsers.loginUsersError):
      return {
        ...state,
        status: true,
        type: "error",
        notice: "Đăng nhập thất bại vùi lòng thử lại !!",
      };
    case getType(logoutUsers.logoutUsersRequest):
        localStorage.removeItem("token");
        return {
          ...state,
        token : ""
    };  
    case getType(hideNotice):
      return {
        ...state,
        status: false,
      };
    default:
      return state;
  }
}
