export const SHOW_NAME = "PROFILE::SHOW_NAME";
export const SET_NAME = "PROFILE::SET_NAME";
export const SIGN_IN = "PROFILE::SIGN_IN";
export const SIGN_OUT = "PROFILE::SIGN_OUT";

export const toggleName = {
  type: SHOW_NAME,
};

export const setName = (newName) => ({
  type: SET_NAME,
  payload: newName,
});

export const signIn = () => ({
  type: SIGN_IN,
});
export const signOut = () => ({
  type: SIGN_OUT,
});

