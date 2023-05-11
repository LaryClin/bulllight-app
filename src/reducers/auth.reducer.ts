interface AuthState {
  loading: boolean;
  loggedIn: boolean;
  error?: string;
}

const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  error: undefined,
};

export const authReducer = (
  state: AuthState = initialState,
  action: { type: string; payload?: any }
): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
        loggedIn: false,
        error: undefined,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: undefined,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload?.message,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
