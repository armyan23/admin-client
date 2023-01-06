import { handleActions } from "redux-actions";
import {
  postCreateCompanyRequest,
  postCreateCompanySuccess,
  postCreateCompanyFailure,
  updateCompanyRequest,
  updateCompanySuccess,
  updateCompanyFailure,
  deleteImageCompanyRequest,
  deleteImageCompanySuccess,
  deleteImageCompanyFailure,
  getAllCompaniesRequest,
  getAllCompaniesSuccess,
  getAllCompaniesFailure,
  getCompanyByIdRequest,
  getCompanyByIdSuccess,
  getCompanyByIdFailure,
} from "./action";
import {
  initialCompany,
  initialCompanyDetails,
} from "util/Initial/InitialValue";
import { ICompanyReducer } from "types/iReducer";

const initialValue: ICompanyReducer = {
  // Create Company
  isCreateCompanyRequest: false,
  isCreateCompanySuccess: false,
  isCreateCompanyFailure: false,
  // Update Company
  isUpdateCompanyRequest: false,
  isUpdateCompanySuccess: false,
  isUpdateCompanyFailure: false,
  // Delete Company
  isDeleteImageCompanyRequest: false,
  isDeleteImageCompanySuccess: false,
  isDeleteImageCompanyFailure: false,
  // Get all Company
  isAllCompanyRequest: false,
  isAllCompanySuccess: false,
  isAllCompanyFailure: false,
  // Get Company by ID
  isCompanyByIdRequest: false,
  isCompanyByIdSuccess: false,
  isCompanyByIdFailure: false,
  companyByIdData: initialCompany,
  companyDetails: initialCompanyDetails,
  createCompanyData: {},
  allCompanyData: [],
  successMessage: "",
  errorMessage: "",
};

const companyReducer = handleActions(
  {
    // Create company
    [postCreateCompanyRequest]: (state: ICompanyReducer) => ({
      ...state,
      isCreateCompanyRequest: true,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: false,
    }),
    [postCreateCompanySuccess]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: true,
      isCreateCompanyFailure: false,
      createCompanyData: payload,
      successMessage: payload.message,
    }),
    [postCreateCompanyFailure]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isCreateCompanyRequest: false,
      isCreateCompanySuccess: false,
      isCreateCompanyFailure: true,
      errorMessage: payload,
    }),
    // Update company
    [updateCompanyRequest]: (state: ICompanyReducer) => ({
      ...state,
      isUpdateCompanyRequest: true,
      isUpdateCompanySuccess: false,
      isUpdateCompanyFailure: false,
    }),
    [updateCompanySuccess]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isUpdateCompanyRequest: false,
      isUpdateCompanySuccess: true,
      isUpdateCompanyFailure: false,
      createCompanyData: payload,
    }),
    [updateCompanyFailure]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isUpdateCompanyRequest: false,
      isUpdateCompanySuccess: false,
      isUpdateCompanyFailure: true,
      errorMessage: payload,
    }),
    // Image company
    [deleteImageCompanyRequest]: (state: ICompanyReducer) => ({
      ...state,
      isDeleteImageCompanyRequest: true,
      isDeleteImageCompanySuccess: false,
      isDeleteImageCompanyFailure: false,
    }),
    [deleteImageCompanySuccess]: (state: ICompanyReducer) => ({
      ...state,
      isDeleteImageCompanyRequest: false,
      isDeleteImageCompanySuccess: true,
      isDeleteImageCompanyFailure: false,
      companyByIdData: { ...state.companyByIdData, image: null },
    }),
    [deleteImageCompanyFailure]: (
      state: ICompanyReducer,
      { payload }: any
    ) => ({
      ...state,
      isDeleteImageCompanyRequest: false,
      isDeleteImageCompanySuccess: false,
      isDeleteImageCompanyFailure: true,
      errorMessage: payload,
    }),
    // Get all companies
    [getAllCompaniesRequest]: (state: ICompanyReducer) => ({
      ...state,
      isAllCompanyRequest: true,
      isAllCompanySuccess: false,
      isAllCompanyFailure: false,
    }),
    [getAllCompaniesSuccess]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: true,
      isAllCompanyFailure: false,
      allCompanyData: payload.data,
    }),
    [getAllCompaniesFailure]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isAllCompanyRequest: false,
      isAllCompanySuccess: false,
      isAllCompanyFailure: true,
      errorMessage: payload,
    }),

    // Get Company by Id
    [getCompanyByIdRequest]: (state: ICompanyReducer) => ({
      ...state,
      isCompanyByIdRequest: true,
      isCompanyByIdSuccess: false,
      isCompanyByIdFailure: false,
    }),
    [getCompanyByIdSuccess]: (state: ICompanyReducer, { payload }: any) => ({
      ...state,
      isCompanyByIdRequest: false,
      isCompanyByIdSuccess: true,
      isCompanyByIdFailure: false,
      companyByIdData: payload.data,
      companyDetails: payload.details,
    }),
    [getCompanyByIdFailure]: (state: ICompanyReducer, { payload }: any) => ({
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
