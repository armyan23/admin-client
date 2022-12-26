import rootReducer from "store/rootReducer";
import { IUserDetails } from "./iForm";

export interface ICompany {
  isCreateCompanyRequest: boolean;
  isCreateCompanySuccess: boolean;
  isCreateCompanyFailure: boolean;
  isAllCompanyRequest: boolean;
  isAllCompanySuccess: boolean;
  isAllCompanyFailure: boolean;
  isCompanyByIdRequest: boolean;
  isCompanyByIdSuccess: boolean;
  isCompanyByIdFailure: boolean;
  companyByIdData: object | [];
  createCompanyData: object | [];
  allCompanyData: [];
  successMessage: string;
  errorMessage: string;
}

export interface IEmployee {
  isCreateEmployeeRequest: boolean;
  isCreateEmployeeSuccess: boolean;
  isCreateEmployeeFailure: boolean;
  isEditEmployeeRequest: boolean;
  isEditEmployeeSuccess: boolean;
  isEditEmployeeFailure: boolean;
  isGetEmployeesRequest: boolean;
  isGetEmployeesSuccess: boolean;
  isGetEmployeesFailure: boolean;
  isEmployeeByIdRequest: boolean;
  isEmployeeByIdSuccess: boolean;
  isEmployeeByIdFailure: boolean;
  isDeleteEmployeeRequest: boolean;
  isDeleteEmployeeSuccess: boolean;
  isDeleteEmployeeFailure: boolean;
  isRestoreEmployeeRequest: boolean;
  isRestoreEmployeeSuccess: boolean;
  isRestoreEmployeeFailure: boolean;
  employeeByIdData: object;
  data: [];
  successMessage: string;
  errorMessage: string;
}

export interface IAuth {
  registerRequest: boolean;
  registerSuccess: boolean;
  registerFailure: boolean;
  verifyRequest: boolean;
  verifySuccess: boolean;
  verifyFailure: boolean;
  loginRequest: boolean;
  loginSuccess: boolean;
  loginFailure: boolean;
  isAuthenticatedRequest: boolean;
  isAuthenticatedSuccess: boolean;
  isAuthenticatedFailure: boolean;
  isAuthenticated: boolean;
  data: object | [];
  successMessage: string;
  errorMessage: string;
}

export interface IProfile {
  isProfileDataRequest: boolean;
  isProfileDataSuccess: boolean;
  isProfileDataFailure: boolean;
  isUpdateUserDetailsRequest: boolean;
  isUpdateUserDetailsSuccess: boolean;
  isUpdateUserDetailsFailure: boolean;
  userDetails: IUserDetails | null;
  profileData: object | null;
  errorMessage: string;
}

export interface IExample {
  data: number;
  errorMessage: string;
}

export type RootState = ReturnType<typeof rootReducer>;
