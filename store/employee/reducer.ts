import { handleActions } from "redux-actions";
import {
  postCreateEmployeeRequest,
  postCreateEmployeeSuccess,
  postCreateEmployeeFailure,
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
} from "./action";
import { IEmployee } from "types/iReducer";

const initialValue: IEmployee = {
  isCreateEmployeeRequest: false,
  isCreateEmployeeSuccess: false,
  isCreateEmployeeFailure: false,
  isGetEmployeesRequest: false,
  isGetEmployeesSuccess: false,
  isGetEmployeesFailure: false,
  data: [],
  successMessage: "",
  errorMessage: "",
};

const employeeReducer = handleActions(
  {
    // Create employee
    [postCreateEmployeeRequest]: (state: IEmployee) => ({
      ...state,
      isCreateEmployeeRequest: true,
      isCreateEmployeeSuccess: false,
      isCreateEmployeeFailure: false,
    }),
    [postCreateEmployeeSuccess]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isCreateEmployeeRequest: false,
      isCreateEmployeeSuccess: true,
      isCreateEmployeeFailure: false,
      successMessage: payload.message,
    }),
    [postCreateEmployeeFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isCreateEmployeeRequest: false,
      isCreateEmployeeSuccess: false,
      isCreateEmployeeFailure: true,
      errorMessage: payload,
    }),

    // GET employees
    [getEmployeesRequest]: (state: IEmployee) => ({
      ...state,
      isGetEmployeesRequest: true,
      isGetEmployeesSuccess: false,
      isGetEmployeesFailure: false,
    }),
    [getEmployeesSuccess]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isGetEmployeesRequest: false,
      isGetEmployeesSuccess: true,
      isGetEmployeesFailure: false,
      data: payload,
      successMessage: payload.message,
    }),
    [getEmployeesFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isGetEmployeesRequest: false,
      isGetEmployeesSuccess: false,
      isGetEmployeesFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default employeeReducer;
