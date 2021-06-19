import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer.js";
import sessionReducer from "./sessionReducer.js";
import errorsReducer from "./errorsReducer.js";
// import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  //   ui: uiReducer,
});

export default rootReducer;
