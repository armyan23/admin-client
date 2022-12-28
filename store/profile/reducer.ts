import { handleActions } from "redux-actions";
import { IProfile } from "types/iReducer";
import {
  profileDataRequest,
  profileDataSuccess,
  profileDataFailure,
  updateUserDetailsRequest,
  updateUserDetailsSuccess,
  updateUserDetailsFailure,
  deleteUserImageRequest,
  deleteUserImageSuccess,
  deleteUserImageFailure,
} from "./actions";

export const initialValue: IProfile = {
  // Get user data
  isProfileDataRequest: false,
  isProfileDataSuccess: false,
  isProfileDataFailure: false,
  // update user details
  isUpdateUserDetailsRequest: false,
  isUpdateUserDetailsSuccess: false,
  isUpdateUserDetailsFailure: false,
  // update user details
  isDeleteUserImageRequest: false,
  isDeleteUserImageSuccess: false,
  isDeleteUserImageFailure: false,
  profileData: null,
  userDetails: null,
  errorMessage: "",
};

const profileReducer = handleActions(
  {
    // Profile data reducer
    [profileDataRequest]: (state: IProfile) => ({
      ...state,
      isProfileDataRequest: true,
      isProfileDataSuccess: false,
      isProfileDataFailure: false,
    }),
    [profileDataSuccess]: (state: IProfile, { payload }: any) => ({
      ...state,
      isProfileDataRequest: false,
      isProfileDataSuccess: true,
      isProfileDataFailure: false,
      userDetails: payload.details,
      profileData: payload,
    }),
    [profileDataFailure]: (state: IProfile, { payload }: any) => ({
      ...state,
      isProfileDataRequest: false,
      isProfileDataSuccess: false,
      isProfileDataFailure: true,
      errorMessage: payload,
    }),
    // Update user details reducer
    [updateUserDetailsRequest]: (state: IProfile) => ({
      ...state,
      isUpdateUserDetailsRequest: true,
      isUpdateUserDetailsSuccess: false,
      isUpdateUserDetailsFailure: false,
    }),
    [updateUserDetailsSuccess]: (state: IProfile) => ({
      ...state,
      isUpdateUserDetailsRequest: false,
      isUpdateUserDetailsSuccess: true,
      isUpdateUserDetailsFailure: false,
    }),
    [updateUserDetailsFailure]: (state: IProfile, { payload }: any) => ({
      ...state,
      isUpdateUserDetailsRequest: false,
      isUpdateUserDetailsSuccess: false,
      isUpdateUserDetailsFailure: true,
      errorMessage: payload,
    }),
    // Delete user image
    [deleteUserImageRequest]: (state: IProfile) => ({
      ...state,
      isDeleteUserImageRequest: true,
      isDeleteUserImageSuccess: false,
      isDeleteUserImageFailure: false,
    }),
    [deleteUserImageSuccess]: (state: IProfile) => ({
      ...state,
      isDeleteUserImageRequest: false,
      isDeleteUserImageSuccess: true,
      isDeleteUserImageFailure: false,
      userDetails: { ...state.userDetails, image: null },
    }),
    [deleteUserImageFailure]: (state: IProfile, { payload }: any) => ({
      ...state,
      isDeleteUserImageRequest: false,
      isDeleteUserImageSuccess: false,
      isDeleteUserImageFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default profileReducer;
