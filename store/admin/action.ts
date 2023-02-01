import { createAction } from "redux-actions";

// Create Admin action
export const createAdminRequest: any = createAction("CREATE_ADMIN_REQUEST");
export const createAdminSuccess: any = createAction("CREATE_ADMIN_SUCCESS");
export const createAdminFailure: any = createAction("CREATE_ADMIN_FAILURE");

// Get all Admins action
export const allAdminsRequest: any = createAction("ALL_ADMINS_REQUEST");
export const allAdminsSuccess: any = createAction("ALL_ADMINS_SUCCESS");
export const allAdminsFailure: any = createAction("ALL_ADMINS_FAILURE");

// Delete Admin action
export const changeAdminPasswordRequest: any = createAction(
  "CHANGE_ADMIN_PASSWORD_REQUEST"
);
export const changeAdminPasswordSuccess: any = createAction(
  "CHANGE_ADMIN_PASSWORD_SUCCESS"
);
export const changeAdminPasswordFailure: any = createAction(
  "CHANGE_ADMIN_PASSWORD_FAILURE"
);

// Delete Admin action
export const deleteAdminRequest: any = createAction("DELETE_ADMIN_REQUEST");
export const deleteAdminSuccess: any = createAction("DELETE_ADMIN_SUCCESS");
export const deleteAdminFailure: any = createAction("DELETE_ADMIN_FAILURE");
