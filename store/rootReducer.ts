import { combineReducers } from "redux";
import exampleReducer from "./example/reducer";
import authReducer from "./auth/reducer";
import companyReducer from "./company/reducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  company: companyReducer,
});

export default rootReducer;
