export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
  case 'SIGNUP_FAILED': {
    newState.signup = action.payload;
    break;
  }
  case 'SIGNIN_FAILED': {
    newState.signin = action.payload;
    break;
  }
  case 'LINK_ACCOUNTS_FAILED': {
    newState.addBank = action.payload;
    break;
  }
  }
  return newState;
}
