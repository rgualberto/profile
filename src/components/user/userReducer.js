export const SET_USER = 'user/SET_USER';
export const SET_INVALID_LOGIN = 'user/SET_INVALID_LOGIN';

export const initialState = {
  currentUser: {},
  invalidLogin: false
};

// Move to database in production environment
export const users = [
  {
    id: 123,
    name: "doctor_doge",
    password: "verywow123"
  }
];

export const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          currentUser: action.currentUser
        };
      case SET_INVALID_LOGIN:
        return {
          ...state,
          invalidLogin: action.invalidLogin
        };
      default:
        return state;
    }
};

export const setUser = currentUser => ({
  type: SET_USER,
  currentUser
});

export const setInvalidLogin = invalidLogin => ({
  type: SET_INVALID_LOGIN,
  invalidLogin
});

export default userReducer;
