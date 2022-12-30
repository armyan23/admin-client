import { handleActions } from "redux-actions";
import {
  postCreateCompanyRequest,
  postCreateCompanySuccess,
  postCreateCompanyFailure,
  updateCompanyRequest,
  updateCompanySuccess,
  updateCompanyFailure,
  getAllCompaniesRequest,
  getAllCompaniesSuccess,
  getAllCompaniesFailure,
  getCompanyByIdRequest,
  getCompanyByIdSuccess,
  getCompanyByIdFailure,
} from "./action";
import { ICompany } from "types/iReducer";

const initialValue: ICompany = {
  isCreateCompanyRequest: false,
  isCreateCompanySuccess: false,
  isCreateCompanyFailure: false,
  isUpdateCompanyRequest: false,
  isUpdateCompanySuccess: false,
  isUpdateCompanyFailure: false,
  isAllCompanyRequest: false,
  isAllCompanySuccess: false,
  isAllCompanyFailure: false,
  isCompanyByIdRequest: false,
  isCompanyByIdSuccess: false,
  isCompanyByIdFailure: false,
  companyByIdData: {},
  createCompanyData: {},
  allCompanyData: [],
  successMessage: "",
  errorMessage: "",
};

const companyReducer = handleActions(
  {
    // Create company
    [postCreateCompanyRequest]: (state: ICompany) => ({
      ...state,
      isCreateCompanyRequest: true,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: false,
    }),
    [postCreateCompanySuccess]: (state: ICompany, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: true,
      isCreateCompanyFailure: false,
      createCompanyData: payload,
      successMessage: payload.message,
    }),
    [postCreateCompanyFailure]: (state: ICompany, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: true,
      errorMessage: payload,
    }),
    // Update company
    [updateCompanyRequest]: (state: ICompany) => ({
      ...state,
      isUpdateCompanyRequest: true,
      isUpdateCompanySuccess: false,
      isUpdateCompanyFailure: false,
    }),
    [updateCompanySuccess]: (state: ICompany, { payload }: any) => ({
      ...state,
      isUpdateCompanyRequest: false,
      isUpdateCompanySuccess: true,
      isUpdateCompanyFailure: false,
      createCompanyData: payload,
    }),
    [updateCompanyFailure]: (state: ICompany, { payload }: any) => ({
      ...state,
      isUpdateCompanyRequest: false,
      isUpdateCompanySuccess: false,
      isUpdateCompanyFailure: true,
      errorMessage: payload,
    }),
    // Get all companies
    [getAllCompaniesRequest]: (state: ICompany) => ({
      ...state,
      isAllCompanyRequest: true,
      isAllCompanySuccess: false,
      isAllCompanyFailure: false,
    }),
    [getAllCompaniesSuccess]: (state: ICompany, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: true,
      isAllCompanyFailure: false,
      allCompanyData: payload.data,
    }),
    [getAllCompaniesFailure]: (state: ICompany, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: false,
      isAllCompanyFailure: true,
      errorMessage: payload,
    }),

    // Get Company by Id
    [getCompanyByIdRequest]: (state: ICompany) => ({
      ...state,
      isCompanyByIdRequest: true,
      isCompanyByIdSuccess: false,
      isCompanyByIdFailure: false,
    }),
    [getCompanyByIdSuccess]: (state: ICompany, { payload }: any) => ({
      ...state,
      isCompanyByIdRequest: false,
      isCompanyByIdSuccess: true,
      isCompanyByIdFailure: false,
      companyByIdData: payload,
    }),
    [getCompanyByIdFailure]: (state: ICompany, { payload }: any) => ({
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
