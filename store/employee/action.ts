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

// Get employee action
export const employeeByIdRequest: any = createAction("EMPLOYEE_BY_ID_REQUEST");
export const employeeByIdSuccess: any = createAction("EMPLOYEE_BY_ID_SUCCESS");
export const employeeByIdFailure: any = createAction("EMPLOYEE_BY_ID_FAILURE");

// Get employee action
export const deleteEmployeeRequest: any = createAction(
  "DELETE_EMPLOYEE_REQUEST"
);
export const deleteEmployeeSuccess: any = createAction(
  "DELETE_EMPLOYEE_SUCCESS"
);
export const deleteEmployeeFailure: any = createAction(
  "DELETE_EMPLOYEE_FAILURE"
);
