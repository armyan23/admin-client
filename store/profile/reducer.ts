import { handleActions } from "redux-actions";
import { IProfile } from "types/iReducer";
import {
  profileDataRequest,
  profileDataSuccess,
  profileDataFailure,
} from "./actions";

export const initialValue: IProfile = {
  isProfileDataRequest: false,
  isProfileDataSuccess: false,
  isProfileDataFailure: false,
  profileData: {},
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
      data: payload,
    }),
    [profileDataFailure]: (state: IProfile, { payload }: any) => ({
      ...state,
      isProfileDataRequest: false,
      isProfileDataSuccess: false,
      isProfileDataFailure: true,
      errorMessage: payload,
    }),
  },
  initialValue
);

export default profileReducer;
