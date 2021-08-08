import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [img_url, setImg_url] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, img_url));
      if (data.errors) {
        setErrors(data.errors)
      }
    }
    else if(password !== repeatPassword) {
      setErrors(["Passwords do not match, try again"])
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

const updateImage = (e) => {
    const file = e.target.files[0];
    setImg_url(file);
}


  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="form">
    <form onSubmit={onSignUp}>
      <h2 className="formTitle">Sign Up</h2>
      <div className="form-element">
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
          ></input>
      </div>
      <div className="form-element">
        <label>Email</label>
        <input
          type='text'
          name='email'
          required={true}
          onChange={updateEmail}
          value={email}
          ></input>
      </div>
      <div className="form-element">
        <label>Profile Image</label>
        <input
              type="file"
              accept="image/*"
              onChange={updateImage}
              required={true}
              />
            {(imageLoading)&& <p>Loading...</p>}
      </div>
      <div className="form-element">
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
          ></input>
      </div>
      <div className="form-element">
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          ></input>
      </div>
          <div className="form-errors">
            {errors?.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
      <button type='submit'>Sign Up</button>
    </form>
      <img  className="splash-logo" src="https://user-images.githubusercontent.com/35717793/127536568-030443d6-ab1d-48f2-9da5-c422545245e5.png" alt="RollBound logo" />
    </div>
  );
};

export default SignUpForm;
