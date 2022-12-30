import { createAction } from "redux-actions";

// Create company action
export const postCreateCompanyRequest: any = createAction(
  "POST_CREATE_COMPANY_REQUEST"
);
export const postCreateCompanySuccess: any = createAction(
  "POST_CREATE_COMPANY_SUCCESS"
);
export const postCreateCompanyFailure: any = createAction(
  "POST_CREATE_COMPANY_FAILURE"
);

// Update company action
export const updateCompanyRequest: any = createAction("UPDATE_COMPANY_REQUEST");
export const updateCompanySuccess: any = createAction("UPDATE_COMPANY_SUCCESS");
export const updateCompanyFailure: any = createAction("UPDATE_COMPANY_FAILURE");

// Image company action
export const deleteImageCompanyRequest: any = createAction(
  "DELETE_IMAGE_COMPANY_REQUEST"
);
export const deleteImageCompanySuccess: any = createAction(
  "DELETE_IMAGE_COMPANY_SUCCESS"
);
export const deleteImageCompanyFailure: any = createAction(
  "DELETE_IMAGE_COMPANY_FAILURE"
);

// Get all companies action
export const getAllCompaniesRequest: any = createAction(
  "GET_ALL_COMPANIES_REQUEST"
);
export const getAllCompaniesSuccess: any = createAction(
  "GET_ALL_COMPANIES_SUCCESS"
);
export const getAllCompaniesFailure: any = createAction(
  "GET_ALL_COMPANIES_FAILURE"
);

// Get company by ID action
export const getCompanyByIdRequest: any = createAction(
  "GET_COMPANY_BY_ID_REQUEST"
);
export const getCompanyByIdSuccess: any = createAction(
  "GET_COMPANY_BY_ID_SUCCESS"
);
export const getCompanyByIdFailure: any = createAction(
  "GET_COMPANY_BY_ID_FAILURE"
);
