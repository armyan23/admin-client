import { createAction } from "redux-actions";

// Profile data request
export const profileDataRequest: any = createAction("PROFILE_DATA_REQUEST");
export const profileDataSuccess: any = createAction("PROFILE_DATA_SUCCESS");
export const profileDataFailure: any = createAction("PROFILE_DATA_FAILURE");

// Update user details actions
export const updateUserDetailsRequest: any = createAction(
  "UPDATE_USER_DETAILS_REQUEST"
);
export const updateUserDetailsSuccess: any = createAction(
  "UPDATE_USER_DETAILS_SUCCESS"
);
export const updateUserDetailsFailure: any = createAction(
  "UPDATE_USER_DETAILS_FAILURE"
);

// Delete user image actions
export const deleteUserImageRequest: any = createAction(
  "DELETE_USER_IMAGE_REQUEST"
);
export const deleteUserImageSuccess: any = createAction(
  "DELETE_USER_IMAGE_SUCCESS"
);
export const deleteUserImageFailure: any = createAction(
  "DELETE_USER_IMAGE_FAILURE"
);
