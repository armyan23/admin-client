import { combineReducers } from "redux";
import exampleReducer from "./example/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
