import { combineReducers } from "redux";
import exampleReducer from "./example/reducer";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import companyReducer from "./company/reducer";
import employeeReducer from "./employee/reducer";
import adminReducer from "./admin/reducer";

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  profile: profileReducer,
  company: companyReducer,
  employee: employeeReducer,
  admin: adminReducer,
});

export default rootReducer;
