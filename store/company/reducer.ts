import { handleActions } from "redux-actions";
import {
  postCreateCompanyRequest,
  postCreateCompanySuccess,
  postCreateCompanyFailure,
  getAllCompaniesRequest,
  getAllCompaniesSuccess,
  getAllCompaniesFailure,
  getCompanyByIdRequest,
  getCompanyByIdSuccess,
  getCompanyByIdFailure,
} from "./action";

interface IAuth {
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

const initialValue: IAuth = {
  isCreateCompanyRequest: false,
  isCreateCompanySuccess: false,
  isCreateCompanyFailure: false,
  isAllCompanyRequest: false,
  isAllCompanySuccess: false,
  isAllCompanyFailure: false,
  isCompanyByIdRequest: false,
  isCompanyByIdSuccess: false,
  isCompanyByIdFailure: false,
  companyByIdData: {},
  createCompanyData: {},
  allCompanyData: {},
  successMessage: "",
  errorMessage: "",
};

const companyReducer = handleActions(
  {
    // Create company
    [postCreateCompanyRequest]: (state: IAuth) => ({
      ...state,
      isCreateCompanyRequest: true,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: false,
    }),
    [postCreateCompanySuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: true,
      isCreateCompanyFailure: false,
      createCompanyData: payload,
    }),
    [postCreateCompanyFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: true,
      errorMessage: payload,
    }),

    // Get all companies
    [getAllCompaniesRequest]: (state: IAuth) => ({
      ...state,
      isAllCompanyRequest: true,
      isAllCompanySuccess: false,
      isAllCompanyFailure: false,
    }),
    [getAllCompaniesSuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: true,
      isAllCompanyFailure: false,
      allCompanyData: payload.data,
    }),
    [getAllCompaniesFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: false,
      isAllCompanyFailure: true,
      errorMessage: payload,
    }),

    // Get Company by Id
    [getCompanyByIdRequest]: (state: IAuth) => ({
      ...state,
      isCompanyByIdRequest: true,
      isCompanyByIdSuccess: false,
      isCompanyByIdFailure: false,
    }),
    [getCompanyByIdSuccess]: (state: IAuth, { payload }: any) => ({
      ...state,
      isCompanyByIdRequest: false,
      isCompanyByIdSuccess: true,
      isCompanyByIdFailure: false,
      companyByIdData: payload,
    }),
    [getCompanyByIdFailure]: (state: IAuth, { payload }: any) => ({
      ...state,
      isCompanyByIdRequest: false,
      isCompanyByIdSuccess: false,
      isCompanyByIdFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default companyReducer;
