import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/userActions';

const Signin = ({ dispatch, error }) => {
  let emailInput = null;
  let passwordInput = null;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin({
      email: emailInput.value,
      password: passwordInput.value,
    }));
  };

  return (
    <form action="#" onSubmit={submitHandler} className="quicksand">
      <h3>{'Already have an account? Sign in here!'}</h3>
      <div>
        <input
          required
          type="email"
          className="inputsize inputmargin"
          placeholder="Enter email"
          ref={(ref) => { emailInput = ref; }}
        />
      </div>
      <div>
        <input
          required
          type="password"
          className="inputsize inputmargin"
          placeholder="Enter super secret password"
          ref={(ref) => { passwordInput = ref; }}
        />
      </div>
      <p className="error-message">{error}</p>
      <button type="submit" className="btn btn-success submitbutton green">Signin</button>
    </form>
  );
};

export default connect(state => ({
  error: state.error.signin,
}), null)(Signin);
