//관리 초기 상태
const initialState = {
  user: null,
  userEmail: null
};
//액션타입

const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
const USER_EMAIL = "user/USER_EMAIL";

//객체를 리턴하려면 return문이 필요하다
export const loginUser = (user) => {
  return {
    type: LOG_IN,
    payload: user
  };
};

export const logoutUser = () => {
  return {
    type: LOG_OUT
  };
};

export const useremail = (userEmail) => {
  return {
    type: USER_EMAIL,
    payload: userEmail
  };
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload
      };

    case LOG_OUT:
      return {
        ...state,
        user: null
      };

    case USER_EMAIL:
      return {...state, useremail:action.payload };

    default:
      return state;
  }
}
