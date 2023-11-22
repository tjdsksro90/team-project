//관리 초기 상태
const initialState = {
  user: null,
  error: null
};
//액션타입

const REGISTER_SUCCESS = "user/REGISTER_SUCCESS";
const REGISTER_FAIL = "user/REGISTER_FAIL";
const SET_ERROR = "user/SET_ERROR";
const LOG_IN = "user/LOG_IN";
const LOG_OUT = "LOG_OUT";

export const loginUser = (user) => ({
  type: LOG_IN,
  payload: user
});

export const logoutUser = () => ({
  type: LOG_OUT
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
        error: null
      };

    case LOG_OUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
