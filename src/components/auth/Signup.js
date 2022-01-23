import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { useNavigate } from 'react-router-dom'

const Signup = ({ errorMessage, handleSubmit, signup }) => {
  const navigate = useNavigate();

  const onSubmit = (formProps) => {
    signup(formProps, () => {
      navigate('/feature');
    });
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label htmlFor="">Email</label>
        <Field
          name="email"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="">Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>
        {errorMessage}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

function mapState(state) {
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapState, actions),
  reduxForm({ form: 'signup' }),
)(Signup);