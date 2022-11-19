import {
  getExampleFailure,
  getExampleRequest,
  getExampleSuccess,
} from "./actions";
import { handleActions } from "redux-actions";
import { IExample } from "./interface";

const initialState: IExample = {
  data: 0,
  errorMessage: "",
};

const exampleReducer = handleActions(
  {
    [getExampleRequest]: (state: IExample, { payload }: any) => ({
      ...state,
    }),
    [getExampleSuccess]: (state: IExample, { payload }: any) => ({
      ...state,
      data: state.data + payload,
    }),
    [getExampleFailure]: (state: IExample, { payload }: any) => ({
      ...state,
      errorMessage: payload,
    }),
  },
  initialState
);

export default exampleReducer;
