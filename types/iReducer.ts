import rootReducer from "store/rootReducer";

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
  allCompanyData: object | [];
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

export interface IExample {
  data: number;
  errorMessage: string;
}

export type RootState = ReturnType<typeof rootReducer>;
