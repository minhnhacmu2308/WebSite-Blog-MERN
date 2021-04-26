import { INIT_STATE } from "../../constants.js";
import { getPosts, getType, createPosts,updatePosts ,deletePosts} from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostError):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPosts.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePosts.updatePostSuccess):
      return {
        ...state,
        data:state.data.map((post) => post._id === action.payload._id ? action.payload : post),
      };
     case getType(deletePosts.deletePostsSuccess):
        return {
          ...state,
          data:state.data.filter((post) => post._id !== action.payload._id),
        };
    default:
      return state;
  }
}
