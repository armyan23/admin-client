import { handleActions } from "redux-actions";
import {
  postCreateEmployeeRequest,
  postCreateEmployeeSuccess,
  postCreateEmployeeFailure,
  editEmployeeRequest,
  editEmployeeSuccess,
  editEmployeeFailure,
  deleteEmployeeImageRequest,
  deleteEmployeeImageSuccess,
  deleteEmployeeImageFailure,
  getEmployeesRequest,
  getEmployeesSuccess,
  getEmployeesFailure,
  employeeByIdRequest,
  employeeByIdSuccess,
  employeeByIdFailure,
  deleteEmployeeRequest,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
  restoreEmployeeRequest,
  restoreEmployeeSuccess,
  restoreEmployeeFailure,
} from "./action";
import { IEmployee } from "types/iReducer";

const initialValue: IEmployee = {
  //   Create
  isCreateEmployeeRequest: false,
  isCreateEmployeeSuccess: false,
  isCreateEmployeeFailure: false,
  //   Edit
  isEditEmployeeRequest: false,
  isEditEmployeeSuccess: false,
  isEditEmployeeFailure: false,
  //   Delete Employee image
  isDeleteEmployeeImageRequest: false,
  isDeleteEmployeeImageSuccess: false,
  isDeleteEmployeeImageFailure: false,
  //   Get all employees
  isGetEmployeesRequest: false,
  isGetEmployeesSuccess: false,
  isGetEmployeesFailure: false,
  employeesData: [],
  //   Employee by id
  isEmployeeByIdRequest: false,
  isEmployeeByIdSuccess: false,
  isEmployeeByIdFailure: false,
  employeeByIdData: {},
  //   Delete employee
  isDeleteEmployeeRequest: false,
  isDeleteEmployeeSuccess: false,
  isDeleteEmployeeFailure: false,
  //   Restore employee
  isRestoreEmployeeRequest: false,
  isRestoreEmployeeSuccess: false,
  isRestoreEmployeeFailure: false,
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
    // Edit employee
    [editEmployeeRequest]: (state: IEmployee) => ({
      ...state,
      isEditEmployeeRequest: true,
      isEditEmployeeSuccess: false,
      isEditEmployeeFailure: false,
    }),
    [editEmployeeSuccess]: (state: IEmployee) => ({
      ...state,
      isEditEmployeeRequest: false,
      isEditEmployeeSuccess: true,
      isEditEmployeeFailure: false,
    }),
    [editEmployeeFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isEditEmployeeRequest: false,
      isEditEmployeeSuccess: false,
      isEditEmployeeFailure: true,
      errorMessage: payload,
    }),
    // Edit employee
    [deleteEmployeeImageRequest]: (state: IEmployee) => ({
      ...state,
      isDeleteEmployeeImageRequest: true,
      isDeleteEmployeeImageSuccess: false,
      isDeleteEmployeeImageFailure: false,
    }),
    [deleteEmployeeImageSuccess]: (state: IEmployee) => ({
      ...state,
      isDeleteEmployeeImageRequest: false,
      isDeleteEmployeeImageSuccess: true,
      isDeleteEmployeeImageFailure: false,
      employeeByIdData: { ...state.employeeByIdData, image: null },
    }),
    [deleteEmployeeImageFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isDeleteEmployeeImageRequest: false,
      isDeleteEmployeeImageSuccess: false,
      isDeleteEmployeeImageFailure: true,
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
      employeesData: payload,
      successMessage: payload.message,
    }),
    [getEmployeesFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isGetEmployeesRequest: false,
      isGetEmployeesSuccess: false,
      isGetEmployeesFailure: true,
      errorMessage: payload,
    }),
    // GET employee by ID
    [employeeByIdRequest]: (state: IEmployee) => ({
      ...state,
      isEmployeeByIdRequest: true,
      isEmployeeByIdSuccess: false,
      isEmployeeByIdFailure: false,
    }),
    [employeeByIdSuccess]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isEmployeeByIdRequest: false,
      isEmployeeByIdSuccess: true,
      isEmployeeByIdFailure: false,
      employeeByIdData: payload,
    }),
    [employeeByIdFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isEmployeeByIdRequest: false,
      isEmployeeByIdSuccess: false,
      isEmployeeByIdFailure: true,
      errorMessage: payload,
    }),
    // Delete employee
    [deleteEmployeeRequest]: (state: IEmployee) => ({
      ...state,
      isDeleteEmployeeRequest: true,
      isDeleteEmployeeSuccess: false,
      isDeleteEmployeeFailure: false,
    }),
    [deleteEmployeeSuccess]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isDeleteEmployeeRequest: false,
      isDeleteEmployeeSuccess: true,
      isDeleteEmployeeFailure: false,
      employeesData: state.employeesData.filter(
        (elem: any) => elem.id !== payload.id
      ),
    }),
    [deleteEmployeeFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isDeleteEmployeeRequest: false,
      isDeleteEmployeeSuccess: false,
      isDeleteEmployeeFailure: true,
      errorMessage: payload,
    }),
    // Restore employee
    [restoreEmployeeRequest]: (state: IEmployee) => ({
      ...state,
      isRestoreEmployeeRequest: true,
      isRestoreEmployeeSuccess: false,
      isRestoreEmployeeFailure: false,
    }),
    [restoreEmployeeSuccess]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isRestoreEmployeeRequest: false,
      isRestoreEmployeeSuccess: true,
      isRestoreEmployeeFailure: false,
      employeesData: state.employeesData.filter(
        (elem: any) => elem.id !== payload.id
      ),
    }),
    [restoreEmployeeFailure]: (state: IEmployee, { payload }: any) => ({
      ...state,
      isRestoreEmployeeRequest: false,
      isRestoreEmployeeSuccess: false,
      isRestoreEmployeeFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default employeeReducer;
