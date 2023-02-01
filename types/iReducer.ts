import rootReducer from "store/rootReducer";
import { IUserDetails, ICompanyForm, ICompanyDetails } from "./iForm";

export interface ICompanyReducer {
  isCreateCompanyRequest: boolean;
  isCreateCompanySuccess: boolean;
  isCreateCompanyFailure: boolean;
  isUpdateCompanyRequest: boolean;
  isUpdateCompanySuccess: boolean;
  isUpdateCompanyFailure: boolean;
  isDeleteImageCompanyRequest: boolean;
  isDeleteImageCompanySuccess: boolean;
  isDeleteImageCompanyFailure: boolean;
  isDeleteCompanyRequest: boolean;
  isDeleteCompanySuccess: boolean;
  isDeleteCompanyFailure: boolean;
  isAllCompanyRequest: boolean;
  isAllCompanySuccess: boolean;
  isAllCompanyFailure: boolean;
  isCompanyByIdRequest: boolean;
  isCompanyByIdSuccess: boolean;
  isCompanyByIdFailure: boolean;
  companyDetails: ICompanyDetails;
  companyByIdData: ICompanyForm;
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
  isDeleteEmployeeImageRequest: boolean;
  isDeleteEmployeeImageSuccess: boolean;
  isDeleteEmployeeImageFailure: boolean;
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
  employeesData: [];
  successMessage: string;
  errorMessage: string;
}

export interface IAdmin {
  isCreateAdminRequest: boolean;
  isCreateAdminSuccess: boolean;
  isCreateAdminFailure: boolean;
  isAllAdminsRequest: boolean;
  isAllAdminsSuccess: boolean;
  isAllAdminsFailure: boolean;
  isDeleteAdminsRequest: boolean;
  isDeleteAdminsSuccess: boolean;
  isDeleteAdminsFailure: boolean;
  isChangeAdminPasswordRequest: boolean;
  isChangeAdminPasswordSuccess: boolean;
  isChangeAdminPasswordFailure: boolean;
  adminsData: [];
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
  isDeleteUserImageRequest: boolean;
  isDeleteUserImageSuccess: boolean;
  isDeleteUserImageFailure: boolean;
  userDetails: IUserDetails | null;
  profileData: object | null;
  errorMessage: string;
}

export interface IExample {
  data: number;
  errorMessage: string;
}

export type RootState = ReturnType<typeof rootReducer>;
