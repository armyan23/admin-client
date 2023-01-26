import { handleActions } from "redux-actions";
import {
  createAdminRequest,
  createAdminSuccess,
  createAdminFailure,
  allAdminsRequest,
  allAdminsSuccess,
  allAdminsFailure,
  deleteAdminRequest,
  deleteAdminSuccess,
  deleteAdminFailure,
} from "./action";
import { IAdmin } from "types/iReducer";

const initialValue: IAdmin = {
  //   Create Admin
  isCreateAdminRequest: false,
  isCreateAdminSuccess: false,
  isCreateAdminFailure: false,
  //   Get Admins
  isAllAdminsRequest: false,
  isAllAdminsSuccess: false,
  isAllAdminsFailure: false,
  adminsData: [],
  //   Delete Admin
  isDeleteAdminsRequest: false,
  isDeleteAdminsSuccess: false,
  isDeleteAdminsFailure: false,
  successMessage: "",
  errorMessage: "",
};

const adminReducer = handleActions(
  {
    // Create Admin
    [createAdminRequest]: (state: IAdmin) => ({
      ...state,
      isCreateAdminRequest: true,
      isCreateAdminSuccess: false,
      isCreateAdminFailure: false,
    }),
    [createAdminSuccess]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isCreateAdminRequest: false,
      isCreateAdminSuccess: true,
      isCreateAdminFailure: false,
      successMessage: payload.message,
    }),
    [createAdminFailure]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isCreateAdminRequest: false,
      isCreateAdminSuccess: false,
      isCreateAdminFailure: true,
      errorMessage: payload,
    }),
    // Get Admins
    [allAdminsRequest]: (state: IAdmin) => ({
      ...state,
      isAllAdminsRequest: true,
      isAllAdminsSuccess: false,
      isAllAdminsFailure: false,
    }),
    [allAdminsSuccess]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isAllAdminsRequest: false,
      isAllAdminsSuccess: true,
      isAllAdminsFailure: false,
      adminsData: payload,
      successMessage: payload.message,
    }),
    [allAdminsFailure]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isAllAdminsRequest: false,
      isAllAdminsSuccess: false,
      isAllAdminsFailure: true,
      errorMessage: payload,
    }),
    // Delete Admin
    [deleteAdminRequest]: (state: IAdmin) => ({
      ...state,
      isDeleteAdminsRequest: true,
      isDeleteAdminsSuccess: false,
      isDeleteAdminsFailure: false,
    }),
    [deleteAdminSuccess]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isDeleteAdminsRequest: false,
      isDeleteAdminsSuccess: true,
      isDeleteAdminsFailure: false,
      // adminsData: payload,
    }),
    [deleteAdminFailure]: (state: IAdmin, { payload }: any) => ({
      ...state,
      isDeleteAdminsRequest: false,
      isDeleteAdminsSuccess: false,
      isDeleteAdminsFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default adminReducer;
