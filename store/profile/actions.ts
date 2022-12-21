import { createAction } from "redux-actions";

// Profile data request
export const profileDataRequest: any = createAction("PROFILE_DATA_REQUEST");
export const profileDataSuccess: any = createAction("PROFILE_DATA_SUCCESS");
export const profileDataFailure: any = createAction("PROFILE_DATA_FAILURE");
