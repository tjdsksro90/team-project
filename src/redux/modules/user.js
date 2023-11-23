//관리 초기 상태
const initialState = {
  user: null,
  userEmail:null,
};
//액션타입

const LOG_IN = "user/LOG_IN";
const LOG_OUT = "user/LOG_OUT";
const USER_EMAIL = "user/USER_EMAIL"

export const loginUser = (user) => ({
  type: LOG_IN,
  payload: user
});

export const logoutUser = () => ({
  type: LOG_OUT
});

export const useremail = (userEmail) =>({
  type:USER_EMAIL,
  payload:userEmail
})


export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        user: null
      };

      case USER_EMAIL:
        const newUser = action.payload;
        return [newUser, ...state]

    default:
      return state;
  }
}
