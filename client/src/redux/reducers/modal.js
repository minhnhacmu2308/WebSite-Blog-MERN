import { INIT_STATE } from "../../constants.js";
import { getType ,showModal,hideModal} from "../actions";

export default function postsReducer(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal):
      return {
        isShow: true,
      };
    case getType(hideModal):
        return {
          isShow: false,
        };
    default:
      return state;
  }
}
