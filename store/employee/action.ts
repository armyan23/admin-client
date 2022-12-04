import { createAction } from "redux-actions";

// Create employee action
export const postCreateEmployeeRequest: any = createAction(
  "POST_CREATE_EMPLOYEE_REQUEST"
);
export const postCreateEmployeeSuccess: any = createAction(
  "POST_CREATE_EMPLOYEE_SUCCESS"
);
export const postCreateEmployeeFailure: any = createAction(
  "POST_CREATE_EMPLOYEE_FAILURE"
);

// Get employee action
export const getEmployeesRequest: any = createAction("GET_EMPLOYEES_REQUEST");
export const getEmployeesSuccess: any = createAction("GET_EMPLOYEES_SUCCESS");
export const getEmployeesFailure: any = createAction("GET_EMPLOYEES_FAILURE");
