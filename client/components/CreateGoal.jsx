import React from 'react';
import { connect } from 'react-redux';
import { createGoal, fetchGoals, deleteGoal } from '../actions/goalActions.js';
import { displayGoals } from '../helpers/goalHelpers.jsx';

const CreateGoal = (props) => {
  let goalName = null;
  let goalAmount = null;
  let goalTimeframe = null;
  let goalID = null;

  const submitHandler = (e) => {
    e.preventDefault();
    props.dispatch(createGoal({
      user_id: props.user_id,
      name: goalName.value,
      amount: goalAmount.value,
      date: goalTimeframe.value,
    }));
    goalName.value = '';
    goalAmount.value = '';
    goalTimeframe.value = '';
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    goalID = Number(e.target.attributes['data-goal'].value);
    props.dispatch(deleteGoal({
      user_id: props.user_id,
      goal_id: goalID,
    }));
  };

  return (
    <div>
      <form action="#" onSubmit={submitHandler} className="centertext quicksand">
        <h3>Create A Goal</h3>
        <input type="text" className="inputsize inputmargin" placeholder="Name your budget" ref={(ref) => { goalName = ref; }} />
        <input type="number" className="inputsize inputmargin" placeholder="Enter amount" ref={(ref) => { goalAmount = ref; }} />
        <input type="date" className="inputsize inputmargin" ref={(ref) => { goalTimeframe = ref; }} />
        <button type="submit" className="btn btn-success submitbutton green">Submit</button>
      </form>
      <div className="quicksand">
        <h3>Current Goals</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {displayGoals(props.goals, deleteHandler)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default connect(state => ({
  user_id: state.user.id,
  goals: state.goals.goalsData,
}))(CreateGoal);
