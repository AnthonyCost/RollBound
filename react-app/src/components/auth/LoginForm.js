import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import DemoUserButton from './DemoUserButton';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();



  const redirectToSignUp = async (e) => {
    e.preventDefault();
    history.push('/sign-up');
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/'/>;
  }

  return (
    <div className="splash-container">
      <div className="splash-banner">
      <h1 className="splash-header">RollBound</h1>
      <h3 className="splash-subheader">Weave your legend</h3>
      </div>
      <div className="form">
      <form onSubmit={onLogin}>
        <h2 className="formTitle">Log In</h2>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
            />
        </div>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
        <div>
          <DemoUserButton />
          <button onClick={redirectToSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
