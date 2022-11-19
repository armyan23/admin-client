import { createAction } from "redux-actions";

// : ActionFunctionAny<Action<any>>
export const getExampleRequest: any = createAction("GET_EXAMPLE_REQUEST");
export const getExampleSuccess: any = createAction("GET_EXAMPLE_SUCCESS");
export const getExampleFailure: any = createAction("GET_EXAMPLE_FAILURE");
