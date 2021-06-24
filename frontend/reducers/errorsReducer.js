import { combineReducers } from "redux";
import PostErrorsReducer from "./postErrorsReducer";
import sessionErrorsReducer from "./sessionErrorsReducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  postErrors: PostErrorsReducer
});

export default errorsReducer;
