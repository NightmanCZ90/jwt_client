import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Signup = ({ handleSubmit, signup }) => {

  const onSubmit = (formProps) => {
    signup(formProps);
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
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(Signup);